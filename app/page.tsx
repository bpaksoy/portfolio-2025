'use client';

import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode, FaCloud, FaDatabase, FaTools } from 'react-icons/fa';
import ThreeBackground from './components/ThreeBackground';
import Typewriter from './components/Typewriter';
import TiltCard from './components/TiltCard';
import ScrollProgress from './components/ScrollProgress';
import FlipCard from './components/FlipCard';
import GlowCard from './components/GlowCard';
import AnimatedCounter from './components/AnimatedCounter';
import FloatingNav from './components/FloatingNav';
import Image from 'next/image';

// --- ANIMATION SETTINGS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-purple-500 selection:text-white relative">

      {/* 1. THE 3D BACKGROUND (Fixed behind everything) */}
      <ThreeBackground />
      <ScrollProgress />
      <FloatingNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16 sm:space-y-24 relative z-10">

        {/* --- HERO SECTION --- */}
        <header id="hero" className="text-center space-y-6 pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Glowing Name Effect with Shimmer */}
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] animate-gradient drop-shadow-lg">
                Banu Paksoy
              </h1>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 mb-6 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
              <span>I am a</span>
              <span className="text-purple-400 font-semibold">
                <Typewriter words={['Full-Stack Developer', 'Next.js Expert', 'Cloud Architect']} />
              </span>
            </h2>

            <div className="flex justify-center items-center gap-2 text-slate-400 mb-8 text-sm uppercase tracking-widest">
              <FaMapMarkerAlt />
              <span>Fort Lee, NJ | Remote Ready</span>
            </div>

            <div className="flex justify-center gap-6">
              <SocialBtn href="https://github.com/bpaksoy" icon={<FaGithub />} />
              <SocialBtn href="https://www.linkedin.com/in/banu-paksoy-1420a346/" icon={<FaLinkedin />} />
              <SocialBtn href="mailto:paksoybanu83@gmail.com" icon={<FaEnvelope />} />
            </div>
          </motion.div>
        </header>

        {/* --- SUMMARY SECTION (Glass Card) --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-8 rounded-2xl shadow-2xl"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            I am a <strong className="text-white">Full-Stack Architect</strong> specializing in scalable applications.
            I build production-grade systems using <strong className="text-blue-400">Next.js</strong> and <strong className="text-purple-400">NestJS</strong> on
            <strong className="text-yellow-400"> Google Cloud</strong>.
            Recently, I architected and built the e-commerce platform for <em className="text-white not-italic">Mobility on Demand</em>.
            I am now pushing the boundaries of <strong className="text-pink-400">Generative AI</strong> integration.
          </p>
        </motion.section>

        {/* --- ANIMATED STATS --- */}
        <motion.section
          id="stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
        >
          <GlowCard className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
            <AnimatedCounter value={7} suffix="+" label="Years Experience" />
          </GlowCard>
          <GlowCard className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
            <AnimatedCounter value={10} suffix="+" label="Projects Built" />
          </GlowCard>
          <GlowCard className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
            <AnimatedCounter value={5} suffix="" label="Cloud Deployments" />
          </GlowCard>
          <GlowCard className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
            <AnimatedCounter value={3} suffix="" label="AI Integrations" />
          </GlowCard>
        </motion.section>

        {/* --- SKILLS GRID --- */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <FaTools className="text-purple-400 text-xl" />
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SkillCard title="Front-End" icon={<FaCode />} skills={['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion']} />
            <SkillCard title="Back-End" icon={<FaDatabase />} skills={['Node.js', 'NestJS', 'Python', 'PostgreSQL', 'Django']} />
            <SkillCard title="Cloud & AI" icon={<FaCloud />} skills={['GCP', 'Firebase', 'Azure AI', 'Gemini API', 'Docker', 'CI/CD']} />
            <SkillCard title="Workflow" icon={<FaTools />} skills={['Git', 'Figma', 'VS Code', 'Jira', 'Postman']} />
          </div>
        </motion.section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4"
          >
            <FaCode className="text-purple-400 text-xl" />
            <h2 className="text-2xl font-bold text-white">Featured Work</h2>
          </motion.div>

          <div className="space-y-12">

            {/* Project 1 */}
            <ProjectCard
              title="Mobility on Demand"
              subtitle="E-Commerce & Delivery Platform"
              badge="Flagship"
              stack={['Next.js', 'NestJS', 'GCP', 'PostgreSQL']}
              description="Solely built and deployed a production-grade e-commerce platform on Google Cloud. Integrated Autofleet API for real-time dispatching and automated order workflows."
              link="https://shop.mod.group/"
              linkText="Visit Live App"
              color="blue"
              image="/MoDstore.png"
              images={['/MoDstore.png', '/MoDApp.png']}
            />

            {/* Project 2 */}
            <ProjectCard
              title="Worm"
              subtitle="AI College Discovery Platform"
              badge="AI / Full-Stack"
              stack={['React', 'Django', 'PostgreSQL', 'Gemini API', 'Firebase', 'GCP']}
              description="An AI-powered higher education discovery platform. Search 6,000+ colleges, get personalized admissions advice from Wormie AI, and connect with students in College Hubs."
              link="https://wormie.app"
              linkText="Visit Live App"
              githubLink="https://github.com/bpaksoy/capstone"
              color="green"
              image="/wormie_app.png"
            />

            {/* Project 3 */}
            <ProjectCard
              title="Profi Deutsch"
              subtitle="AI Language Coach"
              badge="AI / LLM"
              stack={['Gemini API', 'Azure Speech', 'Python', 'React']}
              description="A personal AI German language trainer for professionals. Uses Google Gemini for conversation logic and Azure for realistic voice synthesis to practice pronunciation and business phrases."
              link="https://sigsag-6055d.web.app/"
              linkText="Visit Live App"
              githubLink="https://github.com/bpaksoy/profi-deutsch-app-2"
              color="purple"
              image="/sigsag.png"
            />

            {/* Project 4 */}
            <ProjectCard
              title="Urbanitus Magazine"
              subtitle="Digital Publication"
              role="Front-End"
              stack={['WordPress', 'React', 'Analytics']}
              description="Redesigned a high-traffic magazine, implementing custom analytics to boost reader engagement."
              link="https://urbanitus.com"
              linkText="Visit Site"
              color="pink"
              image="/magazine_web.png"
            />

          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Professional History</h2>
          <div className="space-y-10">

            {/* MOD - The New Description */}
            <ExperienceItem
              role="Full Stack Developer"
              company="Mobility on Demand"
              date="Feb 2025 – Present"
              points={[
                "Solely built and deployed a scalable e-commerce platform on Google Cloud Platform (GCP) using Next.js and NestJS.",
                "Developed the 'intermediate stops' feature for the cross-platform mobile app (Expo + React Native), handling UI, state management, and backend API logic.",
                "Extended backend routing and scheduling algorithms to support multi-stop itineraries with dynamic price and time estimations.",
                "Improved end-user flexibility, directly increasing the value of premium rides by enabling customizable journeys."
              ]}
            />

            <ExperienceItem
              role="Front-End Web Developer"
              company="Urbanitus Magazine"
              date="Oct 2019 – Feb 2025"
              points={[
                "Led the digital redesign of a high-traffic magazine using WordPress and React.",
                "Boosted reader engagement through analytics-driven UI optimization and improved site load performance."
              ]}
            />

            <ExperienceItem
              role="Teaching Assistant"
              company="CUNY Hunter College"
              date="May 2018 – Jun 2018"
              points={[
                "Supported 2X Tech Talent Pipeline bootcamp students in learning JavaScript, React, and SQLite.",
                "Mentored underrepresented students entering the NYC tech industry."
              ]}
            />
          </div>
        </motion.section>

        {/* --- EDUCATION SECTION --- */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <EducationCard
              school="Harvard University"
              degree="CS50 Web Programming with Python & JavaScript"
              year="2023 – 2024"
              icon="🎓"
              certLink="https://certificates.cs50.io/de5d961b-cc1a-4a2b-8af1-ce02dba9918b.pdf?size=letter"
            />

            <EducationCard
              school="Galvanize / Hack Reactor"
              degree="Web Development Immersive"
              year="2018"
              icon="💻"
            />

            <EducationCard
              school="Istanbul Bilgi University"
              degree="Master of Business Administration (MBA)"
              year="2009"
              icon="💼"
            />

            <EducationCard
              school="Bogazici University"
              degree="BA in English Literature"
              year="2006"
              icon="📖"
            />

          </div>
        </motion.section>

      </main>

      <footer className="border-t border-white/10 py-6 sm:py-8 text-center text-slate-500 text-xs sm:text-sm bg-black/20">
        <p>© {new Date().getFullYear()} Banu Paksoy. Built with Next.js & React Three Fiber.</p>
      </footer>
    </div>
  );
}

