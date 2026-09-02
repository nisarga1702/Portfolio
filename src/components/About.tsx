import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Brain, Layout, Cpu, ShieldCheck, Award, BookOpen, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: "AI / ML & Computer Vision",
      description: "Architecting machine learning classification pipelines, semantic vector search using pgvector, multimodal Gemini/Vertex AI integrations, and OpenCV signal digitization.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Layout,
      title: "Full-Stack Web Architecture",
      description: "Building ultra-fast responsive web applications with Next.js, React, TypeScript, Django, PostgreSQL, and Supabase with real-time backend updates.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "IoT & Hardware Engineering",
      description: "Integrating ESP32 microcontrollers, RFID/NFC modules, GPS tracking, and accelerometer sensors for automated transport and smart city systems.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity & Web Defense",
      description: "Programming real-time browser monitoring extensions, Chrome WebRequest domain filtering, pattern-matching security rules, and instant phishing blocking.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            // ABOUT ME
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Architecting Scalable Intelligence & Clean Code
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Summary Card */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl mb-16 border border-slate-800/80 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-all" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-indigo-300 font-mono">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>CGPA: 8.7 / 10 &bull; Computer Science & Design</span>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                {personalInfo.summary}
              </p>
            </div>
            
            <div className="flex flex-col gap-3 min-w-[240px] w-full lg:w-auto">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Hackathons</div>
                  <div className="text-sm font-bold text-white">Winner & Top 20 Finalist</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Research Paper</div>
                  <div className="text-sm font-bold text-white">IRJMETS Vol. 07 (DOI)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Technical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-slate-800/80 relative overflow-hidden group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-0.5 mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
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
