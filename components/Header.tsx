
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#09090B] flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-xl leading-none">T</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#09090B]">
            Thistle<span className="font-light">Architecture</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#09090B] transition-colors">How it works</a>
          <a href="#" className="hover:text-[#09090B] transition-colors">Sample Report</a>
          <a href="#" className="hover:text-[#09090B] transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-[#09090B] px-4 py-2">
            Log in
          </button>
          <button className="bg-[#09090B] text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-gray-800 transition-all shadow-sm">
            Start Feasibility
          </button>
        </div>
      </div>
    </header>
  );
};
