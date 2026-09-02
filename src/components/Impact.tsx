import React from 'react';
import { nssImpact } from '../data/portfolioData';
import { HeartHandshake, Users, Leaf, Sparkles } from 'lucide-react';

export const Impact: React.FC = () => {
  const icons = [Users, HeartHandshake, Leaf];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            // COMMUNITY & LEADERSHIP
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Extra-Curricular & Social Impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nssImpact.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.impact}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
