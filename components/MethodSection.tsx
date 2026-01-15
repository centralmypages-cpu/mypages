import React from 'react';
import { ClipboardCheck, Cpu, Crown, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const MethodSection: React.FC = () => {
  return (
    <section id="method" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Centered & Bold */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Fluxo de Trabalho</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
            Mais que um site. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Uma estrutura que vende.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            A maioria das agências entrega apenas um site institucional. <br className="hidden md:block" />
            <span className="text-slate-900 font-bold">Nós criamos ferramentas de vendas</span> pensadas para gerar confiança e conduzir o visitante até o contato final.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-slate-100 to-transparent z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 relative">
            
            {/* Step 1 */}
            <div className="relative z-10 group">
              <div className="flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-6 right-8 text-7xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none select-none">01</div>
                
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner border border-blue-100/50">
                  <ClipboardCheck className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] block">Início Imediato</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] block">BRIEFING</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Briefing Expresso</h3>
                </div>
                
                <ul className="space-y-4 mt-auto">
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    Design estratégico mobile-first
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    Revisão focada em conversão
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    Estrutura pensada para conversão
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    Copy profissional aplicada ao seu mercado
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    Revisão final focada em resultados
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 group">
              <div className="flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-violet-500/20 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-6 right-8 text-7xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none select-none">02</div>
                
                <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-inner border border-violet-100/50">
                  <Cpu className="w-8 h-8 text-violet-600 group-hover:text-white transition-colors" />
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.2em] block">Tecnologia Elite</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] block">CRIAÇÃO</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Construção Inteligente</h3>
                </div>
                
                <ul className="space-y-4 mt-auto">
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                    </div>
                    Otimização de performance
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                    </div>
                    Qualidade técnica validada
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                    </div>
                    Pré-Entrega Organizada
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                    </div>
                    Rapidez com Qualidade Técnica
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 - The Ownership (Highlight) */}
            <div className="relative z-10 group">
              <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-6 right-8 text-7xl font-black text-white opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none select-none">03</div>
                
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(251,191,36,0.2)] group-hover:scale-110 transition-transform">
                  <Crown className="w-8 h-8 text-slate-900" />
                </div>
                
                <div className="mb-6">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] mb-2 block">Liberdade Total</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">Na MyPages, o site é seu</h3>
                </div>
                
                <div className="space-y-6 mt-auto">
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Nada de mensalidades escondidas ou dependência de plataformas proprietárias. 
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                    <p className="text-white font-bold text-sm leading-relaxed">
                      Você recebe um site profissional, escalável e pronto para evoluir junto com o seu negócio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
