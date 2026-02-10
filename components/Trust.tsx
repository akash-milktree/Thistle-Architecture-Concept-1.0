
import React from 'react';

export const Trust: React.FC = () => {
  const testimonials = [
    {
      quote: "Before Thistle, our feasibility process was a mess of messy sketches and guesswork. Now it's a standardised part of our due diligence.",
      author: "Simon G.",
      title: "Director, Apex Developments"
    },
    {
      quote: "The 5-day turnaround is a game changer for auctions. It's the only way to get architect-backed numbers in that timeframe.",
      author: "James T.",
      title: "Acquisition Manager, Urban Asset Group"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(s => <span key={s} className="w-1.5 h-1.5 rounded-full bg-[#8F9952]"></span>)}
              </div>
              <p className="text-xl font-medium text-[#09090B] leading-relaxed">"{t.quote}"</p>
              <div>
                <div className="font-bold text-sm text-[#09090B]">{t.author}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
