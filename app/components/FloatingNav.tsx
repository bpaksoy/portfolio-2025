'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCode, FaBriefcase, FaGraduationCap, FaRocket, FaChartBar } from 'react-icons/fa';

const sections = [
  { id: 'hero', icon: <FaUser />, label: 'About' },
  { id: 'stats', icon: <FaChartBar />, label: 'Stats' },
  { id: 'skills', icon: <FaCode />, label: 'Skills' },
  { id: 'projects', icon: <FaRocket />, label: 'Projects' },
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'education', icon: <FaGraduationCap />, label: 'Education' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      setIsVisible(window.scrollY > 300);

      // If at the bottom of the page, highlight last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        setActiveSection(sections[sections.length - 1].id);
        ticking = false;
        return;
      }

      const sectionElements = sections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2"
        >
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full py-3 px-2 flex flex-col items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-sm">{section.icon}</span>
                <span className="absolute right-12 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                  {section.label}
                </span>
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
