import React from 'react';
import { 
  Code2, PenTool, Home, Wrench, Stethoscope, 
  Scale, Megaphone, BarChart3, Gamepad2 
} from 'lucide-react';

const Careers: React.FC = () => {
  const careers = [
    { name: "პროგრამისტი", icon: <Code2 size={18} />, color: "border-blue-500/50 text-blue-400" },
    { name: "UX/UI დიზაინერი", icon: <PenTool size={18} />, color: "border-purple-500/50 text-purple-400" },
    { name: "არქიტექტორი", icon: <Home size={18} />, color: "border-orange-500/50 text-orange-400" },
    { name: "ინჟინერი", icon: <Wrench size={18} />, color: "border-gray-500/50 text-gray-400" },
    { name: "ექიმი", icon: <Stethoscope size={18} />, color: "border-green-500/50 text-green-400" },
    { name: "იურისტი", icon: <Scale size={18} />, color: "border-yellow-500/50 text-yellow-400" },
    { name: "მარკეტინგი", icon: <Megaphone size={18} />, color: "border-pink-500/50 text-pink-400" },
    { name: "ანალიტიკოსი", icon: <BarChart3 size={18} />, color: "border-cyan-500/50 text-cyan-400" },
    { name: "გეიმ-დეველოპერი", icon: <Gamepad2 size={18} />, color: "border-indigo-500/50 text-indigo-400" },
  ];

  return (
    <section id="careers" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">ხელმისაწვდომი სიმულაციები</h2>
                <p className="text-gray-400">დაიწყე ნებისმიერი მიმართულებით სრულიად უფასოდ.</p>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {careers.map((career, index) => (
            <div 
              key={index} 
              className={`
                group flex items-center justify-center gap-3 p-4 
                bg-brand-surface border rounded-xl 
                hover:bg-white/5 transition-all cursor-pointer 
                ${career.color} hover:border-opacity-100 border-opacity-30
              `}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {career.icon}
              </div>
              <span className="font-medium text-sm text-gray-200 group-hover:text-white">{career.name}</span>
            </div>
          ))}
          
          {/* "More coming soon" pill */}
          <div className="flex items-center justify-center p-4 border border-dashed border-white/10 rounded-xl text-gray-500 text-sm">
            + მეტი მალე დაემატება
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;