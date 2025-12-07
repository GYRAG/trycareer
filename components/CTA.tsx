import React from 'react';
import { Play } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-accent/20 to-brand-primary/20 blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Glossy effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">მზად ხარ გამოსცადო?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              არ დაელოდო უნივერსიტეტს რომ გაიგო მოგწონს თუ არა პროფესია. ითამაშე ახლავე.
            </p>
            
            <button className="inline-flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-1">
              <Play className="w-5 h-5 fill-current" />
              იწყე ცდა
            </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;