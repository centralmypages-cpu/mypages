
import React from 'react';
import { Star, Quote, TrendingUp, CheckCircle2, Clock, Users, Trophy } from 'lucide-react';

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
  return (
    <section className="py-16 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: AUTHORITY & STATS (Fixed/Sticky) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 flex flex-col gap-8">
                
                {/* Text Block */}
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

                {/* Stats Block - Aligned below text */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden ring-1 ring-slate-900/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none"></div>
                    
                    <div className="grid gap-8 relative z-10">
                        {/* Stat 1 */}
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

                        {/* Stat 2 */}
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

                        {/* Stat 3 */}
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

            {/* RIGHT COLUMN: TESTIMONIALS FEED */}
            <div className="lg:col-span-7 flex flex-col gap-4 pt-0">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 relative group hover:-translate-y-1">
                        <Quote className="absolute top-6 right-6 w-5 h-5 text-slate-100 fill-slate-100 group-hover:text-amber-50 group-hover:fill-amber-50 transition-colors" />
                        
                        {/* Header User */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-brand-500 to-purple-500 shrink-0">
                                <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                                <p className="text-xs text-slate-500">{t.role}</p>
                            </div>
                            <div className="ml-auto flex gap-0.5 text-amber-400">
                                {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                            </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-4 relative z-10 text-sm">
                            "{t.content}"
                        </p>

                        {/* Result Tag */}
                        <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-lg px-3 py-1.5">
                             <TrendingUp className="w-3 h-3 text-green-600" />
                             <span className="text-[10px] font-bold text-green-800 uppercase tracking-wide">{t.result}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
};
