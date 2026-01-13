
import React from 'react';
import { ArrowRight, Zap, Star, TrendingUp, MessageCircle, DollarSign, Calendar, MousePointer2, Users, Target, Clock, ThumbsUp } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

export const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/message/OVDNOGVQF3FOK1?autoload=1&app_absent=0', '_blank');
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 pb-8 md:pt-36 md:pb-16 bg-white overflow-hidden">
      
      {/* Global Perspective Container */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective: '2000px' }}>
         {/* Background Gradients */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-brand-100/50 to-transparent rounded-full blur-[80px] md:blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5 text-left animate-slide-up relative z-30">
                  
                  <h1 className="text-[2.6rem] sm:text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-5 leading-[1.05] md:leading-[1.1]">
                    Crie Sua Presença Digital <br className="hidden lg:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600 relative inline-block">
                        Digna da Sua Autoridade.
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-brand-200 -z-10 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed font-medium">
                    Mostre ao mercado por que você é referência. Apresente sua autoridade com uma landing page estrategicamente construída para destacar seu valor profissional.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <button 
                        onClick={openWhatsApp}
                        className="group relative px-8 py-4.5 bg-slate-900 text-white text-lg font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-brand-900/20 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                      <span className="relative flex items-center justify-center gap-3">
                        Solicitar Consultoria
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-col gap-4">
                      {/* Speed Badge */}
                      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-xl border-2 border-blue-100 font-black text-sm md:text-lg uppercase tracking-tight shadow-sm w-fit">
                          <Zap className="w-4 h-4 md:w-5 md:h-5 fill-blue-700 shrink-0" />
                          24h/48h Entrega
                      </div>
                  </div>
              </div>

              {/* Right Visual Content - 3D WHIRLWIND VIVID COLORS */}
              <div className="lg:col-span-7 relative mt-4 lg:mt-0 flex justify-center lg:justify-end overflow-visible">
                  <div className="relative w-full max-w-[700px] h-[380px] sm:h-[500px] md:h-[700px] flex items-center justify-center [perspective:2000px] scale-[0.85] sm:scale-90 md:scale-100">
                      
                      {/* Central Smoke Effect */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-500/10 rounded-full blur-[50px] md:blur-[100px] pointer-events-none mix-blend-screen animate-pulse z-0"></div>

                      {/* --- 3D RINGS CONTAINER --- */}
                      <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d] [transform:rotateZ(90deg)_rotateY(10deg)] z-10 will-change-transform">
                           
                           {/* Ring 1 - Outer */}
                           <div className="absolute border-[1px] border-slate-200/50 rounded-full w-[280px] h-[280px] md:w-[650px] md:h-[650px] shadow-[0_0_30px_rgba(148,163,184,0.05)] [transform-style:preserve-3d] will-change-transform">
                                <div className="w-full h-full animate-spin-orbit [transform-style:preserve-3d]">
                                    <div className="absolute top-0 left-1/2 w-auto h-auto -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-counter-spin-vertical">
                                        <div className="transform -rotate-90">
                                            <div className="bg-white/95 backdrop-blur px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg border border-slate-100 text-[8px] md:text-[10px] font-bold text-slate-600 flex items-center gap-1.5 whitespace-nowrap hover:scale-110 transition-transform">
                                                <Users className="w-2 h-2 md:w-3 md:h-3 text-slate-400" />
                                                Tráfego Qualificado
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-[25%] left-[10%] w-8 h-8 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-counter-spin-vertical">
                                        <div className="transform -rotate-90">
                                            <div className="bg-white p-1.5 md:p-2.5 rounded-xl md:rounded-2xl shadow-xl border border-brand-50">
                                                <MyPagesLogo className="w-5 h-5 md:w-7 md:h-7 text-brand-500" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Item: Dollar Sign - VIVID NEON */}
                                    <div className="absolute bottom-[20%] right-[20%] w-8 h-8 md:w-10 md:h-10 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-counter-spin-vertical">
                                        <div className="transform -rotate-90">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00FF9D] text-slate-900 flex items-center justify-center shadow-[0_0_35px_rgba(0,255,157,0.7)] border-2 border-white">
                                                <DollarSign className="w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           {/* Ring 2 - Mid */}
                           <div className="absolute border-[1.5px] border-brand-300/40 rounded-full w-[220px] h-[220px] md:w-[500px] md:h-[500px] shadow-[0_0_40px_rgba(37,99,235,0.1)] [transform-style:preserve-3d] will-change-transform">
                                <div className="w-full h-full animate-spin-orbit-reverse [transform-style:preserve-3d]">
                                    <div className="absolute bottom-0 right-1/2 w-auto h-auto translate-x-1/2 translate-y-1/2 [transform-style:preserve-3d] animate-counter-spin-vertical-reverse">
                                        <div className="transform -rotate-90">
                                            <div className="bg-brand-600 px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg border border-brand-500 text-[8px] md:text-[10px] font-bold text-white flex items-center gap-1.5 whitespace-nowrap hover:scale-110 transition-transform">
                                                <Target className="w-2 h-2 md:w-3 md:h-3 text-white" />
                                                Estratégia de Elite
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Item: Clock - VIVID NEON */}
                                    <div className="absolute top-[30%] left-[5%] w-7 h-7 md:w-9 md:h-9 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-counter-spin-vertical-reverse">
                                        <div className="transform -rotate-90">
                                            <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#FFB800] text-slate-900 flex items-center justify-center shadow-[0_0_25px_rgba(255,184,0,0.7)] border-2 border-white">
                                                <Clock className="w-3 h-3 md:w-4 md:h-4 stroke-[3px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           {/* Ring 3 - Inner */}
                           <div className="absolute border-[1.5px] border-emerald-400/50 rounded-full w-[160px] h-[160px] md:w-[350px] md:h-[350px] shadow-[0_0_30px_rgba(16,185,129,0.15)] [transform-style:preserve-3d] will-change-transform">
                                <div className="w-full h-full animate-spin-orbit-fast [transform-style:preserve-3d]">
                                    <div className="absolute top-1/2 right-[-10px] md:right-[-15px] w-auto h-auto -translate-y-1/2 [transform-style:preserve-3d] animate-counter-spin-vertical-fast">
                                        <div className="transform -rotate-90">
                                            <div className="bg-emerald-50 px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg border border-emerald-200 text-[8px] md:text-[10px] font-bold text-emerald-700 flex items-center gap-1.5 whitespace-nowrap hover:scale-110 transition-transform">
                                                <Zap className="w-2 h-2 md:w-3 md:h-3 fill-emerald-600 text-emerald-600" />
                                                Pronto em 24h/48h
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>

                      </div>
                      
                      {/* --- CENTRAL WEBSITE --- */}
                      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 will-change-transform perspective-1000">
                          <div className="w-[140px] md:w-[260px] h-[260px] md:h-[480px] bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] border-[4px] md:border-[8px] border-slate-800 shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10 hover:scale-105 hover:rotate-y-12 transition-all duration-700 transform-gpu relative preserve-3d">
                              {/* Mini Browser Bar */}
                              <div className="bg-slate-800 h-4 md:h-7 w-full flex items-center justify-center px-2 relative z-10">
                                  <div className="w-8 md:w-16 h-1.5 md:h-3 bg-slate-900 rounded-full"></div>
                              </div>
                              
                              {/* Content Layer */}
                              <div className="w-full h-full bg-white relative">
                                   <div className="absolute top-0 left-0 w-full animate-scroll-vertical">
                                       <div className="h-24 md:h-44 bg-gradient-to-b from-brand-900 to-brand-800 flex flex-col items-center justify-center p-2 md:p-4 text-center relative">
                                           <div className="w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full mb-1.5 md:mb-3 backdrop-blur-md flex items-center justify-center border border-white/20">
                                              <Star className="w-4 h-4 md:w-6 md:h-6 text-white fill-white" />
                                           </div>
                                           <div className="w-20 md:w-32 h-1.5 md:h-2.5 bg-white rounded mb-1 md:mb-2"></div>
                                           <div className="w-20 md:w-28 h-5 md:h-8 bg-green-500 text-white rounded-md md:rounded-lg shadow-lg flex items-center justify-center text-[6px] md:text-[10px] font-bold">
                                              AGENDAR AGORA
                                           </div>
                                       </div>
                                   </div>
                                   <div className="absolute bottom-6 md:bottom-12 right-3 md:right-6 z-20 animate-pulse">
                                       <div className="w-6 h-6 md:w-10 md:h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border border-white/40 shadow-xl">
                                           <MousePointer2 className="w-3 h-3 md:w-5 md:h-5 text-white fill-white" />
                                       </div>
                                   </div>
                              </div>
                          </div>
                      </div>

                      {/* --- FLOATING NOTIFICATIONS --- */}
                      <div className="absolute inset-0 z-50 pointer-events-none perspective-2000 preserve-3d">
                          <div className="absolute top-[5%] right-[-2%] md:right-[0%] w-36 md:w-60 z-50">
                              <div className="animate-float">
                                  <div className="transform rotate-y-12 rotate-6 hover:rotate-0 transition-transform duration-500 ease-out preserve-3d">
                                      <div className="bg-white/95 backdrop-blur-md p-2 md:p-3 rounded-xl md:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 ring-1 ring-slate-900/5">
                                          <div className="flex items-center gap-2 md:gap-3">
                                              <div className="relative shrink-0">
                                                  <img src="https://i.pravatar.cc/150?img=5" alt="Cliente" className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover border border-white shadow-sm" />
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                  <p className="text-[8px] md:text-[11px] font-bold text-slate-900 truncate">Ana Clara</p>
                                                  <p className="text-[7px] md:text-[10px] text-emerald-600 font-bold leading-tight truncate">"Amei o design!"</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="absolute bottom-[10%] left-[-5%] md:left-[-5%] w-36 md:w-56 hidden sm:block z-40">
                               <div className="animate-float-reverse">
                                    <div className="transform -rotate-y-12 -rotate-6 transition-transform hover:rotate-0 duration-500 origin-center preserve-3d">
                                         <div className="bg-white/95 backdrop-blur-md p-2 md:p-3 rounded-xl md:rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-emerald-100 ring-1 ring-slate-900/5">
                                             <div className="flex items-center gap-2 md:gap-3">
                                                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 shadow-inner border border-emerald-100">
                                                     <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                                                 </div>
                                                 <div>
                                                     <p className="text-[8px] md:text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Pix Recebido</p>
                                                     <p className="text-xs md:text-sm font-black text-slate-900">R$ 3.500,00</p>
                                                 </div>
                                             </div>
                                         </div>
                                    </div>
                               </div>
                          </div>
                      </div>

                  </div>
              </div>

          </div>
      </div>
      
      <style>{`
        @keyframes spin-orbit {
            0% { transform: rotateZ(0deg); }
            100% { transform: rotateZ(360deg); }
        }
        @keyframes spin-orbit-reverse {
            0% { transform: rotateZ(360deg); }
            100% { transform: rotateZ(0deg); }
        }
        @keyframes spin-orbit-fast {
            0% { transform: rotateZ(0deg); }
            100% { transform: rotateZ(360deg); }
        }

        .animate-spin-orbit {
            animation: spin-orbit 40s linear infinite;
        }
        .animate-spin-orbit-reverse {
            animation: spin-orbit-reverse 30s linear infinite;
        }
        .animate-spin-orbit-fast {
            animation: spin-orbit-fast 20s linear infinite;
        }

        @keyframes scroll-vertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
            animation: scroll-vertical 8s linear infinite;
        }
      `}</style>
    </section>
  );
};
