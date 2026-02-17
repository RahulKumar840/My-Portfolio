import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Cpu,
  Download,
  Terminal,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Send,
  Zap,
  Server
} from 'lucide-react';
import resumePDF from './assets/RAHUL_RESUME.pdf';
import BackgroundScene from './components/Background3D'; // Changed from TechScene

// === Design System ===
const styles = {
  section: "min-h-screen w-full flex items-center justify-center relative py-20 px-6 overflow-hidden snap-start",
  container: "container mx-auto px-4 max-w-7xl relative z-10",
  heading: "text-5xl md:text-7xl font-bold font-grotesk tracking-tight mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent",
  subheading: "text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed",
  glassCard: "glass-card border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 group cursor-default bg-black/40 backdrop-blur-md",
  navLink: "text-sm font-medium hover:text-indigo-400 transition-all duration-300 uppercase tracking-widest relative group",
  buttonPrimary: "px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2",
  buttonSecondary: "px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all hover:border-white/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
};

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const projects = [
  {
    title: "Smart Job Portal",
    description: "Advanced role-based platform with secure authentication, real-time updates, and an intuitive dashboard for recruiters and candidates.",
    tech: ["MERN Stack", "JWT", "Tailwind"],
    icon: <Globe className="w-8 h-8" />,
    theme: "from-blue-500/20 to-cyan-500/20",
    accent: "text-cyan-400"
  },
  {
    title: "User Management Dashboard",
    description: "Comprehensive CRUD management system featuring detailed analytics, user tracking, and secure data handling.",
    tech: ["Node.js", "MongoDB", "React"],
    icon: <Database className="w-8 h-8" />,
    theme: "from-purple-500/20 to-pink-500/20",
    accent: "text-pink-400"
  },
];

const skills = [
  { category: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"], icon: <Zap /> },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication"], icon: <Server /> },
  { category: "Database", items: ["MongoDB", "Mongoose", "MySQL", "Aggregation"], icon: <Database /> },
  { category: "Tools", items: ["Git & GitHub", "VS Code", "Postman", "Vite"], icon: <Terminal /> },
];

