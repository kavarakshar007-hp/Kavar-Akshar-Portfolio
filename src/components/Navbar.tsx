import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section highlights
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 transition-all duration-500">
      <nav
        id="navbar"
        className={`w-full transition-all duration-500 ease-in-out glass-nav rounded-full flex items-center justify-between ${
          isScrolled
            ? 'max-w-4xl py-2 px-6 mt-3 shadow-lg border-sky-500/30'
            : 'max-w-6xl py-4 px-8 mt-6 border-sky-500/10'
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group font-mono text-sm tracking-tight"
          id="nav-logo"
        >
          <Code2 className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
            akshar<span className="text-sky-400">.kavar()</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                activeSection === link.id
                  ? 'text-sky-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`font-mono text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 ${
              activeSection === 'contact'
                ? 'bg-sky-500/20 text-sky-300 border-sky-400'
                : 'bg-transparent text-sky-400 border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]'
            }`}
            id="nav-contact-btn"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>./contact.sh</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-sky-400 focus:outline-none"
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer (Collapses under 768px) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 py-6 px-6 rounded-3xl glass-nav md:hidden flex flex-col gap-4 border border-sky-500/20 shadow-2xl z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-base font-medium py-2 px-3 rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'bg-sky-500/10 text-sky-400 border-l-2 border-sky-400'
                    : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-2 font-mono text-sm font-semibold text-center py-2.5 rounded-full border border-sky-400 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-all flex items-center justify-center gap-2"
              id="mobile-nav-contact-btn"
            >
              <Terminal className="w-4 h-4" />
              <span>contact_me()</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
