
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const CaseStudyTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090B] text-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <span className="text-[#DAAEBB] font-mono text-sm tracking-widest uppercase">Featured Case Study</span>
              <h2 className="text-4xl font-bold tracking-tight">The Old Print Works: Bristol</h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              An unloved 1960s office block with a complex central core. Thistle's automated scan identified a 140m² discrepancy in GIA, and our architect review proposed a relocation of the lift shaft that unlocked 4 additional C3 units.
            </p>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/10">
              <div>
                <div className="text-3xl font-bold">+£1.2m</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Additional GDV Identified</div>
              </div>
              <div>
                <div className="text-3xl font-bold">120 Hours</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Turnaround Time</div>
              </div>
            </div>

            <button className="flex items-center gap-2 group text-sm font-bold hover:text-[#DAAEBB] transition-colors">
              Read the full report breakdown
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] bg-gray-900 rounded-sm border border-white/10 p-4 relative overflow-hidden">
              {/* Abstract Architectural Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale"></div>
              <div className="relative h-full w-full border border-white/20 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                   <div className="p-2 bg-white/10 backdrop-blur-md rounded text-[10px] font-mono">SITE_PLAN_V2.PDF</div>
                   <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                     <span className="text-[10px]">NW</span>
                   </div>
                </div>
                <div className="space-y-2">
                   <div className="h-1 w-full bg-[#8F9952]"></div>
                   <div className="h-1 w-2/3 bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
