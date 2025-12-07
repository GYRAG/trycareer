import React from 'react';
import { Clock, TrendingUp, MessageCircle, Trophy } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-brand-surface border border-white/5 p-8 rounded-2xl hover:border-brand-primary/30 hover:bg-white/[0.02] transition-all duration-300 group">
    <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-lg">
      <div className="text-brand-primary group-hover:text-brand-accent transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "მიკრო „სამუშაო დღეები“",
      description: "მოკლე, რეალისტური სცენარები თითოეულ პროფესიაზე, რომელიც არ მოითხოვს დიდ დროს."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "უნარების პროფილი",
      description: "სისტემა აფასებს შენი გადაწყვეტილებების მიხედვით რა უნარები და მიდრეკილებები გამოკვეთილია შენში."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "რეალური რჩევები",
      description: "მოკლე, გულწრფელი კომენტარები გამოცდილი პროფესიონალებისგან კონკრეტულ სფეროებში."
    },
    {
      icon: <Trophy size={24} />,
      title: "გეიმიფიკაცია",
      description: "დააგროვე XP, მიიღე ბეჯები და აამაღლე პროფესიის დონე თამაშის პროცესში."
    }
  ];

  return (
    <section id="features" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">რატომ TryCareer?</h2>
          <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;