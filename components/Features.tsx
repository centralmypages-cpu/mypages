import React from 'react';
import { Sparkles, Zap, ArrowRight, MousePointer2, Cpu, Code2, Settings, Server, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#050a15] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#050a15]"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 animate-fade-in hover:scale-105 transition-transform cursor-default">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">O Poder da Automação</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
                Sua Melhor Versão Online <br />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Nunca Dorme.
                </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto font-black italic">
                A decisão acontece em segundos
            </p>

            {/* Bloco de Dados: Matemática da Conversão */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:border-blue-400 transition-colors text-left">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <p className="text-2xl md:text-3xl font-black text-white mb-1">3,5 segundos</p>
                    <p className="text-sm text-slate-400 font-medium">Se o site demora ou confunde, o visitante sai, e a oportunidade se perde.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:border-emerald-400 transition-colors text-left">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    <p className="text-2xl md:text-3xl font-black text-emerald-400 mb-1">Credibilidade imediata</p>
                    <p className="text-sm text-slate-400 font-medium">Site profissional gera confiança instantânea.</p>
                </div>
            </div>

            {/* O Fator Velocidade */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl max-w-2xl mx-auto mb-12 backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/20">
                    <Zap className="w-6 h-6 fill-white" />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-white uppercase tracking-wide">O fator velocidade</p>
                    <p className="text-xs text-slate-400">Em até 24h a 48h, seu site está publicado, funcional e pronto para receber visitas — sem burocracia e sem tempo perdido</p>
                </div>
            </div>

            {/* SCROLLING SITE ANIMATION BLOCK */}
            <div className="relative max-w-3xl mx-auto group mb-20">
                {/* Browser Mockup Header */}
                <div className="bg-slate-800 rounded-t-2xl border-t border-x border-white/10 h-8 flex items-center px-4 gap-1.5 relative z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                    <div className="flex-1 bg-white/5 rounded-md h-4 mx-4 flex items-center px-2">
                        <div className="w-1/3 h-1.5 bg-white/10 rounded-full"></div>
                    </div>
                </div>

                {/* Scrolling Content Viewport */}
                <div className="bg-white rounded-b-2xl border-x border-b border-white/10 h-[400px] overflow-hidden relative shadow-2xl shadow-blue-900/40">
                    
                    {/* The Scrolling "Page" */}
                    <div className="absolute top-0 left-0 w-full flex flex-col animate-scroll-vertical-fast">
                        
                        {/* Section 1: Hero */}
                        <div className="h-[300px] w-full bg-slate-50 p-12 flex flex-col justify-center text-left border-b border-slate-100">
                             <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6"></div>
                             <div className="w-3/4 h-8 bg-slate-900 rounded-md mb-4"></div>
                             <div className="w-1/2 h-4 bg-slate-300 rounded-md mb-8"></div>
                             <div className="w-40 h-10 bg-blue-600 rounded-full"></div>
                        </div>

                        {/* Section 2: Features/Grid */}
                        <div className="h-[300px] w-full bg-white p-12 border-b border-slate-100">
                             <div className="w-full h-4 bg-slate-100 rounded-full mb-12"></div>
                             <div className="grid grid-cols-3 gap-6">
                                 {[1,2,3].map(i => (
                                     <div key={i} className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-4">
                                         <div className="w-8 h-8 bg-slate-200 rounded mb-4"></div>
                                         <div className="w-full h-2 bg-slate-200 rounded"></div>
                                     </div>
                                 ))}
                             </div>
                        </div>

                        {/* Section 3: Value Proposition */}
                        <div className="h-[300px] w-full bg-slate-900 p-12 flex flex-col justify-center items-center text-center">
                             <div className="w-1/2 h-6 bg-white/20 rounded-full mb-6"></div>
                             <div className="w-3/4 h-12 bg-white rounded-md mb-8"></div>
                             <div className="w-32 h-10 bg-white/10 rounded-full border border-white/20"></div>
                        </div>

                         {/* Section 4: Testimonials */}
                         <div className="h-[300px] w-full bg-white p-12 border-b border-slate-100 flex flex-col items-center">
                             <div className="w-40 h-4 bg-slate-100 rounded-full mb-12"></div>
                             <div className="w-full flex gap-4">
                                 <div className="flex-1 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                     <div className="w-10 h-10 bg-slate-200 rounded-full mb-4"></div>
                                     <div className="w-full h-2 bg-slate-200 rounded mb-2"></div>
                                     <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
                                 </div>
                                 <div className="flex-1 p-6 bg-slate-50 rounded-2xl border border-slate-100 hidden md:block">
                                     <div className="w-10 h-10 bg-slate-200 rounded-full mb-4"></div>
                                     <div className="w-full h-2 bg-slate-200 rounded mb-2"></div>
                                     <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
                                 </div>
                             </div>
                        </div>

                         {/* DUPLICATE FOR SEAMLESS LOOP */}
                        <div className="h-[300px] w-full bg-slate-50 p-12 flex flex-col justify-center text-left border-b border-slate-100">
                             <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6"></div>
                             <div className="w-3/4 h-8 bg-slate-900 rounded-md mb-4"></div>
                             <div className="w-1/2 h-4 bg-slate-300 rounded-md mb-8"></div>
                             <div className="w-40 h-10 bg-blue-600 rounded-full"></div>
                        </div>
                    </div>

                    {/* Cursor Simulation Overlay */}
                    <div className="absolute top-1/2 left-1/3 z-30 animate-cursor-float pointer-events-none">
                        <MousePointer2 className="w-6 h-6 text-slate-900 fill-white drop-shadow-md" />
                    </div>

                    {/* Subtle Overlay Shadow to edges */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]"></div>
                </div>
            </div>

            {/* TECNOLOGIAS DE ELITE SECTION */}
            <div className="mt-20 max-w-4xl mx-auto text-center px-4">
                <h3 className="text-slate-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-black mb-10">Tecnologias de Elite</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all backdrop-blur-md">
                            <Cpu className="w-6 h-6 text-slate-300 group-hover:text-white" />
                        </div>
                        <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">Automação Inteligente</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shadow-sm group-hover:bg-white group-hover:text-slate-900 transition-all backdrop-blur-md">
                            <Code2 className="w-6 h-6 text-slate-300 group-hover:text-slate-900" />
                        </div>
                        <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">Clean Code</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all backdrop-blur-md">
                            <Settings className="w-6 h-6 text-slate-300 group-hover:text-white" />
                        </div>
                        <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">MyPages Engine</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shadow-sm group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-500 transition-all backdrop-blur-md">
                            <Server className="w-6 h-6 text-slate-300 group-hover:text-white" />
                        </div>
                        <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">HostGator Partner</span>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-10 border-t border-white/10">
                    <div className="flex items-center gap-3 text-white font-black italic tracking-tighter text-xl md:text-2xl">
                        <span>Dev</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                        <span>Designer</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                        <span>Copywriter</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-5 py-2.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-sm backdrop-blur-md">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-bold text-emerald-100">Validado por Designers e Copywriters Seniores.</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center mt-12">
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
                Quero Minha Página de Vendas <ArrowRight className="w-5 h-5" />
            </button>
        </div>

      </div>

      <style>{`
        @keyframes scroll-vertical-fast {
            0% { transform: translateY(0); }
            100% { transform: translateY(-1200px); }
        }
        .animate-scroll-vertical-fast {
            animation: scroll-vertical-fast 12s linear infinite;
        }
        @keyframes cursor-float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(40px, 30px); }
        }
        .animate-cursor-float {
            animation: cursor-float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};