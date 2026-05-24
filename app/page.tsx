'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, ChevronRight, Code2, Database, Cpu, Layout, Wrench } from 'lucide-react';

// --- Custom SVG Brand Components ---
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
// --- Animation Variants ---
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}
export default function Portfolio() {
  // Global configured links
  const githubProfile = "https://github.com/cntcaak";
  const linkedinProfile = "https://www.linkedin.com/in/cntcaak/";
  const contactEmail = "mailto:akber.work9@gmail.com";

  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-purple-900 selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-medium tracking-wide text-white font-serif">AAK.</span>
          <div className="flex gap-6 text-sm font-medium tracking-wider text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h2 variants={fadeIn} className="text-purple-400 text-sm font-medium tracking-[0.2em] uppercase">
                Applied AI Engineer
              </motion.h2>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl text-white leading-tight font-serif font-light">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">Intelligence.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-gray-400 max-w-md leading-relaxed font-light">
                Building intelligent systems at the intersection of AI, engineering, and real-world optimization.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mt-4">
                <a href="#projects" className="px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm">
                  View Projects <ChevronRight size={16} />
                </a>
                <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 text-gray-300 font-medium rounded-sm hover:bg-white/5 transition-colors text-sm flex items-center gap-2">
                  <GithubIcon size={16} /> GitHub
                </a>
                <a href={linkedinProfile} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 text-gray-300 font-medium rounded-sm hover:bg-white/5 transition-colors text-sm flex items-center gap-2">
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-b from-purple-500/30 to-transparent shadow-[0_0_60px_rgba(147,51,234,0.15)]"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                  <Image
                    src="/AAK_selfie.jpeg"
                    alt="Portrait"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 grayscale-[15%]"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-32 bg-black border-t border-white/5 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl text-white mb-8 font-serif">
                The Intersection of Physical and Digital
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg leading-relaxed font-light mb-6">
                My background in mechanical engineering grounds my approach to artificial intelligence in physical reality. I do not just build models; I engineer intelligent systems designed for industrial application, generative optimization, and predictive architecture.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg leading-relaxed font-light">
                By combining rigorous engineering principles with state-of-the-art machine learning, I focus on scalable AI products that solve complex, real-world constraints—bridging the gap between theoretical research and robust industrial deployment.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* --- TECH STACK SECTION --- */}
        <section className="py-32 bg-[#050505] px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-white mb-12 text-center font-serif">Core Arsenal</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Python', icon: Code2 }, { name: 'TensorFlow', icon: Cpu },
                { name: 'Scikit-Learn', icon: Database }, { name: 'FastAPI', icon: Layout },
                { name: 'SQL', icon: Database }, { name: 'Git / GitHub', icon: Code2 },
                { name: 'React Native', icon: Layout }, { name: 'Next.js', icon: Layout },
                { name: 'TailwindCSS', icon: Layout }, { name: 'Zustand', icon: Database },
                { name: 'Streamlit', icon: Layout }, { name: 'OpenCV', icon: Cpu }
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col items-center justify-center p-6 bg-black border border-white/5 rounded-lg hover:border-purple-500/30 hover:bg-purple-950/10 transition-all duration-300"
                >
                  <tech.icon className="w-6 h-6 text-gray-500 group-hover:text-purple-400 mb-3 transition-colors" />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS --- */}
        <section id="projects" className="py-32 bg-black border-t border-white/5 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-white mb-16 font-serif">Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Neuro-TopOpt",
                  desc: "Utilizing AI for topology optimization in mechanical components for additive manufacturing, accelerating generative design cycles.",
                  tags: ["Python", "TensorFlow", "Generative AI", "Optimization"],
                  link: "https://github.com/cntcaak/Neuro-TopOpt",
                  pattern: "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.1) 0%, transparent 60%)"
                },
                {
                  title: "PennyWise AI",
                  desc: "Intelligent financial parsing and predictive analytics engine. Architected for scalable data extraction and pattern recognition.",
                  tags: ["FastAPI", "Next.js", "Scikit-Learn", "SQL"],
                  link: "https://github.com/cntcaak/PennyWise-AI",
                  pattern: "linear-gradient(45deg, rgba(147,51,234,0.05) 25%, transparent 25%, transparent 75%, rgba(147,51,234,0.05) 75%, rgba(147,51,234,0.05))"
                },
                {
                  title: "Portfolio Architecture",
                  desc: "A premium, high-performance portfolio environment built with Next.js and Framer Motion, featuring cinematic micro-interactions.",
                  tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
                  link: "https://github.com/cntcaak/Portfolio-Website",
                  pattern: "repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(147,51,234,0.05) 10px, rgba(147,51,234,0.05) 20px)"
                },
                {
                  title: "Industrial Defect Detection",
                  desc: "Computer vision pipeline deployed in manufacturing environments to identify structural anomalies with high-precision inference.",
                  tags: ["OpenCV", "Deep Learning", "Edge Computing"],
                  link: githubProfile,
                  pattern: "radial-gradient(circle at 0% 0%, rgba(147,51,234,0.15) 0%, transparent 40%)"
                }
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative bg-[#050505] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/20 transition-colors"
                >
                  <div className="h-48 w-full bg-black relative overflow-hidden flex items-center justify-center border-b border-white/5">
                    <div className="absolute inset-0 opacity-50" style={{ backgroundImage: project.pattern, backgroundSize: '30px 30px' }} />
                    <Cpu className="w-12 h-12 text-gray-800 group-hover:text-purple-900 transition-colors" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl text-white group-hover:text-purple-300 transition-colors font-serif">{project.title}</h3>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="View Repository">
                        <GithubIcon size={20} />
                      </a>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE TIMELINE --- */}
        <section id="experience" className="py-32 bg-[#050505] px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-white mb-16 text-center font-serif">Trajectory</h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-900/50 before:to-transparent">
              {[
                { role: "Subject Matter Expert", org: "Amazon", date: "1.5 Years" },
                { role: "Student Ambassador", org: "Google", date: "Cohort" },
                { role: "Ambassador", org: "GSSoC", date: "Community" }
              ].map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/30 bg-black text-purple-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-black border border-white/5 rounded-lg hover:border-purple-500/20 transition-colors">
                    <div className="flex flex-col mb-1">
                      <span className="text-lg text-white font-serif">{exp.role}</span>
                      <span className="text-purple-400 text-sm font-medium">{exp.org}</span>
                    </div>
                    <time className="text-xs text-gray-500 uppercase tracking-widest">{exp.date}</time>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- AI VISION --- */}
        <section className="py-32 bg-black border-y border-white/5 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.blockquote
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light italic font-serif"
            >
              "The future of engineering lies not just in constructing the physical world, but in embedding intelligence within it. Scalable AI products and predictive systems are the new foundations of modern industry."
            </motion.blockquote>
          </div>
        </section>

        {/* --- CONTACT & FOOTER --- */}
        <section id="contact" className="py-32 bg-[#050505] px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl text-white mb-6 font-serif">Initiate Contact</h2>
            <p className="text-gray-400 mb-10 max-w-md font-light">
              Open to discussions regarding AI architecture, machine learning engineering roles, and collaborative research in applied intelligence.
            </p>
            <div className="flex gap-6 mb-24">
              <a href={contactEmail} className="p-4 bg-black border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all" title="Send Email">
                <Mail size={24} strokeWidth={1.5} />
              </a>
              <a href={linkedinProfile} target="_blank" rel="noopener noreferrer" className="p-4 bg-black border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all" title="LinkedIn Profile">
                <LinkedinIcon size={24} />
              </a>
              <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="p-4 bg-black border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all" title="GitHub Profile">
                <GithubIcon size={24} />
              </a>
            </div>

            <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <span>© {new Date().getFullYear()} AAK. All rights reserved.</span>
              <span className="flex items-center gap-2 mt-4 md:mt-0">
                Designed with precision <Wrench size={14} className="text-gray-500" />
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
