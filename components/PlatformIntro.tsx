
import React from 'react';

export const PlatformIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] mb-6">
          The software-first architecture partner for high-stakes acquisitions.
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We’ve stripped away the overhead of traditional practice to focus on what matters most: <span className="text-[#09090B] font-medium">Certainty.</span> Thistle provides developers with a structured feasibility product for existing buildings, combining automated data analysis with expert architect oversight.
        </p>
      </div>
    </section>
  );
};