// --- DARK MODE COMPONENTS ---

function SocialBtn({ href, icon }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-purple-500 hover:border-purple-500 transition-colors duration-300 text-white text-xl shadow-lg"
    >
      {icon}
    </motion.a>
  );
}

function SkillCard({ title, icon, skills }: any) {
  return (
    <TiltCard>
      <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-colors h-full">
        <div className="flex items-center gap-3 mb-4 text-purple-400 text-lg">
          {icon}
          <h3 className="font-bold text-slate-200">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((s: string) => (
            <span key={s} className="bg-black/40 text-slate-300 text-xs font-mono px-2 py-1 rounded border border-white/5">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </TiltCard>
  );
}

function ProjectCard({ title, subtitle, stack, description, link, linkText, badge, color, image, githubLink, images }: any) {
  const colorClasses: any = {
    blue: "from-blue-500/20 to-blue-600/5 border-blue-500/20 hover:border-blue-500/50",
    purple: "from-purple-500/20 to-purple-600/5 border-purple-500/20 hover:border-purple-500/50",
    pink: "from-pink-500/20 to-pink-600/5 border-pink-500/20 hover:border-pink-500/50",
    green: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/50",
  };

  const gradientBg: any = {
    blue: "bg-gradient-to-br from-blue-500/30 via-blue-900/10 to-transparent",
    purple: "bg-gradient-to-br from-purple-500/30 via-purple-900/10 to-transparent",
    pink: "bg-gradient-to-br from-pink-500/30 via-pink-900/10 to-transparent",
    green: "bg-gradient-to-br from-emerald-500/30 via-emerald-900/10 to-transparent",
  };

  const FrontContent = (
    <motion.div
      variants={fadeInUp}
      className={`group relative h-full bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border ${colorClasses[color]} transition-all duration-300 flex flex-col`}
    >
      {/* Visual Header */}
      <div className={`h-24 w-full ${gradientBg[color]} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500"></div>

        {/* Hint to Flip */}
        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white/70 font-mono border border-white/10">
          CLICK TO FLIP ↻
        </div>
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className={`text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-${color}-400 transition-colors`}>{title}</h3>
            <p className="text-slate-400 text-xs">{subtitle}</p>
          </div>
          {badge && <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide border border-white/10">{badge}</span>}
        </div>

        <p className="text-slate-300 mb-4 text-sm font-light leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech: string) => (
            <span key={tech} className="text-[10px] font-mono text-slate-400 bg-black/30 border border-white/5 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${githubLink ? 'sm:flex-1' : 'w-full'} py-2 bg-white text-black font-bold text-sm rounded-lg hover:bg-slate-200 transition-colors text-center`}
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:flex-1 py-2 bg-white/10 text-white font-bold text-sm rounded-lg hover:bg-white/20 transition-colors text-center border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-base" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const BackContent = (
    <div className={`relative h-full w-full rounded-2xl overflow-hidden border ${colorClasses[color]}`}>
      {images && images.length > 1 ? (
        <div className="flex h-full w-full bg-slate-950">
          <div className="relative w-1/2 h-full">
            <Image src={images[0]} alt={`${title} - Web`} fill className="object-contain p-2" />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white/80 text-[10px] font-mono bg-black/50 py-1">Web App</div>
          </div>
          <div className="w-px bg-white/20" />
          <div className="relative w-1/2 h-full">
            <Image src={images[1]} alt={`${title} - Mobile`} fill className="object-contain p-2" />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white/80 text-[10px] font-mono bg-black/50 py-1">Mobile App</div>
          </div>
        </div>
      ) : (
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain bg-slate-950 p-2"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-xs font-mono">
        CLICK TO FLIP BACK ↺
      </div>
    </div>
  );

  return (
    <div className="h-[480px] sm:h-[400px]">
      <FlipCard front={FrontContent} back={BackContent} />
    </div>
  );
}

interface ExpProps { role: string; company: string; date: string; points: string[]; }

function ExperienceItem({ role, company, date, points }: ExpProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-10 border-l-2 border-white/10 pl-4 sm:pl-6 relative">
      {/* The Dot on the timeline */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900 shadow-sm shadow-purple-500/50"></div>

      <div className="md:w-48 flex-shrink-0">
        <h4 className="font-bold text-lg text-slate-200">{company}</h4>
        <p className="text-purple-400 font-medium">{role}</p>
        <p className="text-slate-500 text-sm mt-1">{date}</p>
      </div>

      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300 font-light leading-relaxed marker:text-purple-500">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}


function EducationCard({ school, degree, year, icon, certLink }: any) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 sm:gap-4">
      <div className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-inner flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-200 text-lg">{school}</h4>
        <p className="text-purple-400 text-sm font-medium mb-1">{degree}</p>
        <p className="text-slate-500 text-xs font-mono">{year}</p>
        {certLink && (
          <a
            href={certLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
          >
            View Certificate ↗
          </a>
        )}
      </div>
    </div>
  );
}