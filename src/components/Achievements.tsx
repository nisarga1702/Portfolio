import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            // HONORS & RECOGNITION
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            National Hackathons & Awards
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3D Trophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Glow Orb */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

              <div>
                {/* Trophy Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-amber-400 group-hover:rotate-12 transition-transform" />
                  </div>
                </div>

                {/* Result Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.result}</span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-4">
                  {item.competition} &bull; {item.date}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {item.prizePool && (
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                  <span>Prize Pool:</span>
                  <span className="text-amber-400">{item.prizePool}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
