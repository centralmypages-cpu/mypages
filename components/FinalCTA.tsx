
import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521993009478?text=Estou%20pronto%20para%20o%20pr%C3%B3ximo%20n%C3%ADvel', '_blank');
  };

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
          Você está a um clique de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">
             transformar sua autoridade.
          </span>
        </h2>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
           Não deixe para amanhã o faturamento que você pode ter hoje. <br className="hidden md:block"/>
           Sua concorrência não está esperando. Por que você estaria?
        </p>
        
        <div className="flex flex-col items-center gap-6">
            <button 
                onClick={openWhatsApp}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] hover:-translate-y-1 overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative flex items-center gap-3 text-lg">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    Solicitar Orçamento no WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    Orçamento sem compromisso
                </span>
                <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-500" />
                    Garantia de Satisfação
                </span>
            </div>
        </div>

      </div>
    </section>
  );
};
