import React from 'react';
import { internship, education, certifications } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            // EXPERIENCE & EDUCATION
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Journey & Academic Track
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Internship & Certifications */}
          <div className="space-y-8">
            
            {/* Internship Box */}
            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6 relative overflow-hidden group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {internship.role}
                  </h3>
                  <div className="text-sm font-mono text-indigo-300">
                    {internship.company} &bull; {internship.period}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {internship.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Box */}
            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Certifications & Specializations
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    Distinctions & Advanced Credentials
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                      <span className="text-[11px] font-mono text-indigo-300">{cert.period}</span>
                    </div>
                    <div className="text-xs text-cyan-400 font-medium">{cert.issuer}</div>
                    <div className="text-xs text-slate-300">{cert.score}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Education Timeline */}
          <div className="glass-card p-8 rounded-3xl border border-slate-800/80">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Academic Timeline
                </h3>
                <div className="text-xs font-mono text-slate-400">
                  Education & Qualifications
                </div>
              </div>
            </div>

            {/* Vertical Line Timeline */}
            <div className="relative border-l-2 border-slate-800 ml-4 space-y-8 pl-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all" />
                  
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-400">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-amber-300 font-mono">
                      {edu.score}
                    </p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
