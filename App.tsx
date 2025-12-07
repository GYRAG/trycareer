import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Careers from './components/Careers';
import CTA from './components/CTA';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark font-sans selection:bg-brand-primary selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Careers />
        <CTA />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;