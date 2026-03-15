"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiUser, FiBriefcase, FiBook, FiAward, FiZap,
  FiMail, FiMapPin, FiGlobe,
} from "react-icons/fi";
import { MdSchool } from "react-icons/md";

const tabs = [
  { id: "info",         label: "Personal Info",  icon: FiUser },
  { id: "experience",   label: "Experience",      icon: FiBriefcase },
  { id: "education",    label: "Education",       icon: FiBook },
  { id: "achievements", label: "Achievements",    icon: FiAward },
  { id: "skills",       label: "Skills & Tools",  icon: FiZap },
];

const INFO_ROWS = [
  { icon: FiUser,   value: "Digvijay T. Waghamode" },
  { icon: MdSchool, value: "B.E. Computer Science" },
  { icon: FiMail,   value: "digvijaywaghamode2004@gmail.com" },
  { icon: FiMapPin, value: "Belgaum, India" },
  { icon: FiGlobe,  value: "English, Hindi, Marathi" },
];

const EXPERIENCE = [
  {
    role: "Computer Science Engineering Student",
    company: "3rd Year B.E.",
    duration: "2023 – Present",
    desc: "Currently focused on full-stack web development, learning complex algorithms, and building personal projects to apply academic concepts.",
  },
  {
    role: "Open Source Enthusiast & Learner",
    company: "Self-driven Projects",
    duration: "2023 – Present",
    desc: "Actively building functional web applications alongside academic studies to gain practical development experience.",
  },
];

const EDUCATION = [
  { degree: "B.E. Computer Science", institution: "Visvesvaraya Technological University", duration: "2023 – 2027", cgpa: "6.0 / 10.0" },
  { degree: "12th Grade (PCMB)",     institution: "KLE independent PU College",             duration: "2020 – 2022", cgpa: "7.53 / 10.0" },
];

const ACHIEVEMENTS = [
  { title: "☁️ AWS Academy Graduate - Generative AI Foundations", desc: "Completed foundational training on Generative AI concepts provided by AWS Academy." },
  { title: "🤖 Claude Code in Action", desc: "Successfully completed the Claude Code in Action course, focusing on practical AI development." },
  { title: "🎨 UI/UX for Beginners", desc: "Completed a comprehensive course covering user interface and user experience design principles." },
  { title: "💻 Web Development + DevOps Cohort", desc: "Participated in an intensive cohort focusing on modern web development along with essential DevOps practices." },
];

