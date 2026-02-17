import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

const skills = [
    'React', 'Node.js', 'MongoDB', 'Express',
    'JavaScript', 'TypeScript', 'Tailwind', 'HTML5',
    'CSS3', 'Git', 'GitHub', 'Redux',
    'Next.js', 'Pyhthon', 'GraphQL', 'AWS'
];

function FloatingWord({ children, ...props }) {
    const fontProps = { font: 'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff', fontSize: 1.2, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    const over = (e) => { e.stopPropagation(); setHovered(true) }
    const out = () => setHovered(false)

    const { color } = useSpring({ color: hovered ? '#fa2720' : '#4f46e5' })

    return (
        <group {...props}>
            <Float floatIntensity={5} rotationIntensity={2}>
                <Text
                    ref={ref}
                    onPointerOver={over}
                    onPointerOut={out}
                    {...fontProps}
                >
                    {children}
                    <animated.meshBasicMaterial color={color} />
                </Text>
            </Float>
        </group>
    )
}

function Cloud({ count = 4, radius = 20 }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        let k = 0;

        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) {
                const skill = skills[k % skills.length];
                k++;

                // Use spherical coordinates to place items
                spherical.set(radius, phiSpan * i, thetaSpan * j)
                temp.push([new THREE.Vector3().setFromSpherical(spherical), skill])
            }
        return temp
    }, [count, radius])

    return words.map(([pos, word], index) => <FloatingWord key={index} position={pos} children={word} />)
}

export default function BackgroundScene() {
    const scroll = useScroll();
    const group = useRef();
    const cube = useRef();
    const sphere = useRef();
    const { width, height } = useThree((state) => state.viewport);

    useFrame((state, delta) => {
        // Calculate scroll offset (0 to 1)
        const r1 = scroll.range(0 / 4, 1 / 4); // Home
        const r2 = scroll.range(1 / 4, 1 / 4); // About
        const r3 = scroll.range(2 / 4, 1 / 4); // Skills
        // const r4 = scroll.range(3 / 4, 1 / 4); // Projects

        // Background rotation (starfield effect helper)
        if (group.current) {
            group.current.rotation.y += delta * 0.1;
            // group.current.position.z = THREE.MathUtils.damp(group.current.position.z, -scroll.offset * 20, 4, delta)
        }

        // Hero Cube Animation
        if (cube.current) {
            cube.current.rotation.x += delta;
            cube.current.rotation.y += delta;

            // Move out of view when scrolling past hero
            const exitHero = scroll.range(0, 0.2);
            cube.current.position.x = THREE.MathUtils.lerp(0, -width * 0.4, exitHero); // Move left
            cube.current.scale.setScalar(THREE.MathUtils.lerp(1.5, 0.5, exitHero));

            // Further scroll moves it away completely
            const enterAbout = scroll.range(0.15, 0.2);
            cube.current.position.y = THREE.MathUtils.lerp(0, height * 0.3, enterAbout);
        }

        // Skills Sphere Animation (approaches on scroll)
        if (sphere.current) {
            sphere.current.rotation.y -= delta * 0.2;

            // Only visible/centered in skills section
            // Home (0) -> Skills (0.5)
            const enterSkills = scroll.curve(0.4, 0.2); // Peak at 0.5

            // Position
            // Start far away, come to center, then leave
            // Let's make it emerge from bottom
            const yPos = THREE.MathUtils.lerp(
                -20, // offscreen bottom
                0,   // center
                enterSkills
            );

            sphere.current.position.y = yPos;
            sphere.current.scale.setScalar(THREE.MathUtils.lerp(0, 1, enterSkills));
        }

    });

    return (
        <>
            <group ref={group}>
                {/* Random particles for background */}
                {Array.from({ length: 100 }).map((_, i) => (
                    <mesh
                        key={i}
                        position={[
                            (Math.random() - 0.5) * 30,
                            (Math.random() - 0.5) * 30,
                            (Math.random() - 0.5) * 30 - 10
                        ]}
                    >
                        <sphereGeometry args={[0.03, 8, 8]} />
                        <meshBasicMaterial color="#ffffff" opacity={0.4} transparent />
                    </mesh>
                ))}
            </group>

            {/* Hero Element: Floating Crystal */}
            <Float floatIntensity={2} speed={3}>
                <mesh ref={cube} position={[4, 0, 0]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshNormalMaterial wireframe={true} />
                    <meshBasicMaterial color="#6366f1" wireframe />
                </mesh>
            </Float>

            {/* Skills Element: Word Cloud Sphere */}
            <group ref={sphere} position={[0, -20, 0]}>
                <Cloud count={4} radius={6} />
                {/* Inner core */}
                <mesh>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color="#4338ca" wireframe transparent opacity={0.2} />
                </mesh>
            </group>

        </>
    );
}
