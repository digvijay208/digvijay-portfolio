"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiUser, FiMessageSquare, FiCheckCircle, FiXCircle, FiLoader } from "react-icons/fi";
import Image from "next/image";

export default function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [resultMsg, setResultMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    // Replace this with your actual Web3Forms access key once registered
    formData.append("access_key", "36b8d077-1e26-4977-ab71-10a8e9bcfab6"); // Added temporary key, user must supply their own or use Web3forms default test key 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setResultMsg("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setResultMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setResultMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000); // Clear message after 5 seconds
    }
  };

  return (
    <section id="contact" className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top divider */}
        <hr className="section-divider mb-16" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Headings and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-primary-500 font-medium mb-6">
              <span className="w-8 h-[2px] bg-primary-500 rounded-full" />
              Say Hello 👋
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[var(--text)] leading-tight mb-6">
              Let&apos;s Work<br />Together
            </h2>
            
            <p className="text-[var(--text-muted)] text-base sm:text-lg mb-12 max-w-md">
              I&apos;m always looking for new opportunities to learn and grow. If you have a project in mind, or just want to say hi, feel free to get in touch.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-[var(--text)] group">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <FiMail size={20} />
                </div>
                <div className="flex flex-col">
                  <a href="mailto:digvijaywaghamode2004@gmail.com" className="font-medium text-sm sm:text-base hover:text-primary-500 transition-colors">digvijaywaghamode2004@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[var(--text)] group">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <FiMapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm sm:text-base">Belgaum, Karnataka, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Illustration & Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--bg-card)] rounded-3xl p-8 sm:p-10 border border-[var(--border)] shadow-2xl relative overflow-hidden"
          >
            {/* Background glow for form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Illustration */}
            <div className="flex justify-center mb-10 relative z-10 w-full h-48 sm:h-64">
              <Image 
                src="/contact_illustration.png" 
                alt="Contact Illustration" 
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              {/* Optional: Add a hidden input to prevent bot spam (Web3Forms feature) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  className="w-full bg-transparent border border-[var(--border)] rounded-xl px-5 py-3.5 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
                <FiUser className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="w-full bg-transparent border border-[var(--border)] rounded-xl px-5 py-3.5 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
                <FiMail className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
              </div>
              
              <div className="relative">
                <textarea 
                  name="message"
                  placeholder="Type Your Message" 
                  rows={4} 
                  className="w-full bg-transparent border border-[var(--border)] rounded-xl px-5 py-3.5 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  required
                />
                <FiMessageSquare className="absolute right-5 top-4 text-[var(--text-muted)]" size={18} />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-start bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 mt-2 shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Let's Connect"
                )}
              </button>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                      submitStatus === "success" 
                        ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {submitStatus === "success" ? <FiCheckCircle size={18} /> : <FiXCircle size={18} />}
                    {resultMsg}
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
