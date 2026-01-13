
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Briefing via WhatsApp",
        description: "Sem reuniões chatas. Você responde 5 perguntas rápidas pelo celular e nos envia suas fotos."
    },
    {
        number: "02",
        title: "Construção Elite",
        description: "Em 24h/48h, nossos designers e copywriters criam uma estrutura de alta conversão para sua marca."
    },
    {
        number: "03",
        title: "Lançamento",
        description: "Enviamos o link, você aprova e conectamos seu domínio. Seu negócio pronto para vender."
    }
];

export const Steps: React.FC = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/55999999999?text=Quero%20iniciar%20meu%20projeto%20agora!', '_blank');
    };

  return (
    <section id="process" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
                    Do zero ao ar em <br/>
                    <span className="text-brand-600">24h/48h.</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Eliminamos a burocracia das agências tradicionais. Nosso processo é cirúrgico para você não perder tempo.
                </p>
                
                <div className="hidden lg:block">
                     <button 
                        onClick={openWhatsApp}
                        className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full text-base font-bold transition-all flex items-center gap-2 shadow-lg"
                    >
                        Iniciar Projeto
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="relative pl-2 md:pl-0">
                {/* Timeline Line - Adjusted for mobile */}
                <div className="absolute left-[20px] md:left-[24px] top-4 bottom-8 w-px bg-slate-200"></div>
                
                <div className="space-y-10 md:space-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex items-start group">
                            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center relative z-10 shadow-sm group-hover:border-brand-600 group-hover:scale-110 transition-all duration-300">
                                <span className="text-xs md:text-sm font-bold text-slate-400 group-hover:text-brand-600 font-mono">{step.number}</span>
                            </div>
                            <div className="ml-6 md:ml-8 pt-1">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{step.title}</h3>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:hidden mt-0">
                 <button 
                    onClick={openWhatsApp}
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                    Iniciar Agora
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};
