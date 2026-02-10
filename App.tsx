
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlatformIntro } from './components/PlatformIntro';
import { Process } from './components/Process';
import { ValueProp } from './components/ValueProp';
import { CaseStudyTeaser } from './components/CaseStudyTeaser';
import { TeamSection } from './components/TeamSection';
import { Trust } from './components/Trust';
import { FinalCTA } from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#DAAEBB] selection:text-[#09090B] bg-[#FAFAFA]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PlatformIntro />
        <Process />
        <ValueProp />
        <CaseStudyTeaser />
        <TeamSection />
        <Trust />
        <FinalCTA />
      </main>
      <footer className="py-12 px-6 md:px-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#09090B] flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-sm leading-none">T</span>
          </div>
          <span className="font-bold text-[#09090B]">Thistle Architecture Ltd.</span>
        </div>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#09090B] transition-colors">How it works</a>
          <a href="#" className="hover:text-[#09090B] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#09090B] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#09090B] transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
