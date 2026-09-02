import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Trophy, FileText, Sparkles, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Achievement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-indigo-950/50 hover:border-indigo-500/60 transition-all cursor-default">
          <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>Winner of NOSTRADAMUS-2K26 (1st Place) & GCEM HACKS 4.0 Finalist</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm{' '}
          <span className="text-gradient drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
            NISARGA H
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
          B.E. Computer Science & Design Undergraduate &bull; AI/ML Specialist & Full-Stack Web Architect
        </p>

        {/* Brief Tagline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 mb-10">
          Architecting high-performance AI systems, vector search pipelines, and responsive web platforms. Published researcher in IRJMETS with a CGPA of 8.7/10.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 rounded-xl hover:from-indigo-500 hover:to-cyan-400 transition-all shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/50 hover:-translate-y-1 active:translate-y-0"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="file:///C:/Users/Dell/Desktop/.Nisarga_H_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:border-slate-500 hover:text-white transition-all backdrop-blur-md hover:-translate-y-1"
          >
            <FileText className="w-5 h-5 text-indigo-400" />
            <span>Download Resume PDF</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-5 rounded-2xl text-center group border border-slate-800/80"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-indigo-400 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-5 mt-10">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all shadow-md"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all shadow-md"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>

      </div>
    </section>
  );
};
