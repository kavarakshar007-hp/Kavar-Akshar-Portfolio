import { Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-sky-500/10 py-10 px-4 md:px-8 bg-slate-950/40">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-500">
        
        {/* Left Side: Brand credit */}
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-sky-500" />
          <span>
            akshar.kavar() — © {currentYear}
          </span>
        </div>

        {/* Center Side: Heart statement */}
        <div className="flex items-center gap-1.5 font-sans">
          <span>Engineered with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>by</span>
          <span className="text-slate-400 font-semibold">{PERSONAL_INFO.name}</span>
        </div>

        {/* Right Side: Environment Status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SYSTEM_OPERATIONAL_200</span>
        </div>

      </div>
    </footer>
  );
}
