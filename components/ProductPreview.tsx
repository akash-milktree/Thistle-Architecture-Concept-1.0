
import React from 'react';

export const ProductPreview: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-2xl shadow-black/5 border border-gray-200 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
      {/* Browser Bar */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/20"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/20"></div>
        </div>
        <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
          REPORT ID: TA-8821-X
        </div>
      </div>

      {/* Product Body */}
      <div className="p-8 space-y-8">
        {/* Header Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Potential GIA</div>
            <div className="text-2xl font-bold text-[#09090B]">2,450m²</div>
            <div className="text-[10px] text-[#8F9952] font-semibold mt-1">+14% uplift</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Max Units</div>
            <div className="text-2xl font-bold text-[#09090B]">18</div>
            <div className="text-[10px] text-gray-500 mt-1">C3 Residential</div>
          </div>
          <div className="p-4 bg-[#DAAEBB]/10 rounded-lg border border-[#DAAEBB]/20">
            <div className="text-[10px] text-[#09090B] uppercase font-bold tracking-tight mb-1">Risk Rating</div>
            <div className="text-2xl font-bold text-[#09090B]">Low</div>
            <div className="text-[10px] text-gray-500 mt-1">Category B</div>
          </div>
        </div>

        {/* Visual Diagram Placeholder */}
        <div className="relative aspect-video bg-[#09090B] rounded-lg overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FAFAFA 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Mock Architectural Site Plan Shape */}
            <div className="relative w-full h-full border border-white/20 flex items-center justify-center">
                <div className="w-3/4 h-2/3 border-2 border-[#DAAEBB] bg-[#DAAEBB]/5 relative">
                    <div className="absolute -top-4 -left-4 text-[10px] text-gray-500 font-mono">NORTH-WEST BOUNDARY</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1/2 h-1/2 border border-white/40 flex items-center justify-center">
                            <span className="text-[10px] text-white/60 rotate-45">EXISTING CORE</span>
                        </div>
                    </div>
                    {/* Dim lines */}
                    <div className="absolute top-0 -left-6 bottom-0 w-px bg-white/20 flex items-center">
                         <span className="text-[9px] text-white/40 -rotate-90 whitespace-nowrap">24.5m</span>
                    </div>
                </div>
                {/* Proposed Addition */}
                <div className="absolute bottom-1/4 right-1/4 w-24 h-32 bg-[#8F9952] border border-white/40 flex items-center justify-center shadow-xl">
                    <span className="text-[9px] font-bold text-white uppercase tracking-tighter">New Mass</span>
                </div>
            </div>
        </div>

        {/* Bottom Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
             <span className="text-sm font-semibold">Development Options</span>
             <span className="text-xs text-gray-400">Analysis updated 2h ago</span>
          </div>
          <div className="flex gap-3">
             <div className="h-2 w-1/3 bg-[#09090B] rounded-full"></div>
             <div className="h-2 w-1/4 bg-gray-200 rounded-full"></div>
             <div className="h-2 w-1/6 bg-gray-100 rounded-full"></div>
          </div>
          <div className="text-sm text-gray-600">
            Preliminary findings suggest a <span className="text-[#09090B] font-bold">significant opportunity</span> for a two-storey rooftop extension under permitted development rights.
          </div>
        </div>
      </div>
    </div>
  );
};
