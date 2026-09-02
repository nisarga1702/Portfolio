import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, BrainCircuit, Globe, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BrainCircuit,
  Globe,
  Cpu,
  Wrench
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            // TECHNICAL EXPERTISE
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills & Specializations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.iconName] || Code2;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-100 text-sm flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            {skill.name}
                          </span>
                        </div>

                        {/* Skill Tags */}
                        {skill.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-2 pl-6">
                            {skill.tags.map((t, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                                #{t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
