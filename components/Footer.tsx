"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import DWLogo from "./DWLogo";

const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/digvijay208", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/digvijay-waghamode-978260275", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://x.com/Digvijay_1775", label: "Twitter" },
  { icon: SiLeetcode, href: "https://leetcode.com/", label: "LeetCode" },
  { icon: FiMail, href: "mailto:digvijaywaghamode2004@gmail.com", label: "Email" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-[var(--border)] bg-[var(--bg-card)]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <DWLogo size={48} />
        </motion.div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-[var(--text-muted)] hover:text-primary-600 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-primary-600 hover:border-primary-400 hover:shadow-md transition-all duration-200"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-[var(--text-muted)] flex items-center justify-center gap-1.5">
          Made with{" "}
          <FiHeart
            size={14}
            className="text-rose-500 fill-rose-500 animate-pulse"
          />{" "}
          by <span className="font-semibold text-[var(--text)]">Digvijay Waghamode</span>
          {" "}· {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
