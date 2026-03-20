"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import DWLogo from "./DWLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "/about", isExternal: true },
  { label: "My Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    // Default to dark mode unless explicitly set to light
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      // switching to dark: remove .light class (.dark is alias, keep for Tailwind utilities)
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      // switching to light: add .light class
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (window.location.pathname !== "/" && href.startsWith("#")) {
      window.location.href = `/${href}`;
      return;
    }
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[var(--bg)]/90 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo — far left */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DWLogo size={54} />
          </motion.a>

          {/* Right side: nav links + resume + theme toggle */}
          <div className="hidden md:flex items-center gap-6">
            {/* Nav links */}
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              if (link.isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-500 dark:text-primary-400"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200
                    ${isActive
                      ? "text-primary-500 dark:text-primary-400"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}

            {/* Resume — styled slightly different */}
            <a
              href="/Digvijay_resume-1.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors relative group"
            >
              Resume
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-125 transition-transform" />
            </a>

            {/* Theme toggle */}
            <motion.button
              id="theme-toggle"
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-primary-500 hover:border-primary-400 transition-all duration-200"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)]" whileTap={{ scale: 0.9 }}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <motion.button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)]"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[var(--bg-card)] border-b border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                
                if (link.isExternal) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-left text-sm font-medium py-1 transition-colors ${
                        isActive
                          ? "text-primary-500 dark:text-primary-400"
                          : "text-[var(--text-muted)]"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left text-sm font-medium py-1 transition-colors ${isActive
                      ? "text-primary-500 dark:text-primary-400"
                      : "text-[var(--text-muted)]"
                      }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <a href="/Digvijay_resume-1.pdf" download target="_blank" rel="noopener noreferrer" className="text-left text-sm font-medium py-1 text-[var(--text-muted)]">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
