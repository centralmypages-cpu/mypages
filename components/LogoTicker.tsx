
import React from 'react';
import { Scale, Stethoscope, Briefcase, Building2, Dumbbell, ShieldCheck, PieChart, Landmark } from 'lucide-react';

export const LogoTicker: React.FC = () => {
  const logos = [
    { icon: Scale, name: "Silva Advocacia" },
    { icon: Stethoscope, name: "Clínica Vitalle" },
    { icon: Briefcase, name: "Nexus Consultoria" },
    { icon: Dumbbell, name: "Iron Fitness" },
    { icon: Building2, name: "Urban Arquitetura" },
    { icon: ShieldCheck, name: "Secure Corretora" },
    { icon: PieChart, name: "Alpha Invest" },
    { icon: Landmark, name: "Instituto Prime" },
  ];

  return (
    <section className="bg-[#050000] py-8 border-t border-white/5 relative z-20 overflow-hidden">
        
        {/* Background Gradient to blend with Pain Section above */}
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#050000] to-[#050000] pointer-events-none"></div>

        {/* Side Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050000] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050000] to-transparent z-10"></div>

        <div className="flex w-max animate-scroll relative z-0">
          {/* First Set */}
          <div className="flex gap-16 px-8 items-center flex-shrink-0">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-default group">
                <logo.icon className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-lg font-bold text-white whitespace-nowrap hidden md:block">{logo.name}</span>
              </div>
            ))}
          </div>
          {/* Duplicate Set for infinite scroll */}
          <div className="flex gap-16 px-8 items-center flex-shrink-0">
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-default group">
                <logo.icon className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-lg font-bold text-white whitespace-nowrap hidden md:block">{logo.name}</span>
              </div>
            ))}
          </div>
           {/* Triplicate Set for smoother infinite scroll on wider screens */}
           <div className="flex gap-16 px-8 items-center flex-shrink-0">
            {logos.map((logo, index) => (
              <div key={`trip-${index}`} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-default group">
                <logo.icon className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-lg font-bold text-white whitespace-nowrap hidden md:block">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};
