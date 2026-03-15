"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-500">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-500">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-500">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, "title"> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut" as any, // Cast to any to bypass strict literal union typing locally
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden text-[var(--text)] md:flex-row",
          className
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 pt-12 md:w-1/2 md:p-12 lg:w-3/5 lg:py-20 lg:pl-[10%] xl:pl-[15%] z-10 relative">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-8" variants={itemVariants}>
                    <div className="flex items-center">
                        <h3 className="text-primary-500 font-semibold text-sm tracking-widest uppercase">About Me</h3>
                    </div>
                </motion.header>

                <motion.div variants={containerVariants}>
                    <motion.h1 className="text-4xl font-extrabold leading-tight text-[var(--text)] md:text-5xl lg:text-6xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-8 h-1 w-20 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full" variants={itemVariants}></motion.div>
                    <motion.p className="mb-10 max-w-lg text-lg text-[var(--text-muted)] leading-relaxed" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    
                    <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                        <a 
                            href="/Digvijay_resume-1.pdf" 
                            download 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-primary-500/20"
                        >
                           Download CV
                        </a>
                        <a 
                            href={callToAction.href} 
                            className="px-8 py-3.5 rounded-full border border-[var(--border)] text-[var(--text)] hover:border-primary-500 hover:text-primary-500 font-medium transition-all hover:scale-105"
                        >
                            {callToAction.text}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-16 w-full pt-8 border-t border-[var(--border)]" variants={itemVariants}>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-[var(--text-muted)] font-medium">
                    <div className="flex items-center group">
                        <InfoIcon type="website" />
                        <span className="group-hover:text-primary-500 transition-colors">{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center group">
                        <InfoIcon type="phone" />
                        <span className="group-hover:text-primary-500 transition-colors">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center group">
                        <InfoIcon type="address" />
                        <span className="group-hover:text-primary-500 transition-colors">{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
        >
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary-500/50 to-transparent relative overflow-hidden">
                <motion.div 
                    animate={{ y: [0, 48, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-1/4 bg-primary-500"
                />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] animate-pulse">Scroll</span>
        </motion.div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 grayscale hover:grayscale-0 transition-all duration-700"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          whileInView={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-card)] via-transparent to-transparent hidden md:block"></div>
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
