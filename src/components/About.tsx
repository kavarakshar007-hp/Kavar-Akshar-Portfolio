import { motion } from 'motion/react';
import { User, Terminal, Code, Award, Users2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const stats = [
    {
      id: 'stat-study',
      value: 'BE - 2nd',
      label: 'Year of CSE Study',
      subtext: 'MSU Baroda',
      icon: Code,
    },
    {
      id: 'stat-members',
      value: '200+',
      label: 'Members Mentored',
      subtext: 'CodeLab Club',
      icon: Users2,
    },
    {
      id: 'stat-projects',
      value: '12+',
      label: 'Projects Built',
      subtext: 'Academic & Freelance',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 relative px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <User className="w-4 h-4 text-teal-400" />
            <span>01 / About Me</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">My Developer Story</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mt-2" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="prose prose-invert max-w-none text-slate-400 space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Hi! My name is <span className="text-slate-100 font-semibold">Akshar Kavar</span>. I'm currently pursuing my Bachelor of Engineering in Computer Science and Engineering (BE-2) at <span className="text-sky-400 font-medium">The Maharaja Sayajirao University of Baroda</span>. 
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                My passion lies in bridging elegant client-side visual design with high-performance, resilient backends. I love crafting interactive web applications using the <span className="text-teal-400 font-medium">MERN Stack</span> and solving complex algorithms to sharpen my problem-solving abilities.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Recognizing the need for a collaborative developer ecosystem on campus, I founded <span className="text-sky-400 font-medium font-semibold">CodeLab Club</span>—a thriving, student-led technical community. Through CodeLab, I actively mentor junior students, structure tech curricula, and host coding contests and hackathons.
              </p>
            </div>

            {/* Quick Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6" id="about-stats-grid">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl glass-panel p-5 flex flex-col justify-between border border-sky-500/10 hover:border-sky-500/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] group transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                      {stat.value}
                    </span>
                    <stat.icon className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-slate-300">
                      {stat.label}
                    </h4>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      {stat.subtext}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: whoami Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full"
            id="about-terminal-container"
          >
            <div className="w-full rounded-2xl glass-panel border border-sky-500/20 overflow-hidden text-left font-mono text-xs shadow-2xl">
              {/* Card Header */}
              <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-sky-500/15">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-sky-500/50" />
                  <span className="w-3 h-3 rounded-full bg-teal-500/50" />
                  <span className="w-3 h-3 rounded-full bg-indigo-500/50" />
                </div>
                <span className="text-slate-500 font-medium text-[10px]">whoami.sh</span>
                <Terminal className="w-3.5 h-3.5 text-slate-600" />
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 bg-slate-950/40 text-slate-300">
                <div className="space-y-1">
                  <p className="text-teal-400"><span className="text-sky-400">akshar $</span> run bio --summary</p>
                  <p className="text-slate-400 mt-1">
                    &gt; Akshar Kavar is an energetic 2nd-year CSE undergrad who lives at the intersection of logical problem solving and web craft.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-sky-500/10">
                  <p className="text-teal-400"><span className="text-sky-400">akshar $</span> cat core-values.yml</p>
                  <div className="pl-3 space-y-1 text-slate-400">
                    <p><span className="text-sky-300">1. CommunityFirst:</span> true</p>
                    <p className="text-[11px] text-slate-500 pl-4"># Lift others as we climb</p>
                    <p><span className="text-sky-300">2. CleanArchitecture:</span> "SOLID / DRY"</p>
                    <p className="text-[11px] text-slate-500 pl-4"># Write maintainable modular services</p>
                    <p><span className="text-sky-300">3. ContinuousLearning:</span> "Always active"</p>
                    <p className="text-[11px] text-slate-500 pl-4"># Read, build, break, fix</p>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-sky-500/10">
                  <p className="text-teal-400"><span className="text-sky-400">akshar $</span> inspect --passions</p>
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 text-[10px] border border-sky-500/15">
                      Competitive Coding
                    </span>
                    <span className="px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 text-[10px] border border-teal-500/15">
                      MERN Architectures
                    </span>
                    <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] border border-indigo-500/15">
                      Student Mentoring
                    </span>
                    <span className="px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 text-[10px] border border-orange-500/15">
                      System Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
