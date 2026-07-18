import { motion } from 'motion/react';
import { 
  Award, Trophy, Users, GraduationCap, Medal, Sparkles, Milestone 
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data';
import { Achievement } from '../types';

export default function Achievements() {
  // Map categories to specific icons
  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'education':
        return GraduationCap;
      case 'leadership':
        return Users;
      case 'hackathon':
        return Trophy;
      case 'milestone':
        return Medal;
      default:
        return Sparkles;
    }
  };

  // Map categories to decorative glow color classes
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'leadership':
        return 'text-teal-400 border-teal-500/30 bg-teal-500/10';
      case 'hackathon':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'milestone':
        return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
      default:
        return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
    }
  };

  return (
    <section id="achievements" className="py-24 relative px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-teal-400" />
            <span>05 / Milestones</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Accolades & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Achievements</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mt-2" />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto pl-8 md:pl-12 space-y-10 text-left">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-[15px] md:left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-sky-500/30 via-teal-500/20 to-transparent" />

          {ACHIEVEMENTS.map((ach: Achievement, idx: number) => {
            const IconComponent = getAchievementIcon(ach.category);
            const colorClasses = getCategoryColor(ach.category);

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-4 items-start"
              >
                {/* Glowing Node Dot */}
                <div 
                  className={`absolute -left-[32px] md:-left-[43px] top-1.5 w-7 h-7 md:w-9 md:h-9 rounded-full border flex items-center justify-center shadow-lg transition-transform hover:scale-115 ${colorClasses}`}
                >
                  <IconComponent className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
                </div>

                {/* Timeline Card */}
                <div className="w-full rounded-2xl glass-panel p-5 md:p-6 border border-sky-500/10 hover:border-sky-500/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.08)] group transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-500/5 pb-3">
                    <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {ach.title}
                    </h3>
                    <span className="font-mono text-xs text-sky-400 font-semibold px-2.5 py-1 rounded bg-sky-500/5 border border-sky-500/10 w-fit">
                      {ach.date}
                    </span>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed mt-3">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
