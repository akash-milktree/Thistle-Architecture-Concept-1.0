
import React from 'react';

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Marcus Thistle",
      role: "Founder & Architect",
      trait: "Ask me about rooftop extensions.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Elena Chen",
      role: "Lead Platform Engineer",
      trait: "Obsessed with geospatial data.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "David Ross",
      role: "Head of Planning",
      trait: "Ex-local authority officer.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">A technical team built for scale.</h2>
          <p className="text-gray-600 italic leading-relaxed">
            "We believe the first 5% of an architectural project defines 95% of its commercial success. We built Thistle to own that 5%."
          </p>
        </div>
        <button className="text-sm font-bold text-[#09090B] border border-gray-200 px-6 py-3 rounded-sm hover:bg-white transition-all">
          Join the team
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative aspect-square bg-gray-100 rounded-sm mb-4 overflow-hidden">
               <img 
                 src={member.img} 
                 alt={member.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-[#09090B]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 text-center">
                  <p className="text-[#DAAEBB] font-medium text-sm leading-relaxed">{member.trait}</p>
               </div>
            </div>
            <h3 className="font-bold text-[#09090B]">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
