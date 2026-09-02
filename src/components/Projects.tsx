import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ExternalLink, Trophy, X, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'AI/ML', 'Full-Stack', 'IoT & Security', 'Signal Processing'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            // FEATURED PORTFOLIO
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Innovative Technical Projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-800/80 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Award Badge Top Right */}
              {project.award && (
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  <Trophy className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[200px]">{project.award}</span>
                </div>
              )}

              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Key Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.keySkills.slice(0, 4).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-indigo-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.keySkills.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                      +{project.keySkills.length - 4} more
                    </span>
                  )}
                </div>

                {/* View Details CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span className="flex items-center gap-1">
                    View Architecture & Details
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              {selectedProject.award && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold mb-3">
                  <Trophy className="w-4 h-4" />
                  <span>{selectedProject.award}</span>
                </div>
              )}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  // PROJECT OVERVIEW
                </h4>
                <p className="text-slate-200">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                  // KEY ARCHITECTURAL HIGHLIGHTS
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                  // TECHNOLOGIES & TOOLS USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.keySkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-950/80 text-cyan-300 border border-indigo-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