function PortfolioContent() {
  return (
    <main className="w-screen">
      {/* Hero Section */}
      <section id="home" className={styles.section}>
        <div className={styles.container}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full card-glass border border-indigo-500/20 bg-indigo-500/10 text-sm font-medium text-indigo-300 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse mr-3"></span>
              Available for Full Stack Roles
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-white">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">DIGITAL</span> IDEAS
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              Hi, I'm Rahul. A <span className="text-white font-medium">Full Stack Developer</span> crafting robust, scalable, and pixel-perfect web experiences using the MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a href="#projects" className={styles.buttonPrimary}>
                View My Work <ExternalLink className="w-5 h-5" />
              </a>
              <button onClick={() => window.open(resumePDF, '_blank')} className={styles.buttonSecondary}>
                Download Resume <Download className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-20 flex items-center gap-8 opacity-50 hover:opacity-100 transition-opacity">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-slate-500"></div>
              <div className="flex gap-6">
                <a href="https://github.com/RahulKumar840" target="_blank" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition-all"><Github className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/rahul-kumar-083056299" target="_blank" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition-all"><Linkedin className="w-6 h-6" /></a>
                <a href="mailto:rk1989456@gmail.com" className="hover:text-indigo-400 hover:scale-110 transition-all"><Mail className="w-6 h-6" /></a>
              </div>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-slate-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-12">
              <h2 className="text-6xl md:text-8xl font-bold font-grotesk text-white/5 absolute -top-8 left-4 select-none pointer-events-none">
                ABOUT
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-white relative z-10">
                Behind the <span className="text-indigo-400">Code</span>
              </h2>
              <div className="h-[1px] flex-grow bg-white/10 hidden md:block ml-8"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-8 space-y-6 text-lg text-slate-400 leading-loose">
                <p>
                  I am a passionate Full Stack Developer with a strong foundation in modern web technologies. My journey in software engineering is driven by a deep curiosity to understand scalable systems and a commitment to building impactful solutions.
                </p>
                <p>
                  Specializing in <span className="text-white font-semibold">React, Node.js, and MongoDB</span>, I focus on writing clean, maintainable code and building intuitive user interfaces. I believe in continuous learning and adapting to the ever-evolving tech landscape.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <div className="px-5 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-sm">
                    🚀 2+ Years Coding
                  </div>
                  <div className="px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-sm">
                    💡 Full Stack Focused
                  </div>
                  <div className="px-5 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 font-mono text-sm">
                    🌏 Based in India
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-6">
                <div className={`${styles.glassCard} bg-gradient-to-br from-indigo-900/20 to-transparent`}>
                  <Code2 className="w-10 h-10 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
                  <p className="text-sm text-slate-400">Crafting responsive and interactive UIs.</p>
                </div>
                <div className={`${styles.glassCard} bg-gradient-to-br from-purple-900/20 to-transparent`}>
                  <Server className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
                  <p className="text-sm text-slate-400">Building robust APIs and server logic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${styles.section} bg-black/10`}>
        <div className={styles.container}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-grotesk text-white mb-4">Technical <span className="text-indigo-400">Skills</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The tools and technologies I leverage to bring ideas to life.</p>
          </div>

          <div className="w-full h-auto">
            {/* 3D Content is now handled by the BackgroundScene on scroll, so we just provide space here or keep the cards as fallback/detail view */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className={`${styles.glassCard} hover:-translate-y-2 transition-transform duration-300`}>
                  <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 font-grotesk">{skill.category}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-grotesk text-white mb-4">Featured <span className="text-indigo-400">Projects</span></h2>
              <p className="text-slate-400">Highlights of my development journey.</p>
            </div>
            <a href="https://github.com/RahulKumar840" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-white transition-colors cursor-pointer group pb-2">
              View GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#0a0a0f] border border-white/10 hover:border-indigo-500/30 transition-all duration-500 h-full flex flex-col">
                {/* Decorative Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="p-10 relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${project.accent}`}>
                      {project.icon}
                    </div>
                    <ExternalLink className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 font-grotesk group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-indigo-400 font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className="max-w-5xl mx-auto bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[3rem] border border-white/10 p-8 md:p-20 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div className="flex flex-col justify-center">
                <h2 className="text-5xl md:text-6xl font-bold font-grotesk text-white mb-6">Let's work <br /><span className="text-indigo-400">together</span></h2>
                <p className="text-slate-400 text-lg mb-12">
                  Have a project in mind or just want to explore opportunities? I'm always open to discussing new ideas.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Email Me</p>
                      <p className="text-white font-medium text-lg group-hover:text-indigo-400 transition-colors">rk1989456@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Call Me</p>
                      <p className="text-white font-medium text-lg group-hover:text-purple-400 transition-colors">+91 8409424916</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
                {/* Form fields... */}
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Rahul Kumar" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="rk1989456@gmail.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group">
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#02000d] border-t border-white/5 text-center">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Rahul Kumar. Crafted with precision.</p>
      </footer>
    </main>
  )
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  // Handle active section for navigation links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust these values based on when you want the section to be considered "active"
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveHash(`#${current}`);
    };
    // Listen to scroll events on the window, which will now be the ScrollControls' internal scroll
    // This might need adjustment if ScrollControls provides its own scroll position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="bg-[#030014] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 h-screen w-screen overflow-hidden">

      {/* 3D Background & Scroll Container */}
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <ScrollControls pages={5} damping={0.3}>
          {/* The 3D Scene */}
          <BackgroundScene />

          {/* The HTML Content */}
          <Scroll html style={{ width: '100vw' }}>
            <PortfolioContent />
          </Scroll>
        </ScrollControls>
      </Canvas>

      {/* Fixed Navbar (Overlay) */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 backdrop-blur-sm bg-black/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              R
            </div>
            <span className="text-xl font-bold font-grotesk tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              RAHUL<span className="text-indigo-500"> KUMAR</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${activeHash === item.href ? 'text-white' : 'text-slate-400'} ${styles.navLink}`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-500 transform origin-left transition-transform duration-300 ${activeHash === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5">
              Hire Me <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full h-screen bg-[#030014] p-8 flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-10 duration-300">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-indigo-400 transition-colors font-grotesk"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => window.open(resumePDF, '_blank')}
              className="px-8 py-3 rounded-full border border-white/20 text-white text-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2 mt-4"
            >
              Resume <Download className="w-5 h-5" />
            </button>
          </div>
        )}
      </nav>

    </div>
  );
}
