import React from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, Flame, FileJson, Code, Layout, Palette, 
  Atom, Server, Cpu, Wind, Database, Layers, 
  GitBranch, Github, SquareTerminal, Layers3, Box, Gitlab,
  Sliders
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal, Flame, FileJson, Code, Layout, Palette, 
  Atom, Server, Cpu, Wind, Database, Layers, 
  GitBranch, Github, SquareTerminal, Layers3, Box, Gitlab
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative px-4 md:px-8 bg-slate-950/20">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <Sliders className="w-4 h-4 text-teal-400" />
            <span>02 / Capabilities</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Weaponry</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mt-2" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((categoryGroup, groupIdx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
              className="rounded-3xl glass-panel p-6 border border-sky-500/10 flex flex-col space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-sky-500/10 pb-4">
                <h3 className="font-display text-lg font-bold text-white">
                  {categoryGroup.category}
                </h3>
                <span className="font-mono text-xs text-slate-500 font-semibold">
                  0{groupIdx + 1} // category
                </span>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-3" id={`skills-grid-${groupIdx}`}>
                {categoryGroup.skills.map((skill, skillIdx) => {
                  const IconComponent = IconMap[skill.iconName] || Code;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-sky-500/5 bg-slate-950/20 hover:border-sky-500/20 hover:bg-sky-500/5 hover:shadow-[0_0_15px_rgba(56,189,248,0.05)] transition-all group cursor-default"
                    >
                      {/* Icon wrapper */}
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 text-white group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-sans text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-left truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
