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
    role: "Software Developer Intern",
    company: "Tech Company Inc.",
    duration: "Jun 2024 – Aug 2024",
    desc: "Built and optimized RESTful APIs using Node.js and Express. Improved frontend performance by 30% through code splitting and lazy loading.",
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    duration: "2023 – Present",
    desc: "Contributed to multiple open-source repositories, fixing bugs and adding new features with a focus on developer experience.",
  },
];

const EDUCATION = [
  { degree: "B.E. Computer Science", institution: "Visvesvaraya Technological University", duration: "2023 – 2027", gpa: "6.0 / 10.0" },
  { degree: "12th Grade (PCMB)",     institution: "KLE independent PU College",             duration: "2020 – 2022", gpa: "71.55%" },
];

const ACHIEVEMENTS = [
  { title: "🏆 Hackathon Winner",   desc: "1st place at National Level Tech Hackathon 2024 among 200+ teams." },
  { title: "⭐ 5-Star Coder",       desc: "Achieved 5-star rating on HackerRank in Problem Solving." },
  { title: "🎓 Merit Scholarship",  desc: "Awarded academic merit scholarship for outstanding performance." },
  { title: "🚀 Best Project Award", desc: "Recognized for the best final year project in the department." },
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
        <div key={i} className="p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
          <div className="flex justify-between items-start gap-2">
            <div>
              <div className="font-semibold text-[var(--text)]">{edu.degree}</div>
              <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">{edu.institution}</div>
            </div>
            <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300">{edu.duration}</span>
          </div>
          <div className="mt-2 text-sm text-[var(--text-muted)]">GPA / Score: <strong>{edu.gpa}</strong></div>
        </div>
      ))}
    </div>
  ),
  achievements: (
    <div className="space-y-3">
      {ACHIEVEMENTS.map((ach, i) => (
        <div key={i} className="p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-primary-300 dark:hover:border-primary-700 transition-all">
          <div className="font-semibold text-[var(--text)] mb-1">{ach.title}</div>
          <p className="text-sm text-[var(--text-muted)]">{ach.desc}</p>
        </div>
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
              {/* Dark oval / circle container — like the reference */}
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
                  src="/avatar_digvijay.jpg"
                  alt="Digvijay Waghamode"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* RIGHT — Tabs + Content */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Tab pills row */}
              <div className="flex flex-wrap gap-2 px-6 pt-8 pb-0 border-b border-[var(--border)]">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      id={`tab-${tab.id}`}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 mb-3
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
