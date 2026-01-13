
import React from 'react';
import { ArrowRight, CheckCircle2, Package, Clock, MousePointerClick, ChevronRight, XCircle, Bot, Server } from 'lucide-react';

export const ProductStructure: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521993009478?text=Quero%20essa%20estrutura%20para%20o%20meu%20neg%C3%B3cio', '_blank');
  };

  return (
    <section id="structure" className="py-16 bg-slate-950 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 shadow-lg shadow-black/20 mb-6 ring-1 ring-white/10">
                <Package className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Metodologia Exclusiva</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                Mais que um site. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">Um Ecossistema de Vendas.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                A maioria das agências te entrega um "cartão de visitas digital". Nós entregamos uma estrutura validada de conversão, onde cada pixel tem um único objetivo!
            </p>
        </div>

        {/* PART 1: THE 24H JOURNEY */}
        <div className="mb-20 relative">
             <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-8">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Do Zero a Entrega</h3>
                    <p className="text-slate-500">Nossa timeline de execução recorde.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-bold text-green-400 uppercase tracking-wide">Prazo Total: 24H/48h</span>
                </div>
             </div>

             <div className="relative">
                 <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-800 z-0"></div>
                 <div className="md:hidden absolute left-8 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-slate-800 z-0"></div>

                 <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                     {/* Step 1 */}
                     <div className="bg-slate-900/50 backdrop-blur rounded-[2rem] p-8 border border-slate-800 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
                         <div className="absolute -top-4 left-6 md:left-1/2 md:-translate-x-1/2 bg-slate-800 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-700 z-20">PASSO 01</div>
                         <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-slate-700 text-slate-900 relative z-10 mx-auto group-hover:bg-brand-900/50 group-hover:border-brand-500/30 transition-all">
                             <MousePointerClick className="w-10 h-10 text-brand-500" />
                         </div>
                         <div className="text-center">
                            <h4 className="text-2xl font-bold text-white mb-3">Briefing Expresso</h4>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6 text-left">
                                Esqueça reuniões intermináveis. Você responde um Briefing inteligente e tem uma breve conversa no WhatsApp.
                            </p>
                            <div className="w-full h-px bg-slate-800 mb-4"></div>
                            <ul className="text-left space-y-2">
                                <li className="text-xs text-slate-500 flex items-start gap-2"><CheckCircle2 size={12} className="text-brand-500 shrink-0 mt-0.5"/> Entrega Organizada</li>
                                <li className="text-xs text-slate-500 flex items-start gap-2"><CheckCircle2 size={12} className="text-brand-500 shrink-0 mt-0.5"/> Rapidez com Qualidade</li>
                            </ul>
                         </div>
                         <div className="hidden md:flex absolute top-16 -right-8 w-10 h-10 bg-slate-950 rounded-full items-center justify-center border border-slate-800 shadow-sm z-20 text-slate-600">
                             <ChevronRight size={20} />
                         </div>
                     </div>

                     {/* Step 2 */}
                     <div className="bg-slate-900/50 backdrop-blur rounded-[2rem] p-8 border border-slate-800 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
                         <div className="absolute -top-4 left-6 md:left-1/2 md:-translate-x-1/2 bg-slate-800 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-700 z-20">PASSO 02</div>
                         <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-slate-700 text-slate-900 relative z-10 mx-auto group-hover:bg-amber-900/50 group-hover:border-amber-500/30 transition-all">
                             <Bot className="w-10 h-10 text-amber-500" />
                         </div>
                         <div className="text-center">
                            <h4 className="text-2xl font-bold text-white mb-3">Construção Inteligente</h4>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6 text-left">
                                Tecnologias avançadas em cada etapa, garantindo um site otimizado e veloz.
                            </p>
                            <div className="w-full h-px bg-slate-800 mb-4"></div>
                            <ul className="text-left space-y-2">
                                <li className="text-xs text-slate-500 flex items-start gap-2"><CheckCircle2 size={12} className="text-amber-500 shrink-0 mt-0.5"/> Código limpo (Google)</li>
                                <li className="text-xs text-slate-500 flex items-start gap-2"><CheckCircle2 size={12} className="text-amber-500 shrink-0 mt-0.5"/> Design estratégico</li>
                            </ul>
                         </div>
                         <div className="hidden md:flex absolute top-16 -right-8 w-10 h-10 bg-slate-950 rounded-full items-center justify-center border border-slate-800 shadow-sm z-20 text-slate-600">
                             <ChevronRight size={20} />
                         </div>
                     </div>

                     {/* Step 3 */}
                     <div className="bg-gradient-to-b from-blue-600 to-blue-900 rounded-[2rem] p-8 border border-blue-400 shadow-[0_0_60px_rgba(37,99,235,0.3)] relative group hover:-translate-y-2 transition-transform duration-300 ring-1 ring-white/20">
                         <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                         </div>
                         <div className="absolute -top-4 left-6 md:left-1/2 md:-translate-x-1/2 z-20">
                            <div className="bg-white text-blue-800 text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-blue-200 uppercase tracking-widest flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Lançamento
                            </div>
                         </div>
                         <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 shadow-lg border border-white/30 text-white relative z-10 mx-auto group-hover:scale-110 transition-transform">
                             <Server className="w-10 h-10 text-white drop-shadow-md" />
                         </div>
                         <div className="text-center relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-3">Seu Código, Sua Regra</h4>
                            <p className="text-sm text-blue-100 leading-relaxed mb-8 font-medium text-left">
                                A entrega é realizada via transferência direta, garantindo total propriedade. Fazemos a configuração completa.
                            </p>
                            <button 
                                onClick={openWhatsApp}
                                className="w-full py-4 bg-white hover:bg-slate-50 text-blue-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-xl"
                            >
                                Iniciar Agora <ArrowRight size={14} />
                            </button>
                         </div>
                     </div>
                 </div>
             </div>
        </div>

        {/* PART 2: THE COMPARISON */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold text-white mb-6">Por que escolher a MyPages.</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Unimos tecnologia avançada com a segurança de uma entrega profissional. Aqui, você não aluga um site, você recebe um ativo digital que é totalmente seu.
                </p>
            </div>

            <div className="lg:col-span-8">
                <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="grid grid-cols-3 bg-slate-950 p-0 border-b border-slate-800 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500">
                        <div className="col-span-1 p-3 md:p-5">Critério</div>
                        <div className="col-span-1 p-3 md:p-5 text-center text-red-500">Outras Plataformas</div>
                        <div className="col-span-1 p-3 md:p-5 text-center text-cyan-400 bg-brand-900/20 border-l border-brand-500/10">MyPages</div>
                    </div>
                    
                    <div className="grid grid-cols-3 border-b border-slate-800 items-center">
                        <div className="col-span-1 p-3 md:p-5 font-bold text-white text-xs md:text-sm">Propriedade</div>
                        <div className="col-span-1 p-3 md:p-5 text-center text-slate-400 text-[10px] md:text-sm">Aluguel</div>
                        <div className="col-span-1 p-3 md:p-5 text-center font-bold text-green-400 text-[10px] md:text-sm bg-brand-900/10 border-l border-brand-500/10 h-full flex items-center justify-center">E Tudo Seu!</div>
                    </div>

                    <div className="grid grid-cols-3 border-b border-slate-800 items-center">
                        <div className="col-span-1 p-3 md:p-5 font-bold text-white text-xs md:text-sm">Performance</div>
                        <div className="col-span-1 p-3 md:p-5 text-center text-slate-400 text-[10px] md:text-sm flex justify-center gap-1 items-center"><XCircle size={12} /> Lento</div>
                        <div className="col-span-1 p-3 md:p-5 text-center font-bold text-white text-[10px] md:text-sm bg-brand-900/10 border-l border-brand-500/10 h-full flex items-center justify-center gap-1 md:gap-2">
                             <CheckCircle2 size={12} className="text-brand-400"/> Otimizado
                        </div>
                    </div>

                    <div className="grid grid-cols-3 items-center">
                        <div className="col-span-1 p-3 md:p-5 font-bold text-white text-xs md:text-sm">Entrega</div>
                        <div className="col-span-1 p-3 md:p-5 text-center text-slate-400 text-[10px] md:text-sm">3 a 5 dias</div>
                        <div className="col-span-1 p-3 md:p-5 text-center font-bold text-white text-[10px] md:text-sm bg-brand-900/10 border-l border-brand-500/10 h-full flex items-center justify-center">24h / 48h</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
