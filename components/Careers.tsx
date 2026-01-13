
import React from 'react';
import { ArrowLeft, Rocket, Briefcase, Search, Users, Zap, Code2, Coffee } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface CareersProps {
  onBack: () => void;
}

export const Careers: React.FC<CareersProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white animate-fade-in font-sans text-slate-900">
      
      {/* Header Sticky */}
      <header className="bg-slate-900 text-white py-6 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Voltar para Home
          </button>
          <div className="flex items-center gap-2">
             <MyPagesLogo className="w-6 h-6 text-white" />
             <span className="font-bold text-white text-sm tracking-tight">MyPages Careers</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#050000] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 shadow-lg mb-8">
                    <Rocket className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Junte-se à Elite</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                    Construa o futuro da <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Web de Alta Performance.
                    </span>
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    Na MyPages, não contratamos apenas funcionários. Buscamos arquitetos digitais obcecados por qualidade, velocidade e conversão.
                </p>
            </div>
        </section>

        {/* Culture / Why Work Here */}
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-amber-500" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Meritocracia Radical</h3>
                        <p className="text-sm text-slate-500">Aqui, idade ou tempo de casa não importam. O que importa é a qualidade da sua entrega e o impacto que você gera.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                            <Code2 className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Stack de Ponta</h3>
                        <p className="text-sm text-slate-500">Trabalhe com React, Tailwind e ferramentas de automação modernas. Nada de legado ou ferramentas obsoletas.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                            <Coffee className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Remote First</h3>
                        <p className="text-sm text-slate-500">Liberdade geográfica real. Entregue resultados extraordinários de onde você se sentir mais produtivo.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Current Status: NO VACANCIES */}
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6 text-center">
                
                <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[size:20px_20px]"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-8 shadow-inner">
                            <Briefcase className="w-8 h-8 text-slate-500" />
                        </div>

                        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                            Quadro Completo
                        </h2>
                        
                        <div className="w-16 h-1 bg-slate-300 rounded-full mb-6"></div>

                        <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
                            No momento, <span className="text-slate-900 font-bold">todas as nossas posições estão preenchidas</span>.
                        </p>
                        
                        <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                            Recentemente finalizamos um ciclo de contratações para expandir nosso time de desenvolvimento e design. Devido ao alto volume de projetos, priorizamos a integração e treinamento dos novos talentos antes de abrir novas vagas.
                        </p>

                        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 text-left max-w-md w-full shadow-sm">
                            <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                                <Search className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-900 uppercase">Fique Atento</p>
                                <p className="text-xs text-slate-500">Novas oportunidades para <strong>Front-end Developer</strong> e <strong>Copywriter</strong> devem surgir no próximo trimestre.</p>
                            </div>
                        </div>

                        <div className="mt-8">
                             <a 
                                href="https://www.linkedin.com/company/mypagescompany/?viewAsMember=true" 
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                             >
                                Acompanhe no LinkedIn <ArrowLeft className="rotate-180 w-4 h-4" />
                             </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

      </main>
    </div>
  );
};
