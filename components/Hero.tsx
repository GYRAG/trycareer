import React from 'react';
import { Play, ArrowRight, CheckCircle2, MessageSquare, Briefcase } from 'lucide-react';
import HeroGameMap from './HeroGameMap';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-surface via-brand-dark to-brand-dark -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              ახალი თაობის კარიერული ორიენტაცია
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              გამოსცადე სხვადასხვა <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">კარიერა</span> სანამ არჩევანს გააკეთებ
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              TryCareer არის 2D ვებ-თამაში, სადაც მოზარდები რამდენიმე წუთში გადიან სხვადასხვა პროფესიის რეალისტურ, გეიმიფიცირებულ სცენარებს.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent hover:from-blue-600 hover:to-brand-primary text-white rounded-xl font-bold shadow-lg shadow-brand-primary/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group">
                <Play className="w-5 h-5 fill-current" />
                სცადე
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 transition-all flex items-center justify-center gap-2">
                გაიგე მეტი
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Mockup - The "Game" */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative perspective-1000 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            {/* Window Container */}
            <div className="relative bg-brand-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">

              {/* Fake UI Header */}
              <div className="h-12 bg-[#162032] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase">Level 1: Junior Dev</span>
                  </div>
                </div>
              </div>

              {/* Game Viewport */}
              <HeroGameMap />
            </div>

            {/* Floating elements behind */}
            <div className="absolute -right-8 top-1/2 p-3 bg-[#1e293b] rounded-lg border border-white/10 shadow-xl hidden lg:block animate-float">
              <Briefcase className="w-6 h-6 text-brand-accent" />
            </div>
            <div className="absolute -left-6 bottom-1/3 p-3 bg-[#1e293b] rounded-lg border border-white/10 shadow-xl hidden lg:block animate-float-delayed">
              <MessageSquare className="w-6 h-6 text-blue-400" />
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 5s ease-in-out infinite 1s; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};

export default Hero;