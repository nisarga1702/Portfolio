import React from 'react';
import { researchPublication } from '../data/portfolioData';
import { BookOpen, ExternalLink, Sparkles, FileCheck, Share2 } from 'lucide-react';

export const Publication: React.FC = () => {
  return (
    <section id="publication" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            // ACADEMIC PUBLICATION
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Peer-Reviewed Research
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Paper Showcase Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto">
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

          <div className="flex flex-col md:flex-row items-start gap-6">
            
            {/* Journal Icon Badge */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-xl shadow-cyan-500/20 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Paper Content */}
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  {researchPublication.date}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                  {researchPublication.volume}
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>DOI Indexed</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">
                {researchPublication.title}
              </h3>

              <p className="text-sm font-mono text-slate-400">
                Published in: <span className="text-slate-200 italic">{researchPublication.journal}</span>
              </p>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 text-sm leading-relaxed flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Key Impact & Findings:</strong>
                  {researchPublication.impact}
                </div>
              </div>

              {/* DOI Link Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={researchPublication.doiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl hover:from-cyan-500 hover:to-indigo-500 transition-all shadow-lg shadow-cyan-600/20 hover:scale-105"
                >
                  <span>View Official DOI: {researchPublication.doi}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
