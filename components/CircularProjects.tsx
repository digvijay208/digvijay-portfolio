import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type Tag = {
  label: string;
  color: string;
};

export type Project = {
  title: string;
  description: string;
  tags: Tag[];
  github?: string;
  demo?: string;
  gradient: string;
  emoji: string;
  image?: string;
};

interface CircularProjectsProps {
  projects: Project[];
  autoplay?: boolean;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularProjects = ({
  projects,
  autoplay = true,
}: CircularProjectsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const projectsLength = useMemo(() => projects.length, [projects]);
  const activeProject = useMemo(
    () => projects[activeIndex],
    [activeIndex, projects]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projectsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, projectsLength]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, projectsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + projectsLength) % projectsLength === index;
    const isRight = (activeIndex + 1) % projectsLength === index;
    
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "none",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "none",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 items-center">
        {/* Project Visuals */}
        <div 
          className="relative w-full h-[20rem] sm:h-[24rem] perspective-[1000px]" 
          ref={imageContainerRef}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] bg-gradient-to-br ${project.gradient} flex items-center justify-center group`}
              style={getImageStyle(index)}
            >
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              ) : (
                <span className="text-7xl sm:text-9xl select-none relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {project.emoji}
                </span>
              )}
              {/* Subtle overlay grid */}
              <div
                className="absolute inset-0 opacity-20 z-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              {/* Links hover overlay */}
              <div className={`absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-6 opacity-0 hover:opacity-100 z-20`}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center text-gray-900 hover:scale-110 hover:bg-primary-50 hover:text-primary-600 transition-all shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="View Github Repository"
                  >
                    <Github size={24} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center text-gray-900 hover:scale-110 hover:bg-primary-50 hover:text-primary-600 transition-all shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-between h-full py-4 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex-1"
            >
              <h3 className="font-black text-3xl sm:text-4xl text-[var(--text)] mb-4">
                {activeProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2.5 mb-8">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full ${tag.color} shadow-sm`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              
              <motion.p className="text-[var(--text-muted)] text-lg sm:text-xl leading-[1.8]">
                {activeProject.description.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.03 * i,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex gap-4 mt-8 pt-4">
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all border-none bg-neutral-100 dark:bg-neutral-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-[var(--text)] shadow-md hover:shadow-xl hover:-translate-y-1"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all border-none bg-neutral-100 dark:bg-neutral-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-[var(--text)] shadow-md hover:shadow-xl hover:-translate-y-1"
              onClick={handleNext}
              aria-label="Next project"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProjects;
