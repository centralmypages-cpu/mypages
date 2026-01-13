
import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Globe, Rocket, Layers, BarChart, Sparkles, Star } from 'lucide-react';

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
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                Escolha o formato ideal para o seu momento. Seja para lançar uma oferta rápida, construir autoridade ou escalar sua estrutura.
            </p>
        </div>

        {/* The 3 Models Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            {/* ============================================================
                MODELO 1: LANDING PAGE
               ============================================================ */}
            <div className="group relative rounded-[2.5rem] p-8 bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 hover:border-slate-600 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>

                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <Rocket className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">1. Criação de Landing Page</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                    Ideal para vender um serviço ou produto específico, capturar leads ou lançamentos.
                </p>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-8 backdrop-blur-md">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Modelo</p>
                    <p className="text-white font-bold text-lg">Pagamento Único (Projeto)</p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Entrega em <strong className="text-white">24h/48H</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Suporte 7 a 15 Dias</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Copywriting Persuasivo Incluso</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Integração com WhatsApp/CRM</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Página Única (One-Page) de Alta Conversão</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Personalização Infinita (Sem Templates Presos)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>Conexão com seu Domínio (HostGator e Outros)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Zap className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                        <span className="font-bold text-white">Carregamento Rápido e Fluido (Alta performance)</span>
                    </li>
                </ul>

                <button 
                    onClick={() => handleSelection('Criação de Landing Page', true)} 
                    className="w-full py-4 rounded-xl border border-slate-700 bg-transparent text-white font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm flex items-center justify-center gap-2 group-hover:border-white"
                >
                    Solicitar Orçamento
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* ============================================================
                MODELO 2: CRIAÇÃO DE SITE (FEATURED)
               ============================================================ */}
            <div className="group relative rounded-[2.5rem] p-8 bg-slate-900/80 border border-brand-500/50 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_60px_rgba(37,99,235,0.15)] hover:-translate-y-3 flex flex-col z-10 scale-[1.02]">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-600/10 to-transparent opacity-100 rounded-[2.5rem] pointer-events-none"></div>
                
                {/* Top Badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Recomendado
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <Globe className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">2. Criação de Site</h3>
                <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                    Estrutura institucional completa com múltiplas páginas para empresas consolidadas.
                </p>

                <div className="bg-brand-900/20 rounded-2xl p-5 border border-brand-500/20 mb-8 backdrop-blur-md">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Modelo</p>
                    <p className="text-white font-bold text-lg">Pagamento Único (Projeto)</p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Entrega em <strong className="text-white">24h/48H</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Suporte 7 a 15 Dias</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Até mesmo a redação persuasiva</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Integração com WhatsApp/CRM (opcional)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Globe className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span className="font-bold text-white">Páginas Ilimitadas (Home, Sobre, Serviços...)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Página Única (One-Page) de Alta Conversão</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Personalização Infinita de Design no Seu Site</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span>Conexão com seu Domínio (HostGator e Outros)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Zap className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                        <span className="font-bold text-white">Carregamento Rápido e Fluido (Alta performance)</span>
                    </li>
                </ul>

                <button 
                    onClick={() => handleSelection('Criação de Site Institucional', true)} 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 text-sm flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                    Orçar Site Completo
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* ============================================================
                MODELO 3: PERFORMANCE STACK
               ============================================================ */}
            <div className="group relative rounded-[2.5rem] p-8 bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>

                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-lg group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300 relative z-10">
                    <Layers className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">3. Performance Stack <br/>(Setup & Suporte)</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                    Faça alterações adicionais, adicione novas seções, integrações e muito mais.
                </p>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-8 backdrop-blur-md">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Modelo</p>
                    <p className="text-white font-bold text-lg">Pagamento Único (Projeto)</p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Pequenas Alterações (Texto, foto, cor)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Grandes Alterações (Nova seção, formulário complexo, integração com CRM)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                        <BarChart className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span>Otimização Avançada (Tag Manager, Novo Pixel de Conversão, Otimização de SEO)</span>
                    </li>
                </ul>

                <button 
                    onClick={() => handleSelection('Performance Stack (Setup & Suporte)', true)} 
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
