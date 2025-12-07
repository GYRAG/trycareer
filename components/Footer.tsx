import React from 'react';
import { Gamepad2, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1121] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-brand-primary w-5 h-5" />
            <span className="text-lg font-bold text-white tracking-tight">TryCareer</span>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} TryCareer. ყველა უფლება დაცულია.
          </div>

          <div className="flex gap-6">
             <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors">
                <Facebook size={20} />
             </a>
             <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors">
                <Instagram size={20} />
             </a>
             <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors">
                <Twitter size={20} />
             </a>
          </div>

        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600">
            hello@trycareer.ge
        </div>
      </div>
    </footer>
  );
};

export default Footer;