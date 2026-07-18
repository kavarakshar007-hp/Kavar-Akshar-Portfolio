import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle, Users } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <Briefcase className="w-4 h-4 text-teal-400" />
            <span>03 / Career</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mt-2" />
        </div>

        {/* Timeline Stack */}
        <div className="relative max-w-4xl mx-auto space-y-12">
          {/* Vertical line tracker */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-500/20 via-teal-500/10 to-transparent transform -translate-x-1/2 hidden md:block" />

          {EXPERIENCES.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-slate-950 border border-sky-500/40 flex items-center justify-center transform -translate-x-1/2 shadow-[0_0_15px_rgba(56,189,248,0.2)] z-10 hidden md:flex">
                  <Users className="w-4 h-4 text-sky-400" />
                </div>

                {/* Left side empty space to balance layout */}
                <div className="w-full md:w-1/2 hidden md:block" />

                {/* Experience Card */}
                <div className="w-full md:w-[calc(50%-2rem)] text-left" id={`exp-card-${idx}`}>
                  <div className="rounded-3xl glass-panel p-6 md:p-8 border border-sky-500/10 hover:border-sky-500/35 hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all relative overflow-hidden group">
                    {/* Top ambient color bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-teal-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Metadata header */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-[10px] border border-sky-500/20 w-fit">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.duration}</span>
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 font-mono text-xs">
                        <span className="text-teal-400 font-semibold">{exp.organization}</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Description Bullets */}
                    <ul className="mt-6 space-y-3 text-slate-400 text-sm leading-relaxed font-sans">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-teal-500/70 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-slate-950/40 text-slate-400 text-[10px] font-medium border border-sky-500/5 hover:border-sky-500/25 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
