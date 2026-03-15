"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiBriefcase, FiBook, FiAward, FiDownload, FiMapPin, FiMail, FiGlobe, FiZap, FiArrowUp } from "react-icons/fi";
import { HeroSection } from "@/components/ui/hero-section-2"; // New import
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion"; 
import { useState, useEffect } from "react";

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
  { 
    title: "☁️ AWS Academy Graduate - Generative AI Foundations", 
    desc: "Completed foundational training on Generative AI concepts provided by AWS Academy.",
    image: "/certificates/AWS Academy Graduate - Generative AI Foundations.jpg"
  },
  { 
    title: "🤖 Claude Code in Action", 
    desc: "Successfully completed the Claude Code in Action course, focusing on practical AI development.",
    image: "/certificates/Claude Code in Action.jpg"
  },
  { 
    title: "🎨 UI/UX for Beginners", 
    desc: "Completed a comprehensive course covering user interface and user experience design principles.",
    image: "/certificates/UIUX for Beginners.jpg"
  },
  { 
    title: "💻 Web Development + DevOps Cohort", 
    desc: "Participated in an intensive cohort focusing on modern web development along with essential DevOps practices.",
    image: "/certificates/Web Development + DevOps Cohort 100xdevs.jpg"
  },
];

const SKILL_GROUPS = [
  { category: "Frontend",      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",     skills: ["React","Next.js","TypeScript","Tailwind CSS","HTML5","CSS3"] },
  { category: "Backend",       color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",  skills: ["Node.js","Express","Python","FastAPI","REST APIs","GraphQL"] },
  { category: "Database",      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", skills: ["MongoDB","PostgreSQL","MySQL","Redis","Firebase"] },
  { category: "DevOps & Tools",color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", skills: ["Docker","Git","GitHub","CI/CD","AWS","Linux"] },
  { category: "AI / ML",       color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",      skills: ["Python","TensorFlow","scikit-learn","LangChain","OpenAI API"] },
];

export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg)] relative">
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-[90]"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative w-14 h-14 rounded-full bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] hover:text-primary-500 transition-colors shadow-2xl group overflow-hidden"
            >
              {/* Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                <motion.circle
                  cx="28"
                  cy="28"
                  r="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary-500/10"
                />
                <motion.circle
                  cx="28"
                  cy="28"
                  r="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="163.36"
                  style={{ 
                    pathLength: scrollYProgress,
                    color: "var(--primary-500)"
                  }}
                  className="text-primary-500"
                />
              </svg>
              <FiArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform relative z-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION (21st.dev style - Full Bleed) */}
      <div className="w-full pt-16 md:pt-20">
        <HeroSection
            className="border-b border-[var(--border)] min-h-[70vh] items-center"
            title={
                <>
                    Hello, I'm Digvijay <br/>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-pink-500">
                        Software Engineering Student
                    </span>
                </>
            }
            subtitle="A passionate student focusing on full-stack web development and complex algorithms. I'm always excited to work on self-driven projects and build innovative, user-friendly applications that bridge aesthetics with functionality."
            backgroundImage="/digvijay.jpg"
            callToAction={{
                text: "Let's Collaborate",
                href: "/#contact",
            }}
            contactInfo={{
                website: "Belgaum, India",
                phone: "English, Hindi, Marathi",
                address: "digvijaywaghamode@gmail.com",
            }}
        />
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-12 md:py-24 flex flex-col gap-24 lg:gap-32">
        
        {/* MY STORY (Reference 1 style) */}
        <section className="relative">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-10"
            >
              My <span className="text-primary-500">story.</span>
            </motion.h2>
            
            <div className="relative border-l border-primary-500/30 pl-8 ml-3 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute top-2 -left-[37px] w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">The Spark</h3>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                  Since I can remember, I have always liked to figure out how things work. That passion evolved when I started exploring technology and computers. I didn't know how to code initially, but one little curiosity was all it took for my journey with IT to begin.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute top-2 -left-[37px] w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Academic Journey</h3>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                  I am currently a 3rd Year B.E. Computer Science Engineering Student. As one of the top students, I thrive on tackling complex algorithms and expanding my knowledge base. Along the way, I discovered what I love in this profession the most: web development.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute top-2 -left-[37px] w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">My Goal</h3>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                  I've been learning full-stack development and am intensely passionate about UI/UX design. My goal is always to create enjoyable, beautiful, and user-friendly applications that bridge the gap between aesthetics and functionality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EDUCATION & EXPERIENCE (Reference 3 style) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-2xl">
                <FiBook />
              </span>
              <h3 className="text-3xl font-bold text-[var(--text)]">Education</h3>
            </motion.div>
            
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_8px_30px_rgba(168,85,247,0.6)] cursor-pointer transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-primary-500 mb-2">{edu.duration}</div>
                    <h4 className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-primary-500 transition-colors">{edu.degree}</h4>
                    <div className="text-[var(--text-muted)] mb-4">{edu.institution}</div>
                    <div className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 inline-block border border-primary-200 dark:border-primary-800">
                      Score: {edu.cgpa}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl">
                <FiBriefcase />
              </span>
              <h3 className="text-3xl font-bold text-[var(--text)]">Experience</h3>
            </motion.div>
            
            <div className="space-y-6">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-green-400 dark:hover:border-green-500 hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)] cursor-pointer transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-green-500 mb-2">{exp.duration}</div>
                    <h4 className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-green-500 transition-colors">{exp.role}</h4>
                    <div className="text-[var(--text-muted)] font-medium mb-3">{exp.company}</div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-2xl">
              <FiAward />
            </span>
            <h3 className="text-3xl font-bold text-[var(--text)]">Achievements</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                className="relative p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)] cursor-pointer transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="font-bold text-lg text-[var(--text)] mb-3 leading-snug group-hover:text-purple-500 transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-4">
                    {ach.desc}
                  </p>
                  {ach.image && (
                    <a 
                      href={ach.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors uppercase tracking-widest border-b border-transparent hover:border-purple-500"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-2xl">
              <FiZap />
            </span>
            <h3 className="text-3xl font-bold text-[var(--text)]">Skills & Tools</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="relative p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-[0_20px_40px_rgba(249,115,22,0.2)] dark:hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--text)] mb-6 group-hover:text-orange-500 transition-colors">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className={`px-4 py-2 rounded-full text-xs font-semibold ${group.color} border border-transparent hover:border-orange-400/30 transition-all`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Back to Top Link */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] font-semibold hover:border-primary-500 hover:text-primary-500 transition-all shadow-lg hover:shadow-primary-500/20 overflow-hidden"
          >
            <span className="relative z-10">Navigate to Top</span>
            <span className="relative z-10 group-hover:-translate-y-1 transition-transform">↑</span>
            <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>

      </div>
      <Footer />
    </main>
  );
}
