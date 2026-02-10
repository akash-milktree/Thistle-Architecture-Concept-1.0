
import React from 'react';
import { ProductPreview } from './ProductPreview';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8F9952]/10 text-[#8F9952] rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8F9952] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8F9952]"></span>
            </span>
            Existing Buildings Only
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#09090B] leading-[1.1]">
            Know your numbers <br /> 
            <span className="text-gray-400">on existing assets.</span> 
            <span className="text-[#DAAEBB]"> Fast.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal">
            Data-backed feasibility reports for property developers. 
            Unlock the true potential of existing buildings with professional architectural analysis in 5 working days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 bg-[#09090B] text-[#FAFAFA] text-lg font-medium px-8 py-4 rounded-sm hover:bg-black transition-all group shadow-lg shadow-black/10">
              Start Feasibility Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center bg-white border border-gray-200 text-[#09090B] text-lg font-medium px-8 py-4 rounded-sm hover:border-gray-400 transition-all">
              View Sample Report
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#8F9952]" />
              5 Working Day Delivery
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#8F9952]" />
              Developer-Focused
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#8F9952]" />
              Architect Verified
            </div>
          </div>
        </div>

        {/* Right Column: Product Preview */}
        <div className="relative">
           {/* Decorative background element */}
           <div className="absolute -inset-4 bg-gradient-to-tr from-[#DAAEBB]/20 to-transparent blur-3xl rounded-full -z-10 opacity-50"></div>
           <ProductPreview />
        </div>
      </div>
    </section>
  );
};
