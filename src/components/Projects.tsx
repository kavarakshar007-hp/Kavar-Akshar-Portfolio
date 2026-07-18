import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, ExternalLink, Github, MessageSquare, 
  Layers, LineChart, Cpu, Calendar, Code, Laptop
} from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  // Categories list
  const categories = ['All', 'Full-Stack', 'Educational', 'Productivity', 'Data & APIs', 'Real-time'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // Icon selector based on project ID
  const getProjectIcon = (id: string) => {
    switch(id) {
      case 'codelab-portal': return Calendar;
      case 'dsa-visualizer': return Cpu;
      case 'mern-shop': return Laptop;
      case 'taskflow': return Layers;
      case 'climate-pulse': return LineChart;
      case 'echo-chat': return MessageSquare;
      default: return FolderGit2;
    }
  };

  return (
    <section id="projects" className="py-24 relative px-4 md:px-8 bg-slate-950/20">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <FolderGit2 className="w-4 h-4 text-teal-400" />
            <span>04 / Portfolio</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mt-2" />
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 justify-start md:justify-center border-b border-sky-500/10 pb-6" id="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-300 ${
                filter === cat
                  ? 'bg-sky-500/15 text-sky-400 border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] font-bold'
                  : 'bg-transparent text-slate-400 border border-transparent hover:text-slate-200 hover:border-sky-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx) => {
              const ProjectIcon = getProjectIcon(project.id);
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl glass-panel border border-sky-500/10 hover:border-sky-500/30 p-6 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] relative overflow-hidden text-left h-[340px]"
                >
                  {/* Decorative glowing gradient blur */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

                  <div className="space-y-4">
                    {/* Header: Icon & GitHub Links */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          referrerPolicy="no-referrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          title="GitHub Source"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          referrerPolicy="no-referrer"
                          className="text-slate-400 hover:text-sky-400 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[9px] font-mono border border-amber-500/20">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-xs md:text-sm text-slate-400 line-clamp-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Chips & Category Indicator */}
                  <div className="space-y-4 pt-4 border-t border-sky-500/5 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-950/50 text-[10px] text-slate-400 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-950/50 text-[10px] text-slate-500 font-mono">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
