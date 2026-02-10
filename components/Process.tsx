
import React from 'react';
import { Upload, Database, Search, FileText } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "1. Submit property",
      description: "Drop a site address or Land Registry title. No site visit required for initial feasibility."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "2. Data scan",
      description: "Our platform aggregates planning history, flood risks, and site constraints automatically."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "3. Architect review",
      description: "A RIBA-chartered architect verifies the data and tests massing options manually."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "4. Report delivery",
      description: "Receive a professional, data-backed feasibility report in exactly 5 working days."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How it works</h2>
            <p className="text-gray-600">From site identification to a boardroom-ready report in 120 hours. No fluff, just the data you need to make a bid.</p>
          </div>
          <button className="text-sm font-bold text-[#09090B] border-b-2 border-[#09090B] pb-1 hover:text-[#DAAEBB] hover:border-[#DAAEBB] transition-all">
            Learn about our methodology
          </button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm text-[#09090B]">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
