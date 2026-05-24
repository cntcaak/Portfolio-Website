'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, ChevronRight, Code2, Database, Cpu, Layout, Wrench } from 'lucide-react';

// --- Custom SVG Brand Components ---
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Animation Variants ---
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
};

export default function Portfolio() {
  // Global configured links
  const githubProfile = 'https://github.com/cntcaak';
  const linkedinProfile = 'https://www.linkedin.com/in/cntcaak/';
  const contactEmail = 'mailto:akber.work9@gmail.com';

  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-purple-900 selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-medium tracking-wide text-white font-serif">
            AAK.
          </span>

          <div className="flex gap-6 text-sm font-medium tracking-wider text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>

            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>

            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>

            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
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
              <motion.h2
                variants={fadeIn}
                className="text-purple-400 text-sm font-medium tracking-[0.2em] uppercase"
              >
                Applied AI Engineer
              </motion.h2>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl text-white leading-tight font-serif font-light"
              >
                Engineering <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                  Intelligence.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-lg text-gray-400 max-w-md leading-relaxed font-light"
              >
                Building intelligent systems at the intersection of AI,
                engineering, and real-world optimization.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-wrap gap-4 mt-4"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm"
                >
                  View Projects <ChevronRight size={16} />
                </a>

                <a
                  href={githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/10 text-gray-300 font-medium rounded-sm hover:bg-white/5 transition-colors text-sm flex items-center gap-2"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>

                <a
                  href={linkedinProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/10 text-gray-300 font-medium rounded-sm hover:bg-white/5 transition-colors text-sm flex items-center gap-2"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>

            {/* PROFILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-b from-purple-500/30 to-transparent shadow-[0_0_60px_rgba(147,51,234,0.15)]"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                  <Image
                    src="/profile.jpg"
                    alt="AAK Portrait"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 grayscale-[15%]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section
          id="about"
          className="py-32 bg-black border-t border-white/5 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl text-white mb-8 font-serif"
              >
                The Intersection of Physical and Digital
              </motion.h2>

              <motion.p
                variants={fadeIn}
                className="text-gray-400 text-lg leading-relaxed font-light mb-6"
              >
                My background in mechanical engineering grounds my approach to
                artificial intelligence in physical reality. I do not just build
                models; I engineer intelligent systems designed for industrial
                application, generative optimization, and predictive
                architecture.
              </motion.p>

              <motion.p
                variants={fadeIn}
                className="text-gray-400 text-lg leading-relaxed font-light"
              >
                By combining rigorous engineering principles with
                state-of-the-art machine learning, I focus on scalable AI
                products that solve complex, real-world constraints.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
