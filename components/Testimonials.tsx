import React, { useState } from 'react';
import { Star, Quote, TrendingUp, CheckCircle2, Clock, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Lucas Almeida",
    role: "Cirurgião Plástico",
    image: "https://i.pravatar.cc/150?img=11",
    content: "Minha agenda de procedimentos dobrou em 30 dias. O site transmite exatamente a seriedade que eu precisava. A entrega em 24h/48h foi surreal, nunca vi nada igual no mercado.",
    result: "R$ 45k+ em novos agendamentos"
  },
  {
    name: "Ana Clara",
    role: "Arquiteta",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Eu perdia muito tempo explicando meu trabalho no WhatsApp. Agora o site faz esse filtro e os clientes já chegam pedindo orçamento prontos para fechar. O design ficou impecável.",
    result: "Otimização de 4h/dia"
  },
  {
    name: "Roberto Tavares",
    role: "Advogado Tributarista",
    image: "https://i.pravatar.cc/150?img=3",
    content: "Já tive sites de agências caras que não convertiam nada. A MyPages entregou algo simples, direto e que realmente traz leads qualificados. O retorno sobre o investimento foi imediato.",
    result: "ROI de 10x no primeiro mês"
  },
  {
    name: "Juliana Mendes",
    role: "Psicóloga",
    image: "https://i.pravatar.cc/150?img=9",
    content: "Amei a facilidade. Não precisei me preocupar com nada técnico. Em um dia estava tudo pronto e lindo. Meus pacientes elogiam muito a facilidade de agendar pelo site.",
    result: "Agenda lotada"
  }
];

export const Testimonials: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: AUTHORITY & STATS */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 flex flex-col gap-8">
                
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-wider mb-6 border border-amber-100">
                        <Star className="w-4 h-4 fill-amber-600" />
                        Prova Social
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        Resultados que <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">falam por si.</span>
                    </h2>
                    
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">
                        Não acredite apenas na nossa palavra. Veja o impacto real na vida de quem já profissionalizou sua presença digital conosco.
                    </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden ring-1 ring-slate-900/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none"></div>
                    
                    <div className="grid gap-8 relative z-10">
                        <div className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                                <Trophy className="w-7 h-7 text-amber-400" />
                            </div>
                            <div>
                                <p className="text-4xl font-black text-white tracking-tight">+500</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1">Projetos Entregues</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-colors">
                                <CheckCircle2 className="w-7 h-7 text-green-400" />
                            </div>
                            <div>
                                <p className="text-4xl font-black text-white tracking-tight">99%</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1">Taxa de Aprovação</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                                <Clock className="w-7 h-7 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-4xl font-black text-white tracking-tight">24h/48h</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1">Prazo Médio de Entrega</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: EXPANDABLE TESTIMONIALS */}
            <div className="lg:col-span-7 flex flex-col gap-4">
                {testimonials.map((t, i) => (
                    <div 
                      key={i} 
                      className={`
                        bg-white rounded-3xl border transition-all duration-500 overflow-hidden
                        ${openIndex === i ? 'border-amber-200 shadow-xl' : 'border-slate-100 shadow-sm hover:border-slate-200'}
                      `}
                    >
                        {/* Accordion Header */}
                        <button 
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-brand-500 to-purple-500 shrink-0">
                                    <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
                                </div>
                                <div>
                                    <h4 className={`font-black tracking-tight text-lg transition-colors ${openIndex === i ? 'text-amber-600' : 'text-slate-900'}`}>
                                      {t.name}
                                    </h4>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                            <div className={`
                              w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                              ${openIndex === i ? 'bg-amber-500 text-white rotate-180' : 'bg-slate-50 text-slate-400'}
                            `}>
                                <ChevronDown size={20} />
                            </div>
                        </button>

                        {/* Accordion Content */}
                        <div 
                          className={`
                            transition-all duration-500 ease-in-out px-6
                            ${openIndex === i ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0 pointer-events-none'}
                          `}
                        >
                            <div className="relative pt-4 border-t border-slate-50">
                                <Quote className="absolute -top-1 -right-2 w-12 h-12 text-amber-500/5 fill-amber-500/5" />
                                
                                <p className="text-slate-600 leading-relaxed mb-6 font-medium italic text-lg">
                                  "{t.content}"
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2">
                                         <TrendingUp className="w-4 h-4 text-emerald-600" />
                                         <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">{t.result}</span>
                                    </div>
                                    <div className="flex gap-1 text-amber-400">
                                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
};