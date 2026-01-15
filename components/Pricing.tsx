import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Globe, Rocket, Layers, Sparkles, Star, Lock } from 'lucide-react';

interface PricingProps {
  onPlanSelect?: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onPlanSelect }) => {
  const openWhatsAppDirect = (planName: string) => {
    window.open(`https://wa.me/5521993009478?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20modelo%20${planName}.`, '_blank');
  };

  const handleSelection = (planName: string, isBriefingRequired: boolean) => {
    if (isBriefingRequired && onPlanSelect) {
      onPlanSelect(planName);
    } else {
      openWhatsAppDirect(planName);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#050505] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] mb-8 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-blue-300 font-bold tracking-[0.2em] uppercase text-xs">Investimento Inteligente</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Planos
            </h2>
        </div>

        {/* The 3 Models Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            {/* ============================================================
                MODELO 1: PÁGINA DE VENDAS PROFISSIONAL
               ============================================================ */}
            <div className="group relative rounded-[2.5rem] p-8 bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 hover:border-slate-600 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>

                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <Rocket className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">1. Página de Vendas Profissional</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                    Ideal para vender um serviço ou produto específico, gerar contatos qualificados ou lançar uma oferta.
                </p>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-8 backdrop-blur-md">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Modelo</p>
                    <p className="text-white font-bold text-lg">Pagamento único por projeto</p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Entrega em até <strong className="text-white">24h a 48h</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Suporte <strong className="text-white">7 dias</strong> após a entrega</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Copywriting persuasivo focado em conversão</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Integração com WhatsApp e CRM</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Personalização total (sem templates engessados)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Conexão com seu domínio (HostGator ou outros)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Zap className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                        <span className="font-bold text-white">Carregamento rápido e experiência fluida</span>
                    </li>
                </ul>

                <button 
                    onClick={() => handleSelection('Página de Vendas Profissional', true)} 
                    className="w-full py-4 rounded-xl border border-slate-700 bg-transparent text-white font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm flex items-center justify-center gap-2 group-hover:border-white"
                >
                    Solicitar Orçamento
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* ============================================================
                MODELO 2: SITE PROFISSIONAL COMPLETO
               ============================================================ */}
            <div className="group relative rounded-[2.5rem] p-8 bg-slate-900/80 border border-brand-500/50 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_60px_rgba(37,99,235,0.15)] hover:-translate-y-3 flex flex-col z-10 scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-600/10 to-transparent opacity-100 rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Recomendado
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">2. Site Profissional Completo</h3>
                <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                    Estrutura institucional completa para profissionais e empresas que precisam de presença sólida, autoridade e escalabilidade.
                </p>
                <div className="bg-brand-900/20 rounded-2xl p-5 border border-brand-500/20 mb-8 backdrop-blur-md">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Modelo</p>
                    <p className="text-white font-bold text-lg">Pagamento único por projeto</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Entrega em <strong className="text-white">24h a 48h</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Suporte <strong className="text-white">7 a 15 dias</strong> após a entrega</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Redação persuasiva aplicada às páginas principais</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Estrutura com múltiplas páginas (Home, Sobre, Serviços e outras)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Integração com WhatsApp e CRM (opcional)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Personalização total de design e layout</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Conexão com seu domínio (HostGator ou outros)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Zap className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                        <span className="font-bold text-white">Carregamento rápido e experiência fluida</span>
                    </li>
                </ul>
                <button 
                    onClick={() => handleSelection('Site Profissional Completo', true)} 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 text-sm flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                    Orçar Site Completo
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* ============================================================
                MODELO 3: PERFORMANCE STACK (SUPORTE)
               ============================================================ */}
            <div className="group relative rounded-[2.5rem] p-8 bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>
                
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-800 text-purple-400 border border-purple-500/30 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 backdrop-blur-md">
                    <Lock size={12} className="fill-purple-400/20" /> Exclusivo MyPages
                </div>

                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-lg group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300 relative z-10">
                    <Layers className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">3. Performance Stack (Suporte)</h3>
                <p className="text-sm text-slate-400 mb-2 leading-relaxed">
                    Ideal para quem quer evoluir o site, testar novas ideias e manter a estrutura sempre otimizada.
                </p>
                
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-px bg-slate-800 flex-1"></div>
                  <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest whitespace-nowrap">Exclusivo para sites MyPages</span>
                  <div className="h-px bg-slate-800 flex-1"></div>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-8 backdrop-blur-md">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Modelo</p>
                    <p className="text-white font-bold text-lg">Pagamento único por pacote de ajustes</p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Ajustes rápidos (texto, imagens, cores e detalhes)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Novas seções e melhorias estruturais</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Formulários avançados e integrações com CRM</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Otimizações de performance e conversão</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Configuração ou atualização de pixels de conversão</span>
                    </li>
                </ul>
                <button 
                    onClick={() => handleSelection('Performance Stack (Suporte)', true)} 
                    className="w-full py-4 rounded-xl border border-slate-700 bg-transparent text-white font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 text-sm flex items-center justify-center gap-2 group-hover:border-white"
                >
                    Solicitar Orçamento
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>

        {/* Guarantee Seal */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left max-w-3xl mx-auto shadow-xl backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
            <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 ring-4 ring-green-500/10">
                <ShieldCheck className="w-7 h-7 text-green-400" />
            </div>
            <div>
                <h4 className="font-bold text-white text-lg mb-1">Garantia de Satisfação</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                    Todos os projetos possuem garantia de funcionamento e suporte prioritário no pós-venda.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};