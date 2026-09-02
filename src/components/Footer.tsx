import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 shadow-md">
            <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="font-bold text-white tracking-tight">NISARGA H</span>
          <span className="text-xs font-mono text-slate-500">&bull; Portfolio 2026</span>
        </div>

        {/* Text */}
        <div className="text-xs text-slate-400 flex items-center gap-1 font-mono">
          <span>Designed & Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>using React 19, Three.js & Tailwind CSS</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-mono"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>

      </div>
    </footer>
  );
};
