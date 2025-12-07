import React from 'react';
import { MousePointer2, Gamepad, PieChart } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#0b1121] relative overflow-hidden">
        {/* Subtle decorative lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">როგორ მუშაობს</h2>
          <p className="text-gray-400">სამი მარტივი ნაბიჯი შენი მომავლისკენ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-brand-surface rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl relative group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm border-4 border-[#0b1121]">1</div>
                <MousePointer2 className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">აირჩიე კარიერა</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              აირჩიე პროფესია კატალოგიდან, რომელიც გაინტერესებს ან გინდა უბრალოდ მოსინჯო.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-brand-surface rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl relative group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm border-4 border-[#0b1121]">2</div>
                <Gamepad className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ითამაშე „სამუშაო დღე“</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              გაიარე ინტერაქტიული სიმულაცია 2–5 წუთში და გადაწყვიტე რეალური ამოცანები.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-brand-surface rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl relative group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm border-4 border-[#0b1121]">3</div>
                <PieChart className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">მიიღე შედეგი</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              ნახე დეტალური ანალიზი და გაიგე, რამდენად შეგეფერება ეს კონკრეტული საქმიანობა.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;