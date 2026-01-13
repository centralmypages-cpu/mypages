
import React from 'react';
import { AlertTriangle, DollarSign, Clock, Activity, TrendingDown, EyeOff, AlertOctagon, Ban, ArrowDown } from 'lucide-react';

export const PainSection: React.FC = () => {
  return (
    <section className="pt-16 pb-0 bg-[#050000] relative overflow-hidden">
      
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef44440a_1px,transparent_1px),linear-gradient(to_bottom,#ef44440a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Background Floating Arrows (Loss Indicators) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[5%] left-[2%] opacity-[0.2] transform rotate-[-12deg] scale-75 md:scale-100">
              <TrendingDown size={180} className="text-red-600" />
          </div>
          <div className="absolute top-[25%] right-[5%] opacity-[0.15] transform rotate-[15deg] hidden md:block">
              <TrendingDown size={240} className="text-red-700" />
          </div>
          <div className="absolute bottom-[10%] left-[8%] opacity-[0.1] transform rotate-[-5deg] scale-50 md:scale-100">
              <TrendingDown size={150} className="text-red-600" />
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Alert Style */}
        <div className="flex flex-col items-center text-center mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/50 border border-red-500 text-red-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Diagnóstico Crítico Encontrado
           </div>
           
           <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight max-w-4xl">
             Você trabalha duro, mas seu site <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                 joga contra você.
             </span>
           </h2>
           
           <p className="text-base md:text-lg text-slate-300 font-medium max-w-2xl">
             O mercado não perdoa amadores. A falta de uma <span className="text-red-400 font-bold border-b border-red-500/50">Landing Page Profissional</span> está drenando seu faturamento silenciosamente.
           </p>
        </div>

        {/* The Diagnostic Dashboard (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
            
            {/* Card 1: The Main Metric (Loss) - REDDER */}
            <div className="md:col-span-5 bg-gradient-to-br from-red-950/80 to-black border border-red-500/40 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-[0_0_40px_rgba(220,38,38,0.15)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                        <TrendingDown className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
                    </div>
                    <h3 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-md">-40%</h3>
                    <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">De Receita Potencial</p>
                    <p className="text-red-200/60 text-sm max-w-xs mx-auto leading-relaxed">
                        É a média de clientes que fecham a aba imediatamente ao encontrar um site lento ou amador.
                    </p>
                </div>
            </div>

            {/* Card 2: The Symptoms List */}
            <div className="md:col-span-7 bg-red-950/10 backdrop-blur-sm border border-red-500/20 rounded-3xl p-6 md:p-10 flex flex-col justify-center shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Activity className="w-6 h-6 text-red-500" />
                    Relatório de Erros Comuns
                </h3>
                
                <div className="space-y-4">
                    {/* Symptom 1 */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 hover:bg-red-500/10 transition-colors border border-red-500/10 hover:border-red-500/30 group">
                        <div className="mt-1 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                            <DollarSign className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-red-400 transition-colors">Objeção de Preço ("Tá caro")</h4>
                            <p className="text-slate-400 text-sm">
                                Sem uma apresentação premium, o cliente não vê valor e compara seu serviço com o concorrente mais barato.
                            </p>
                        </div>
                    </div>

                    {/* Symptom 2 */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 hover:bg-red-500/10 transition-colors border border-red-500/10 hover:border-red-500/30 group">
                        <div className="mt-1 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                            <EyeOff className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-red-400 transition-colors">Invisibilidade Digital</h4>
                            <p className="text-slate-400 text-sm">
                                Stories somem em 24h. Sem uma Landing Page indexada, você não existe no Google e depende da sorte.
                            </p>
                        </div>
                    </div>

                    {/* Symptom 3 */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 hover:bg-red-500/10 transition-colors border border-red-500/10 hover:border-red-500/30 group">
                        <div className="mt-1 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                            <Clock className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-red-400 transition-colors">Atendimento Manual</h4>
                            <p className="text-slate-400 text-sm">
                                Você perde horas explicando o básico no WhatsApp. Sua página deveria fazer esse filtro e venda por você.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row - The "Technical Cause" Cards - REDDER */}
            <div className="md:col-span-4 bg-red-950/20 border border-red-500/20 rounded-3xl p-6 hover:bg-red-900/20 hover:border-red-500/50 transition-colors group">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500 border border-red-500/20 group-hover:scale-110 transition-transform">
                    <Ban className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-red-400">Sem Estratégia</h4>
                <p className="text-slate-400 text-sm">Páginas amadoras que não seguem lógica de vendas e copywriting.</p>
            </div>
            
            <div className="md:col-span-4 bg-red-950/20 border border-red-500/20 rounded-3xl p-6 hover:bg-red-900/20 hover:border-red-500/50 transition-colors group">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500 border border-red-500/20 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-red-400">Lentidão</h4>
                <p className="text-slate-400 text-sm">Cada segundo de carregamento custa 20% de conversão. Hospedagens baratas matam vendas.</p>
            </div>

            <div className="md:col-span-4 bg-red-950/20 border border-red-500/20 rounded-3xl p-6 hover:bg-red-900/20 hover:border-red-500/50 transition-colors group">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500 border border-red-500/20 group-hover:scale-110 transition-transform">
                    <AlertOctagon className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-red-400">Amadorismo</h4>
                <p className="text-slate-400 text-sm">Usar PDF ou links genéricos para vender produtos caros (High-Ticket) destrói a percepção de valor.</p>
            </div>

        </div>
      </div>

      {/* THE TRANSITION BRIDGE (Hell to Heaven) */}
      <div className="relative z-20 mt-16 pb-24 text-center max-w-2xl mx-auto px-6">
          
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-4 animate-fade-in">A boa notícia?</p>
          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-8 leading-tight">
              Isso não é o fim da linha. <br />
              <span className="text-slate-500 text-xl md:text-2xl font-medium mt-3 block">É apenas uma escolha.</span>
          </h3>
          
          <div className="flex justify-center cursor-pointer hover:translate-y-2 transition-transform duration-500" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(37,99,235,0.3)] transition-all">
                  <ArrowDown className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors animate-bounce" />
              </div>
          </div>
      </div>
    </section>
  );
};
