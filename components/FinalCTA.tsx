
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#FAFAFA] relative overflow-hidden">
      {/* Subtle background graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DAAEBB]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#09090B]">
          Stop guessing. <br/>Start building.
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Order a feasibility report today and get the technical certainty you need to exchange with confidence. No subscription, no strings, just professional architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="flex items-center gap-2 bg-[#09090B] text-white text-lg font-medium px-10 py-5 rounded-sm hover:bg-black transition-all shadow-xl shadow-black/10 group">
            Start Your First Feasibility
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="text-sm text-gray-400 font-medium">
             5 day turnaround guaranteed.
          </div>
        </div>

        <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale">
            <span className="text-xs font-bold tracking-widest uppercase">Trusted by 50+ Developers</span>
            <span className="text-xs font-bold tracking-widest uppercase">RIBA Chartered Practice</span>
            <span className="text-xs font-bold tracking-widest uppercase">PI Insured up to £5m</span>
        </div>
      </div>
    </section>
  );
};
