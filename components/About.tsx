import React from 'react';
import { Users, Terminal, Cpu, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background decoration - Glow behind the window */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Game Window Container */}
        <div className="bg-[#0f172a] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden font-sans relative group hover:border-brand-primary/40 transition-all duration-500 transform hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]">
          
          {/* Window Header / Title Bar */}
          <div className="bg-slate-800/80 backdrop-blur-sm px-5 py-4 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Window Controls */}
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 border border-white/5 hover:bg-red-500 transition-colors"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 border border-white/5 hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 border border-white/5 hover:bg-green-500 transition-colors"></div>
              </div>
              
              {/* Filename / Title */}
              <div className="flex items-center gap-2 text-slate-300 text-sm font-mono ml-2 px-3 py-1 bg-black/20 rounded-md border border-white/5">
                <Terminal size={14} className="text-brand-accent" />
                <span className="tracking-wide">about_us.mission</span>
              </div>
            </div>
            
            {/* Right side badge */}
            <div className="hidden sm:flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>Verified Source</span>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-8 md:p-14 relative bg-[#0f172a]">
             {/* Subtle Grid line overlay */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             
             <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                
                {/* Left Side: Avatar/Icon */}
                <div className="hidden md:flex flex-col items-center w-24 shrink-0 pt-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl border border-brand-primary/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(99,102,241,0.15)] animate-pulse-slow">
                        <Users className="w-10 h-10 text-brand-primary" />
                    </div>
                </div>

                {/* Right Side: Main Text */}
                <div className="flex-1">
                    <div className="inline-block mb-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            ჩვენს შესახებ
                        </h2>
                        <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary to-transparent rounded-full opacity-70"></div>
                    </div>
                    
                    <div className="space-y-8">
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                          TryCareer-ს ქმნის პატარა გუნდი, რომლის მიზანია მოზარდებს მისცეს შესაძლებლობა, <span className="text-brand-primary font-medium">უსაფრთხოდ</span> და <span className="text-brand-primary font-medium">მარტივად</span> გამოცადონ სხვადასხვა პროფესია გადაწყვეტილების მიღებამდე.
                        </p>
                        
                        <div className="bg-brand-surface/50 border-l-4 border-brand-accent p-6 rounded-r-xl">
                           <p className="text-lg md:text-xl text-gray-400 italic">
                             „სცენარები იქმნება ისტორიის, ტექნიკისა და ფსიქოლოგიის სპეციალისტებთან თანამშრომლობით, რათა გამოცდილება იყოს მაქსიმალურად რეალური.“
                           </p>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Window Footer (Status Bar) */}
          <div className="bg-[#162032] border-t border-slate-700/80 px-5 py-3 flex justify-between items-center text-[10px] md:text-xs font-mono text-slate-400">
             <div className="flex gap-6">
                <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> SYSTEM_READY</span>
                <span className="hidden sm:inline">VERSION 1.0.4</span>
             </div>
             <div className="flex items-center gap-2 text-brand-primary/80">
                <Cpu size={14} />
                <span>ACTIVE_PROCESS</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;