import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Github, Linkedin, Send, Terminal, 
  Sparkles, CheckCircle2, MessageSquareCode, MapPin 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      label: 'github/aksharkavar',
      url: PERSONAL_INFO.github,
      icon: Github,
      color: 'hover:text-white hover:border-slate-400 hover:bg-slate-500/10',
    },
    {
      name: 'LinkedIn',
      label: 'linkedin/in/aksharkavar',
      url: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      color: 'hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/10',
    },
    {
      name: 'Email',
      label: PERSONAL_INFO.email,
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      color: 'hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/10',
    },
  ];

  return (
    <section id="contact" className="py-24 relative px-4 md:px-8 bg-slate-950/20">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <MessageSquareCode className="w-4 h-4 text-teal-400" />
            <span>06 / Communication</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mt-2" />
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 w-full text-left" id="contact-form-container">
            <div className="rounded-3xl glass-panel p-6 md:p-8 border border-sky-500/15 shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-bold text-white">
                        Send a Message
                      </h3>
                      <p className="font-sans text-xs text-slate-400">
                        Have an exciting project, mentoring request, or just want to chat? Shoot me a message.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-sky-500/10 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/40 text-slate-200 placeholder:text-slate-600 font-sans text-sm transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="your.email@domain.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-sky-500/10 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/40 text-slate-200 placeholder:text-slate-600 font-sans text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Write your message details here..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-sky-500/10 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/40 text-slate-200 placeholder:text-slate-600 font-sans text-sm transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-slate-950 font-sans font-bold tracking-wide hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-[1.02] active:scale-100 disabled:opacity-50 disabled:scale-100 disabled:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                          <span>Encrypting Payload...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-6 flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-[0_0_20px_rgba(94,234,212,0.2)] animate-bounce">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-white">
                        Payload Sent Successfully!
                      </h3>
                      <p className="font-sans text-sm text-slate-400 max-w-sm mx-auto">
                        Thank you for reaching out. Your transmission has been successfully routed. I will get back to you shortly!
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-950/60 border border-teal-500/25 p-4 font-mono text-left text-xs max-w-sm w-full space-y-1">
                      <div className="flex justify-between text-slate-500">
                        <span>Transmission:</span>
                        <span className="text-teal-400">SUCCESS_STATUS_200</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>UTC Timestamp:</span>
                        <span>{new Date().toISOString().slice(0, 19)}Z</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Recipient Node:</span>
                        <span>akshar.kavar@node</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-full border border-sky-500/30 text-sky-400 hover:bg-sky-500/10 transition-colors font-mono text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>reset_form()</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: CTA Social Cards */}
          <div className="lg:col-span-5 space-y-6 text-left" id="contact-info-container">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white leading-snug">
                Let's construct <br />
                something <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">extraordinary.</span>
              </h3>
              <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
                Whether you are looking to hire a driven software engineering intern, collaborate on collaborative campus developer programs, or simply speak code—I am always ready to connect.
              </p>
              
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>

            {/* Social Connection Stack */}
            <div className="flex flex-col gap-3.5 pt-4">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center justify-between p-4 rounded-2xl glass-panel border border-sky-500/10 transition-all ${social.color} group`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                        <SocialIcon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans text-xs text-slate-500 uppercase tracking-wider font-semibold">
                          {social.name}
                        </span>
                        <span className="font-mono text-xs text-slate-300 font-medium truncate max-w-[200px] sm:max-w-none">
                          {social.label}
                        </span>
                      </div>
                    </div>
                    <Sparkles className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
