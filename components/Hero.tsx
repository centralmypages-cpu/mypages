import React from 'react';
import { ArrowRight, Zap, Sparkles, Star, ShieldCheck, Target, Users } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 pb-8 md:pt-36 md:pb-16 bg-white overflow-hidden">
      
      {/* Global Perspective Container */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective: '2000px' }}>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-brand-100/50 to-transparent rounded-full blur-[80px] md:blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5 text-left animate-slide-up relative z-30">
                  <h1 className="text-[2.6rem] sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-5 leading-[1.05] md:leading-[1.1]">
                    Crie Sua Presença Digital <br className="hidden lg:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600 relative inline-block">
                        Digna da Sua Autoridade.
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-brand-200 -z-10 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                    Transforme sua autoridade em novos atendimentos. Um SITE profissional feito para mostrar seu valor, gerar confiança e atrair novos pacientes ou clientes.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <button 
                        onClick={onStartProject}
                        className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-slate-900/20 hover:bg-brand-600 hover:shadow-brand-500/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95"
                      >
                          Iniciar Projeto Agora
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-full shadow-sm">
                          <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">Entrega em 24h/48h</span>
                      </div>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-4 text-slate-400">
                      <div className="flex -space-x-2">
                          {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" />)}
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider">+500 Clientes Satisfeitos</p>
                  </div>
              </div>

              {/* Right Visual Content */}
              <div className="lg:col-span-7 relative mt-4 lg:mt-0 flex justify-center lg:justify-end overflow-visible">
                  <div className="relative w-full max-w-[750px] h-[400px] sm:h-[600px] md:h-[800px] flex items-center justify-center">
                      
                      {/* 1. Vortex SVG Layers */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                          <div className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] border border-brand-500/20 rounded-full animate-vortex-spin-slowest will-change-transform"></div>
                          
                          <div className="absolute w-[320px] h-[320px] md:w-[600px] md:h-[600px] animate-vortex-spin-slow will-change-transform">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#vortex-gradient-1)" strokeWidth="0.5" strokeDasharray="10 20" className="opacity-40" />
                                <circle cx="50" cy="50" r="38" fill="none" stroke="url(#vortex-gradient-2)" strokeWidth="0.8" strokeDasharray="50 10" className="opacity-30" />
                                <defs>
                                    <linearGradient id="vortex-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#2563eb" />
                                    </linearGradient>
                                    <linearGradient id="vortex-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#1e3a8a" />
                                    </linearGradient>
                                </defs>
                            </svg>
                          </div>

                          <div className="absolute w-[110%] h-[110%] animate-vortex-spin-reverse opacity-20 will-change-transform">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                               <circle cx="50" cy="50" r="49" fill="none" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="1 15" />
                            </svg>
                          </div>
                          <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-500/10 rounded-full blur-[100px] animate-pulse"></div>
                      </div>

                      {/* 2. Orbit Cards - Locked to Paths */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        {/* Outer Orbit */}
                        <div className="absolute w-[288px] h-[288px] md:w-[540px] md:h-[540px] animate-vortex-layer-1 will-change-transform">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-counter-vortex-layer-1 will-change-transform">
                                <div className="bg-white/95 backdrop-blur-2xl border border-slate-200 p-2 md:p-5 rounded-xl md:rounded-[1.5rem] shadow-xl flex items-center gap-2 md:gap-4 whitespace-nowrap">
                                    <div className="w-7 h-7 md:w-12 md:h-12 bg-brand-100 rounded-lg md:rounded-2xl flex items-center justify-center text-brand-600">
                                        <ShieldCheck size={16} className="md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[10px] md:text-base font-black text-slate-900 tracking-tight">Autoridade Digital</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-counter-vortex-layer-1 will-change-transform">
                                <div className="bg-white/95 backdrop-blur-2xl border border-slate-200 p-2 md:p-5 rounded-xl md:rounded-[1.5rem] shadow-xl flex items-center gap-2 md:gap-4 whitespace-nowrap">
                                    <div className="w-7 h-7 md:w-12 md:h-12 bg-emerald-100 rounded-lg md:rounded-2xl flex items-center justify-center text-emerald-600">
                                        <Users size={16} className="md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[10px] md:text-base font-black text-slate-900 tracking-tight">Mais Atendimentos</span>
                                </div>
                            </div>
                        </div>

                        {/* Inner Orbit */}
                        <div className="absolute w-[243px] h-[243px] md:w-[456px] md:h-[456px] animate-vortex-layer-2 will-change-transform">
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 animate-counter-vortex-layer-2 will-change-transform">
                                <div className="bg-white/95 backdrop-blur-2xl border border-slate-200 p-2 md:p-5 rounded-xl md:rounded-[1.5rem] shadow-xl flex items-center gap-2 md:gap-4 whitespace-nowrap">
                                    <div className="w-7 h-7 md:w-12 md:h-12 bg-blue-100 rounded-lg md:rounded-2xl flex items-center justify-center text-blue-600">
                                        <Target size={16} className="md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[10px] md:text-base font-black text-slate-900 tracking-tight">Posicionamento Estratégico</span>
                                </div>
                            </div>
                        </div>
                      </div>

                      {/* 3. Central Phone */}
                      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                          <div className="animate-float-slow w-[140px] md:w-[280px] h-[260px] md:h-[520px] bg-slate-900 rounded-[1.8rem] md:rounded-[3rem] border-[5px] md:border-[10px] border-slate-800 shadow-2xl overflow-hidden relative will-change-transform">
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none z-20 animate-screen-shine will-change-transform"></div>
                              <div className="bg-slate-800 h-4 md:h-8 w-full flex items-center justify-center px-2 relative z-30">
                                  <div className="w-10 md:w-20 h-1 md:h-3 bg-slate-900 rounded-full"></div>
                              </div>
                              <div className="w-full h-full bg-white relative">
                                   <div className="absolute top-0 left-0 w-full animate-scroll-vertical flex flex-col will-change-transform">
                                       {[1, 2].map((i) => (
                                         <div key={i} className="flex flex-col">
                                            <div className="h-[280px] md:h-[500px] bg-slate-900 p-6 flex flex-col items-center justify-center text-center">
                                                <div className="w-10 h-10 md:w-16 md:h-16 bg-brand-500/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-500/30 animate-pulse">
                                                    <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-brand-400" />
                                                </div>
                                                <div className="w-3/4 h-2 md:h-4 bg-white/90 rounded-full mb-3"></div>
                                                <div className="w-1/2 h-2 md:h-4 bg-white/90 rounded-full mb-8"></div>
                                                <div className="w-32 md:w-48 h-8 md:h-14 bg-brand-600 rounded-xl flex items-center justify-center text-white text-[8px] md:text-[14px] font-black uppercase">SOLICITAR AGORA</div>
                                            </div>
                                            <div className="p-5 space-y-4 bg-white">
                                                <div className="grid grid-cols-2 gap-4">
                                                    {[1,2,3,4].map(idx => <div key={idx} className="aspect-square bg-slate-50 rounded-xl border border-slate-100"></div>)}
                                                </div>
                                            </div>
                                            <div className="h-[180px] md:h-[350px] bg-gradient-to-b from-brand-700 to-brand-900 p-6 flex flex-col items-center justify-center">
                                                <div className="w-3/4 h-8 md:h-14 bg-green-500 rounded-xl shadow-2xl flex items-center justify-center text-white text-[7px] md:text-[12px] font-black uppercase">WHATSAPP</div>
                                            </div>
                                         </div>
                                       ))}
                                   </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <style>{`
        @keyframes vortex-spin-slowest { from { transform: translate3d(0,0,0) rotate(0deg); } to { transform: translate3d(0,0,0) rotate(360deg); } }
        @keyframes vortex-spin-slow { from { transform: translate3d(0,0,0) rotate(0deg); } to { transform: translate3d(0,0,0) rotate(360deg); } }
        @keyframes vortex-spin-reverse { from { transform: translate3d(0,0,0) rotate(360deg); } to { transform: translate3d(0,0,0) rotate(0deg); } }
        @keyframes vortex-layer-1 { from { transform: translate3d(0,0,0) rotate(0deg); } to { transform: translate3d(0,0,0) rotate(360deg); } }
        @keyframes vortex-layer-2 { from { transform: translate3d(0,0,0) rotate(0deg); } to { transform: translate3d(0,0,0) rotate(360deg); } }
        @keyframes counter-vortex-layer-1 { from { transform: translate3d(0,0,0) rotate(0deg); } to { transform: translate3d(0,0,0) rotate(-360deg); } }
        @keyframes counter-vortex-layer-2 { from { transform: translate3d(0,0,0) rotate(0deg); } to { transform: translate3d(0,0,0) rotate(-360deg); } }
        @keyframes scroll-vertical { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(0, -50%, 0); } }
        @keyframes screen-shine { 0% { transform: translate3d(-150%, 0, 0) skewX(-20deg); opacity: 0; } 25% { opacity: 0.4; } 50%, 100% { transform: translate3d(150%, 0, 0) skewX(-20deg); opacity: 0; } }
        @keyframes float-slow { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(0, -15px, 0); } }

        .animate-vortex-spin-slowest { animation: vortex-spin-slowest 120s linear infinite; }
        .animate-vortex-spin-slow { animation: vortex-spin-slow 60s linear infinite; }
        .animate-vortex-spin-reverse { animation: vortex-spin-reverse 45s linear infinite; }
        .animate-vortex-layer-1 { animation: vortex-layer-1 40s linear infinite; }
        .animate-vortex-layer-2 { animation: vortex-layer-2 32s linear infinite; }
        .animate-counter-vortex-layer-1 { animation: counter-vortex-layer-1 40s linear infinite; }
        .animate-counter-vortex-layer-2 { animation: counter-vortex-layer-2 32s linear infinite; }
        .animate-scroll-vertical { animation: scroll-vertical 28s linear infinite; }
        .animate-screen-shine { animation: screen-shine 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .will-change-transform { will-change: transform; }
      `}</style>
    </section>
  );
};