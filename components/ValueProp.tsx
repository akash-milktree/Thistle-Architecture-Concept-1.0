
import React from 'react';
import { Zap, Target, ShieldCheck, Clock } from 'lucide-react';

export const ValueProp: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Extreme Speed",
      text: "Traditional practices take 3 weeks. We take 5 days. Never miss an auction or an off-market opportunity again."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Commercial Accuracy",
      text: "We focus on GDV-driving metrics. Our reports tell you what's actually buildable, not just what looks good."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fixed Pricing",
      text: "Stop paying hourly rates for early-stage thinking. Every feasibility report has a flat, predictable fee."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Reduced Risk",
      text: "Know the deal-breakers before you spend on legal fees. We find the 'no' so you can find the 'yes'."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Built for developers, <br/>not homeowners.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            We understand the pressure of the acquisition window. Thistle is designed to be your technical scouting team, operating at the speed of the market.
          </p>
          <div className="p-6 bg-[#8F9952]/5 border border-[#8F9952]/20 rounded-sm">
             <p className="text-[#8F9952] font-medium text-sm">
               "Thistle gives us the technical confidence to move on sites that others are still debating in internal meetings."
             </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-white border border-gray-100 rounded-sm hover:border-gray-200 transition-colors shadow-sm">
              <div className="text-[#09090B] mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
