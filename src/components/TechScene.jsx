import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
    'React', 'Node.js', 'MongoDB', 'Express',
    'JavaScript', 'TypeScript', 'Tailwind', 'HTML5',
    'CSS3', 'Git', 'GitHub', 'Redux',
    'Next.js', 'REST API', 'GraphQL', 'VS Code',
    'Firebase', 'Docker', 'AWS', 'Python'
];

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { font: 'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    const over = (e) => {
        e.stopPropagation()
        setHovered(true)
    }

    const out = () => setHovered(false)

    useFrame(({ camera }) => {
        // Make text face camera
        ref.current.quaternion.copy(camera.quaternion)
        // Animate color
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : '#20b2aa'), 0.1)
    })

    return (
        <Text
            ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            {...props}
            {...fontProps}
            children={children}
        />
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

    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

function BgSphere() {
    return (
        <Sphere args={[15, 64, 64]}>
            <MeshDistortMaterial
                color="#1e1b4b"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0}
                transparent
                opacity={0.15}
            />
        </Sphere>
    )
}

export default function TechScene() {
    return (
        <div className="w-full h-[600px] flex items-center justify-center cursor-move">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                <fog attach="fog" args={['#202025', 0, 80]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Cloud count={5} radius={20} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <BgSphere />
                </Float>
                <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={2} />
            </Canvas>
        </div>
    )
}
