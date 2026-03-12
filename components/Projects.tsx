"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Tag = {
  label: string;
  color: string;
};

type Project = {
  title: string;
  description: string;
  tags: Tag[];
  github?: string;
  demo?: string;
  gradient: string;
  emoji: string;
};

const PROJECTS: Project[] = [
  /* {
    title: "InfraGuard Security Platform",
    description: "An AI-powered security scanning platform that analyzes infrastructure configs for misconfigurations and provides intelligent fixes.",
    tags: [
      { label: "FULL-STACK", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
      { label: "AI", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
      { label: "NODE.JS", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
    ],
    github: "https://github.com/",
    demo: "https://example.com",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    emoji: "🔐",
  }, */
  {
    title: "Ai-prompt-generator",
    description: "A web application that helps users craft perfect prompts for AI tools like ChatGPT, Claude, and other large language models.",
    tags: [
      { label: "HTML CSS", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
      { label: "JS", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300" },
      { label: "BACKEND", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
    ],
    github: "https://github.com/digvijay208/ai-prompt-generator",
    demo: "https://ai-prompt-generator-rho.vercel.app",
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
    emoji: "📊",
  },
  {
    title: "MultiAgent AI ChatBot",
    description: "A chatbot system powered by multiple AI agents specialized in different domains, built with LangChain and Next.js.",
    tags: [
      { label: "FULL-STACK", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
      { label: "AI", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
      { label: "LANGCHAIN", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" },
    ],
    github: "https://github.com/digvijay208/multi_agent_ai",
    gradient: "from-rose-400 via-pink-500 to-purple-600",
    emoji: "🤖",
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
  },
  /* {
    title: "DevLink — Developer Portfolio Builder",
    description: "A no-code portfolio builder for developers that generates beautiful, responsive portfolios from GitHub data.",
    tags: [
      { label: "NEXT.JS", color: "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300" },
      { label: "GITHUB API", color: "bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300" },
      { label: "SAAS", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" },
    ],
    github: "https://github.com/",
    gradient: "from-indigo-400 via-blue-500 to-purple-600",
    emoji: "🔗",
  }, */
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <hr className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-3 block">🚀</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text)]">
            Latest <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-[var(--text-muted)] text-base max-w-lg mx-auto">
            Here are some of the projects I&apos;ve built recently.
          </p>
          <motion.a
            href="https://github.com/digvijay208/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold shadow-lg shadow-primary-500/25 transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            id="all-projects-btn"
          >
            <FiGithub /> All projects
          </motion.a>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 2.5 },
            }}
            className="pb-14"
          >
            {PROJECTS.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="card rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer group"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      {/* Gradient preview */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-7xl select-none">{project.emoji}</span>
        {/* Subtle overlay grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Links hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`tag-pill text-xs font-bold px-2.5 py-1 rounded-full ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-[var(--text)] mb-1.5 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
