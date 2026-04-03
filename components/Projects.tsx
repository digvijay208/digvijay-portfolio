"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import CircularProjects, { Project } from "./CircularProjects";

const PROJECTS: Project[] = [
  {
    title: "SurfaceIQ",
    description: "An AI agent that turns simple prompts into live browser runs, captures evidence, and delivers reports across public and authenticated routes.",
    tags: [
      { label: "AI Agent", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
      { label: "Automation", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" },
      { label: "Browser", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
    ],
    github: "https://github.com/digvijay208/SurfaceIQ",
    demo: "https://surfaceiq.vercel.app",
    gradient: "from-indigo-400 via-purple-500 to-fuchsia-600",
    emoji: "🌐",
    image: "/projects/SurfaceIQ.png",
  },
  {
    title: "Ai-prompt-generator",
    description: "A web application that helps users craft perfect prompts for AI tools like ChatGPT, Claude, and other large language models.",
    tags: [
      { label: "React", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
      { label: "Typescript", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300" },
      { label: "Next.js", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
    ],
    github: "https://github.com/digvijay208/ai-prompt-generator",
    demo: "https://ai-prompt-generator-rho.vercel.app",
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
    emoji: "📊",
    image: "/projects/thumbnail_promptgen.png",
  },
  {
    title: "MultiAgent AI ChatBot",
    description: "A chatbot system powered by multiple AI agents specialized in different domains, built with LangChain and Next.js.",
    tags: [
      { label: "FULL-STACK", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
      { label: "AI", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
      { label: "LangChain", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" },
    ],
    github: "https://github.com/digvijay208/multi_agent_ai",
    gradient: "from-rose-400 via-pink-500 to-purple-600",
    emoji: "🤖",
    image: "/projects/multi_agent_chatbot.png",
  },
  {
    title: "pokemon-finder",
    description: "Secure cloud-based file management system with real-time sync, file previews, and team collaboration features.",
    tags: [
      { label: "HTML", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
      { label: "CSS", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
      { label: "JS", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
    ],
    github: "https://github.com/digvijay208/pokemon-finder",
    demo: "https://pokemon-finder-glnz.onrender.com/",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    emoji: "☁️",
    image: "/projects/pokemon_finder_cloud.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 overflow-hidden">
      <hr className="section-divider mb-16" />
      <div className="max-w-[1400px] mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-3 block">🚀</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[var(--text)]">
            Latest <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg max-w-lg mx-auto">
            Here are some of the projects I&apos;ve built recently.
          </p>
          <motion.a
            href="https://github.com/digvijay208/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-base font-semibold shadow-lg shadow-primary-500/25 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="all-projects-btn"
          >
            <Github size={20} /> All projects
          </motion.a>
        </motion.div>

        {/* Circular Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <CircularProjects projects={PROJECTS} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
}