const SKILL_GROUPS = [
  { category: "Frontend",      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",     skills: ["React","Next.js","TypeScript","Tailwind CSS","HTML5","CSS3"] },
  { category: "Backend",       color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",  skills: ["Node.js","Express","Python","FastAPI","REST APIs","GraphQL"] },
  { category: "Database",      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", skills: ["MongoDB","PostgreSQL","MySQL","Redis","Firebase"] },
  { category: "DevOps & Tools",color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", skills: ["Docker","Git","GitHub","CI/CD","AWS","Linux"] },
  { category: "AI / ML",       color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",      skills: ["Python","TensorFlow","scikit-learn","LangChain","OpenAI API"] },
];

function InfoTab() {
  return (
    <div className="space-y-4">
      <p className="text-[var(--text-muted)] mb-5 leading-relaxed text-sm">
        Software engineering student with a passion for building innovative and user-friendly applications.
        Strong foundation in computer science and a keen eye for design.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
        {INFO_ROWS.map(({ icon: Icon, value }, i) => (
          <div key={i} className="flex items-center gap-3 py-2.5 border-b border-[var(--border)] last:border-0 sm:[&:nth-last-child(-n+2)]:border-0">
            <span className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0 text-primary-600 dark:text-primary-400">
              <Icon size={13} />
            </span>
            <span className="text-sm text-[var(--text)]">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-[var(--border)]">
        <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-1">Language Skill</p>
        <p className="text-sm text-[var(--text)]">English, Hindi, Marathi</p>
      </div>
    </div>
  );
}

const tabContent: Record<string, React.ReactNode> = {
  info: <InfoTab />,
  experience: (
    <div className="space-y-4">
      {EXPERIENCE.map((exp, i) => (
        <div key={i} className="relative pl-5 border-l-2 border-primary-200 dark:border-primary-800">
          <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary-600 border-2 border-[var(--bg-card)]" />
          <div className="mb-0.5">
            <span className="font-semibold text-[var(--text)] text-base">{exp.role}</span>
            <span className="mx-2 text-[var(--text-muted)]">·</span>
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">{exp.company}</span>
          </div>
          <div className="text-xs text-[var(--text-muted)] mb-2">{exp.duration}</div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">{exp.desc}</p>
        </div>
      ))}
    </div>
  ),
  education: (
    <div className="space-y-4">
      {EDUCATION.map((edu, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.1,
          }}
          whileHover={{ 
            scale: 1.03, 
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.98 }}
          className="relative p-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_8px_30px_rgba(168,85,247,0.6)] cursor-pointer transition-colors duration-300 group overflow-hidden"
        >
          {/* Subtle neon gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start gap-2">
            <div>
              <div className="font-bold text-[var(--text)] flex items-center gap-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 text-base">{edu.degree}</div>
              <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">{edu.institution}</div>
            </div>
            <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-medium border border-primary-200 dark:border-primary-800">{edu.duration}</span>
          </div>
          <div className="relative z-10 mt-3 text-sm text-[var(--text-muted)]">CGPA / Score: <strong className="text-[var(--text)]">{edu.cgpa}</strong></div>
        </motion.div>
      ))}
    </div>
  ),
  achievements: (
    <div className="space-y-4">
      {ACHIEVEMENTS.map((ach, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.1,
          }}
          whileHover={{ 
            scale: 1.03, 
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.98 }}
          className="relative p-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_8px_30px_rgba(168,85,247,0.6)] cursor-pointer transition-colors duration-300 group overflow-hidden"
        >
          {/* Subtle neon gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="font-bold text-[var(--text)] text-base mb-1.5 flex items-center gap-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              {ach.title}
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{ach.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  ),
  skills: (
    <div className="space-y-5">
      {SKILL_GROUPS.map((group) => (
        <div key={group.category}>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">{group.category}</h4>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span key={skill} className={`tag-pill px-3 py-1.5 rounded-full text-xs font-semibold ${group.color}`}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export default function About() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <section id="about" className="py-20 px-4">
      <hr className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text)]">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base max-w-lg mx-auto">
            Get to know me better — my background, experience, and what drives me.
          </p>
        </motion.div>

        <div className="card rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">

            {/* LEFT — Avatar in dark circle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-72 shrink-0 flex items-center justify-center py-10 px-8 lg:border-r border-b lg:border-b-0 border-[var(--border)] bg-[var(--bg-card)]"
            >
              {/* Pulse glow wrapper */}
              <div className="relative flex items-center justify-center">
                {/* Pulsing glow ring behind the avatar */}
                <div
                  className="absolute animate-pulse-slow rounded-full"
                  style={{
                    width: "240px",
                    height: "280px",
                    background: "radial-gradient(ellipse at center, rgba(124,58,237,0.35) 0%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />
                {/* Dark oval / circle container */}
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: "220px",
                    height: "260px",
                    background: "radial-gradient(ellipse at center, #1e1b4b 0%, #0a0a14 100%)",
                    boxShadow: "0 0 40px rgba(124,58,237,0.25)",
                  }}
                >
                  <img
                    src="/digvijay.jpg"
                    alt="Digvijay Waghamode"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Tabs + Content */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Tab pills row */}
              <div 
                className="flex overflow-x-auto px-6 pt-8 pb-0 border-b border-[var(--border)] [&::-webkit-scrollbar]:hidden" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-1.5 sm:gap-2 pb-3 mb-[-1px]">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        id={`tab-${tab.id}`}
                        className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 whitespace-nowrap
                          ${active
                            ? "bg-primary-600 text-white shadow-md shadow-primary-500/30"
                            : "text-[var(--text-muted)] hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                          }`}
                      >
                        <Icon size={14} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab content */}
              <div className="p-6 sm:p-8 min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tabContent[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
