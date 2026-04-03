"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowRight,
  FiDownload,
  FiChevronDown,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { MdWork, MdCode, MdEmojiEvents } from "react-icons/md";

const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/digvijay208", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/digvijay-waghamode-978260275", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://x.com/Digvijay_1775", label: "Twitter" },
  { icon: SiLeetcode, href: "https://leetcode.com/", label: "LeetCode" },
  { icon: FiMail, href: "mailto:digvijaywaghamode2004@gmail.com", label: "Email" },
];

const floatingStats = [
  {
    id: 1,
    value: "5/5",
    label: "Finished Projects",
    icon: MdCode,
    className: "top-[10px] left-[0px]",
    color: "text-purple-600 bg-purple-100"
  },
  /* {
    id: 2,
    value: "9+",
    label: "Finished Projects",
    icon: MdCode,
    className: "bottom-[30px] left-[20px]",
    color: "text-blue-600 bg-blue-100"
  },
  {
    id: 3,
    value: "1/1",
    label: "Hackathons Won",
    icon: MdEmojiEvents,
    className: "top-[120px] right-[-10px]",
    color: "text-orange-600 bg-orange-100"
  }, */
];

const ROLES = [
  "FULL STACK DEVELOPER",
  "BACKEND DEVELOPER",
  "SOFTWARE DEVELOPER",
  "AI / ML DEVELOPER",
  "DevOps Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [particles, setParticles] = useState<{id: number, size: number, x: number, y: number, duration: number, delay: number}[]>([]);

  // Mouse tracking physics for interactive background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement with physics
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Calculate opposite movement for parallax effect on particles
  const parallaxX = useTransform(springX, [0, 100], [2, -2]);
  const parallaxY = useTransform(springY, [0, 100], [2, -2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate 0 to 100% based on mouse position within the section
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  useEffect(() => {
    // Change role every 3 seconds
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000); 

    // Generate particles on client mount to prevent hydration mismatch
    setParticles(Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, 
      x: Math.random() * 100, 
      y: Math.random() * 100, 
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    })));

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-[0] pointer-events-none overflow-hidden">
        {/* Animated Spotlight Gradient */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) => `radial-gradient(circle 800px at ${x}% ${y}%, rgba(6,182,212,0.4) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)`
            )
          }}
        />
        
        {/* Floating Particles wrapped in Parallax container */}
        <motion.div 
          className="absolute inset-0"
          style={{ x: parallaxX, y: parallaxY }}
        >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_12px_3px_rgba(6,182,212,0.8)] dark:shadow-[0_0_10px_2px_rgba(34,211,238,0.4)]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-72 items-center">

          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-10 h-6 relative overflow-hidden flex items-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex text-primary-600 dark:text-primary-400 text-sm font-bold uppercase tracking-[0.4em]"
                >
                  {ROLES[roleIndex].split("").map((char, index) => (
                    <motion.span
                      key={`${roleIndex}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.03,
                        ease: "easeOut",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <h1 className="font-black mb-8 sm:mb-10">
              {/* Line 1 */}
              <div className="text-4xl sm:text-6xl xl:text-7xl text-[var(--text)] mb-3 sm:mb-4">
                Hello, I&apos;m
              </div>

              {/* Line 2: Animated WAGHAMODE badge + aka */}
              <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                <span className="waghamode-scanner text-4xl sm:text-6xl xl:text-7xl bg-gray-900 dark:bg-gray-800 px-4 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-white/5 relative inline-block group">
                  {/* Scanner bar — overflow:hidden lives here, NOT on the parent, so bg-clip-text text is never clipped */}
                  <span className="scanner-bar" aria-hidden="true" />
                  <div className="absolute inset-0 bg-primary-500/10 blur-xl rounded-xl sm:rounded-2xl group-hover:bg-primary-500/20 transition-colors duration-500" />
                  <span className="relative z-10 bg-[linear-gradient(110deg,#ffffff,45%,#a78bfa,55%,#ffffff)] dark:bg-[linear-gradient(110deg,#a78bfa,45%,#ffffff,55%,#a78bfa)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-shimmer">
                    WAGHAMODE
                  </span>
                </span>
                <span className="text-4xl sm:text-6xl xl:text-7xl text-[var(--text)]">aka</span>
              </div>

              {/* Line 4 */}
              <div className="text-4xl sm:text-6xl xl:text-7xl text-[var(--text)]">
                Digvijay Waghamode
              </div>
            </h1>

            <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mb-10 sm:mb-14 leading-relaxed opacity-75">
              Passionate AI/ML-driven Computer Science student with a knack for
              Full-Stack Development and a portfolio of impactful projects.
              Explore my journey through innovation and technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-lg shadow-primary-500/30 flex items-center gap-2 transition-all"
              >
                Contact Me <FiMail />
              </motion.a>
              <motion.a
                href="/Digvijay_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-bold flex items-center gap-2 transition-all"
              >
                My Resume <FiDownload />
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "var(--primary-600)" }}
                  className="text-2xl text-[var(--text-muted)] hover:text-primary-600 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Avatar & Floating Cards */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto"
            >
              {/* Purple Backdrop Blob */}
              <div className="absolute inset-0 bg-[#7c3aed] dark:bg-[#6d28d9] rounded-[40%_60%_70%_30%/50%_60%_30%_50%] opacity-90 animate-blob" />

              {/* Avatar Image — clipped to the same blob shape, synced animation */}
              <div className="absolute inset-0 rounded-[40%_60%_70%_30%/50%_60%_30%_50%] overflow-hidden animate-blob">
                <img
                  src="/avatar_digvijay.jpg"
                  alt="Digvijay Waghamode Avatar"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Stat Cards */}
              {floatingStats.map((stat) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20, x: 0 }}
                    animate={{
                      opacity: 1,
                      y: [20, -10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.8 + (stat.id * 0.2) },
                      y: {
                        duration: 3 + Math.random(),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1 + (stat.id * 0.3)
                      },
                      x: {
                        duration: 4 + Math.random(),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1 + (stat.id * 0.3)
                      }
                    }}
                    className={`absolute hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-gray-900 shadow-xl z-20 whitespace-nowrap ${stat.className}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                      <StatIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xl font-black">{stat.value}</span>
                      </div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary-600"
        >
          <FiChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
