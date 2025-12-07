import React, { useState, useEffect } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <Gamepad2 className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Try<span className="text-brand-primary">Career</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">შესაძლებლობები</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">როგორ მუშაობს</a>
            <a href="#careers" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">კარიერები</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">ჩვენს შესახებ</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/10">
              შესვლა
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">შესაძლებლობები</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">როგორ მუშაობს</a>
            <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">კარიერები</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">ჩვენს შესახებ</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;