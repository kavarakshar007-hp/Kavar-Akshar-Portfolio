import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Github, Linkedin, Sparkles, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = PERSONAL_INFO.typingRoles;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];
    
    // Typing speed control
    const typeSpeed = isDeleting ? 30 : 60;
    
    const handleType = () => {
      if (!isDeleting) {
        // Add char
        setRoleText(currentFullText.substring(0, roleText.length + 1));
        
        if (roleText === currentFullText) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Remove char
        setRoleText(currentFullText.substring(0, roleText.length - 1));
        
        if (roleText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      timer = setTimeout(handleType, typeSpeed);
    };

    timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex, roles]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 md:px-8"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Core Intro */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 font-mono text-xs text-sky-400 font-medium"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>BE-2 Computer Science Student</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-sm tracking-widest text-teal-400"
            >
              $ whoami
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400 glow-text-blue">{PERSONAL_INFO.name}</span>
            </motion.h1>
          </div>

          {/* Typing Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-lg md:text-2xl text-slate-300 font-semibold h-10 flex items-center"
            id="hero-typing-container"
          >
            <span>&gt; </span>
            <span className="text-sky-300 ml-2">{roleText}</span>
            <span className="w-2.5 h-6 bg-sky-400 ml-1 cursor-blink" />
          </motion.div>

          {/* Short Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-sans text-slate-400 text-base md:text-lg max-w-lg leading-relaxed"
          >
            I am a passionate CS undergraduate student at <span className="text-slate-200 font-medium">{PERSONAL_INFO.university}</span>. 
            As the founder of <span className="text-teal-400 font-medium">CodeLab Club</span>, I drive a campus-wide developer ecosystem 
            while engineering scalable full-stack web solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            id="hero-ctas"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-slate-950 font-sans font-semibold tracking-wide hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-full border border-sky-500/30 bg-sky-500/5 text-sky-400 font-sans font-semibold hover:bg-sky-500/10 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </motion.div>

          {/* Quick social connect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 pt-4 text-slate-400"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Connect:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="hover:text-sky-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="hover:text-sky-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 h-full flex items-center justify-center"
          id="hero-terminal-mockup"
        >
          <div className="w-full max-w-md rounded-2xl glass-panel shadow-2xl border border-sky-500/20 overflow-hidden text-left font-mono text-xs leading-relaxed">
            {/* Terminal header */}
            <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-sky-500/15">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-slate-500 font-medium text-[10px]">akshar@msu-baroda:~</span>
              <Terminal className="w-3.5 h-3.5 text-slate-600" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-4 bg-slate-950/40 text-slate-300">
              <div>
                <p className="text-slate-500"># Query profile information</p>
                <p className="text-teal-400">
                  <span className="text-sky-400">akshar $</span> cat profile.json
                </p>
              </div>

              <div className="space-y-1 text-slate-300 pl-2 border-l border-sky-500/10">
                <p><span className="text-yellow-400">"fullName"</span>: <span className="text-emerald-400">"Akshar Kavar"</span>,</p>
                <p><span className="text-yellow-400">"academicInstitution"</span>: <span className="text-emerald-400">"MSU Baroda"</span>,</p>
                <p><span className="text-yellow-400">"degree"</span>: <span className="text-emerald-400">"BE-2 (Computer Science)"</span>,</p>
                <p><span className="text-yellow-400">"positions"</span>: [<span className="text-emerald-400">"Founder @ CodeLab Club"</span>],</p>
                <p><span className="text-yellow-400">"focus"</span>: [<span className="text-emerald-400">"Full-Stack Web"</span>, <span className="text-emerald-400">"Algorithms"</span>],</p>
                <p><span className="text-yellow-400">"location"</span>: <span className="text-emerald-400">"Vadodara, India"</span></p>
              </div>

              <div>
                <p className="text-slate-500"># Active Stack Diagnostics</p>
                <p className="text-teal-400">
                  <span className="text-sky-400">akshar $</span> npx system-status --core
                </p>
                <div className="mt-2 space-y-1 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✔</span>
                    <span>Server Engines: Node.js / Express</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✔</span>
                    <span>Client Render: React 19 / Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✔</span>
                    <span>Storage Engine: MongoDB / MySQL</span>
                  </div>
                  <div className="flex items-center gap-2 animate-pulse text-sky-400">
                    <span className="text-sky-400">●</span>
                    <span>Currently building: Club Portal v2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
