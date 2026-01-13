
import React from 'react';
import { Crown, TrendingUp, Sparkles, ArrowRight, Check, MessageCircle, DollarSign, Layout, Rocket, MousePointer2, Zap, Users, Heart, BarChart, Clock, Globe, Star, Code2, Lock, Server, Bot } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* ==============================================
            FASE 1: O SONHO (A NOVA REALIDADE)
           ============================================== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Column: Copy Persuasiva */}
            <div className="relative z-30 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 animate-fade-in hover:scale-105 transition-transform cursor-default">
                    <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">O Poder da Automação</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
                    Sua Melhor Versão Online <br />
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        Nunca Dorme.
                    </span>
                </h2>
                
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                    Criamos sua Landing Page ou site para guiar o visitante até a decisão final, eliminando dúvidas antes mesmo delas surgirem.
                    <br /><br />
                    Quando ele entra em contato pelo WhatsApp, já sabe o que deseja, quanto custa e por que escolher você, estando pronto para contratar.
                </p>

                {/* Bloco de Dados: Matemática da Conversão */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-10 relative overflow-hidden group hover:border-blue-300 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                        <BarChart className="w-5 h-5 text-blue-500" />
                        Por que você precisa disso agora?
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-3xl font-black text-slate-900">3.5s</p>
                            <p className="text-xs text-slate-500 font-medium">É o tempo máximo que um cliente espera um site carregar.</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-slate-900 text-green-600">+80%</p>
                            <p className="text-xs text-slate-500 font-medium">De credibilidade imediata ao ter um domínio próprio.</p>
                        </div>
                    </div>
                </div>

                {/* O Fator Velocidade */}
                <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl border border-slate-200">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white shrink-0">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900 uppercase">O Fator Velocidade</p>
                        <p className="text-xs text-slate-500">Em 24h/48h seu link está na bio e seus anúncios rodando. Sem tempo perdido.</p>
                    </div>
                </div>
            </div>

            {/* Right Column: 3D Side-View Wireframe Funnel */}
            <div className="relative h-[500px] md:h-[800px] flex items-center justify-center w-full lg:translate-x-10 order-1 lg:order-2">
                
                {/* --- 3D FUNNEL CONTAINER --- */}
                <div className="relative w-full h-full flex flex-col items-center justify-center [perspective:1000px] z-0 scale-[0.6] md:scale-100">
                    
                    {/* Source Header: Landing Page */}
                    <div className="absolute top-[0%] z-20 will-change-transform">
                        <div className="animate-float">
                            <div className="transform rotateX(10deg) preserve-3d">
                                <div className="bg-slate-900 text-white px-6 py-3 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-50 rounded-full animate-pulse"></div>
                                    <span className="font-bold tracking-widest text-xs uppercase">SUA LANDING PAGE</span>
                                </div>
                            </div>
                        </div>
                        {/* Vertical Connector Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full h-24 w-0.5 bg-gradient-to-b from-slate-900 to-blue-500/50"></div>
                    </div>

                    {/* Funnel SVG Wireframe Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="50%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#22c55e" />
                            </linearGradient>
                        </defs>
                        {/* Left Side Curve */}
                        <path d="M150 150 C 150 300, 220 500, 260 700" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        {/* Right Side Curve */}
                        <path d="M450 150 C 450 300, 380 500, 340 700" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        
                        {/* Central Flow Line */}
                        <line x1="300" y1="150" x2="300" y2="700" stroke="url(#flowGradient)" strokeWidth="1" strokeOpacity="0.3" />

                        {/* Particle Data Flow Animations */}
                        <circle r="3" fill="#3b82f6">
                            <animateMotion dur="2s" repeatCount="indefinite" path="M150 150 C 150 300, 220 500, 260 700" />
                        </circle>
                        <circle r="3" fill="#3b82f6">
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M450 150 C 450 300, 380 500, 340 700" />
                        </circle>
                        <circle r="4" fill="#22c55e">
                            <animateMotion dur="1.5s" repeatCount="indefinite" path="M300 150 L 300 700" />
                        </circle>
                    </svg>

                    {/* Layer 1: Traffic (Top) */}
                    <div className="absolute top-[15%] w-[400px] h-[100px] border border-blue-500/30 bg-blue-500/5 rounded-[100%] [transform:rotateX(60deg)] shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center group z-10 will-change-transform">
                        <div className="w-[90%] h-[90%] border border-blue-400/20 rounded-[100%] animate-spin-orbit"></div>
                         {/* Grid Plane Separator */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent mt-12"></div>
                    </div>
                    {/* Badge 1 (Outside 3D) */}
                    <div className="absolute top-[18%] left-[10%] z-20">
                         <div className="animate-float-delayed">
                             <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-blue-200 shadow-sm text-[10px] font-bold text-blue-700">
                                TRÁFEGO / ATRAÇÃO
                             </div>
                         </div>
                    </div>

                    {/* Layer 2: Engagement (Middle) */}
                    <div className="absolute top-[50%] w-[250px] h-[70px] border border-purple-500/30 bg-purple-500/5 rounded-[100%] [transform:rotateX(60deg)] shadow-[0_0_30px_rgba(168,85,247,0.2)] flex items-center justify-center z-10 will-change-transform">
                        <div className="w-[85%] h-[85%] border border-purple-400/20 rounded-[100%] animate-spin-orbit-reverse"></div>
                         {/* Grid Plane Separator */}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-purple-200/50 to-transparent mt-12"></div>
                    </div>
                    {/* Badge 2 (Outside 3D) */}
                    <div className="absolute top-[52%] right-[15%] z-20">
                        <div className="animate-float">
                            <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-purple-200 shadow-sm text-[10px] font-bold text-purple-700">
                                RETENÇÃO MÁXIMA
                            </div>
                        </div>
                    </div>

                    {/* Layer 3: Conversion (Bottom) */}
                    <div className="absolute top-[85%] w-[120px] h-[40px] border border-green-500/50 bg-green-500/10 rounded-[100%] [transform:rotateX(60deg)] shadow-[0_0_50px_rgba(34,197,94,0.4)] flex items-center justify-center z-10 will-change-transform">
                        <div className="w-full h-full bg-green-400/20 rounded-[100%] animate-pulse"></div>
                    </div>
                     {/* Badge 3 (Outside 3D) */}
                     <div className="absolute top-[86%] left-[20%] z-20">
                         <div className="animate-bounce">
                             <div className="bg-green-50/90 backdrop-blur px-3 py-1 rounded-full border border-green-300 shadow-lg text-[10px] font-bold text-green-700">
                                VENDAS / PIX
                             </div>
                         </div>
                    </div>

                    {/* Green Smoke Output */}
                    <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-green-500/30 blur-[80px] rounded-full pointer-events-none mix-blend-screen z-0"></div>
                </div>

                {/* --- CENTRAL DASHBOARD (RESULT CARD) --- */}
                {/* Moved to the right side of the bottom funnel to act as "Output" */}
                <div className="absolute bottom-[-5%] lg:bottom-[5%] right-[0%] lg:right-[-5%] z-30 scale-75 md:scale-100 origin-bottom-right">
                    <div className="animate-float-slow">
                        <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-slate-900/5 w-64">
                             <div className="flex items-center justify-between mb-4">
                                 <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Receita (Hoje)</h4>
                                 <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-[10px] font-bold text-green-600">
                                     <TrendingUp size={12} /> +24%
                                 </div>
                             </div>
                             <div className="text-3xl font-black text-slate-900 mb-4">R$ 12.450</div>
                             
                             <div className="space-y-3">
                                 {/* Notification 1 */}
                                 <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100">
                                     <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                                         <MessageCircle size={14} />
                                     </div>
                                     <div>
                                         <p className="text-[10px] font-bold text-slate-900">Novo Lead WhatsApp</p>
                                         <p className="text-[9px] text-slate-500">"Quero contratar..."</p>
                                     </div>
                                 </div>
                                 {/* Notification 2 */}
                                 <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100">
                                     <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                         <DollarSign size={14} />
                                     </div>
                                     <div>
                                         <p className="text-[10px] font-bold text-slate-900">Venda Aprovada</p>
                                         <p className="text-[9px] text-slate-500">Cartão • R$ 997,00</p>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        {/* ==============================================
            FASE 3: PART 3: THE DELIVERABLES
           ============================================== */}
        <div className="grid lg:grid-cols-12 gap-10 mt-10">
            
            {/* Visual Showcase (Browser Animation) */}
            <div className="lg:col-span-7 relative group order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="bg-slate-900 rounded-3xl p-1 md:p-2 border border-slate-800 relative shadow-2xl overflow-hidden h-[350px] md:h-[500px]">
                    
                    {/* Browser Header */}
                    <div className="bg-slate-800 px-4 py-3 rounded-t-2xl flex items-center gap-3 border-b border-slate-700 relative z-10">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 bg-slate-900 h-8 rounded-lg flex items-center justify-center text-xs font-mono text-slate-500 border border-slate-700/50">
                            🔒 seunegocio.com.br
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="bg-white w-full h-full rounded-b-xl overflow-hidden relative">
                         <div className="absolute top-0 w-full animate-scroll-vertical">
                             {/* Landing Page Content Simulation */}
                             <div className="h-[800px] w-full bg-slate-50 flex flex-col">
                                 {/* Hero */}
                                 <div className="h-48 md:h-64 bg-slate-900 flex items-center justify-center flex-col gap-4">
                                     <div className="w-3/4 h-6 md:h-8 bg-slate-700 rounded animate-pulse"></div>
                                     <div className="w-1/2 h-3 md:h-4 bg-slate-800 rounded"></div>
                                     <div className="w-24 md:w-32 h-8 md:h-10 bg-blue-600 rounded-full mt-4"></div>
                                 </div>
                                 {/* Features */}
                                 <div className="p-4 md:p-8 grid grid-cols-2 gap-4">
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                 </div>
                                 {/* Testimonials */}
                                 <div className="h-32 md:h-40 bg-slate-100 p-4 md:p-8 flex gap-4 overflow-hidden">
                                     <div className="w-32 md:w-40 h-full bg-white rounded-xl shadow-sm shrink-0"></div>
                                     <div className="w-32 md:w-40 h-full bg-white rounded-xl shadow-sm shrink-0"></div>
                                     <div className="w-32 md:w-40 h-full bg-white rounded-xl shadow-sm shrink-0"></div>
                                 </div>
                             </div>
                             {/* Duplicate for Loop */}
                             <div className="h-[800px] w-full bg-slate-50 flex flex-col border-t-4 border-red-500">
                                 <div className="h-48 md:h-64 bg-slate-900 flex items-center justify-center flex-col gap-4">
                                     <div className="w-3/4 h-6 md:h-8 bg-slate-700 rounded animate-pulse"></div>
                                     <div className="w-1/2 h-3 md:h-4 bg-slate-800 rounded"></div>
                                     <div className="w-24 md:w-32 h-8 md:h-10 bg-blue-600 rounded-full mt-4"></div>
                                 </div>
                                 <div className="p-4 md:p-8 grid grid-cols-2 gap-4">
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                     <div className="h-24 md:h-32 bg-white rounded-xl shadow-sm"></div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Technical Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
                <div className="mb-8">
                     <h3 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        A Tecnologia MyPages.
                     </h3>
                     <p className="text-slate-500">Não usamos templates prontos. Usamos inteligência.</p>
                </div>

                <div className="space-y-8 mb-10">
                    {/* Ultra Performance */}
                    <div className="flex gap-4 group">
                        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 border border-green-100 group-hover:bg-green-600 transition-colors">
                            <Rocket className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">Ultra Performance</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Sem plugins pesados. Código puro e leve que carrega instantaneamente, garantindo a melhor experiência no 4G.
                            </p>
                        </div>
                    </div>
                    
                    {/* Tech Stack Block */}
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold mb-4 tracking-wider">Tecnologias de Elite</p>
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-xs font-bold text-slate-700 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors cursor-default">
                                <Bot size={14} className="text-blue-500" /> Automação Inteligente
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-xs font-bold text-slate-700 border border-slate-200 shadow-sm hover:border-amber-300 transition-colors cursor-default">
                                <Code2 size={14} className="text-amber-500" /> Clean Code
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-xs font-bold text-slate-700 border border-slate-200 shadow-sm hover:border-brand-300 transition-colors cursor-default">
                                <Zap size={14} className="text-brand-500" /> MyPages Engine
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-xs font-bold text-slate-700 border border-slate-200 shadow-sm hover:border-[#00A0D6] transition-colors cursor-default">
                                <Server size={14} className="text-[#00A0D6]" /> HostGator Partner
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Expertise Block */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden mb-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px]"></div>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="flex -space-x-3">
                            <img src="https://i.pravatar.cc/100?img=59" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Dev" />
                            <img src="https://i.pravatar.cc/100?img=49" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Designer" />
                            <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Copywriter" />
                        </div>
                        <div>
                             <div className="flex gap-1 mb-1">
                                 <Star size={12} className="text-amber-400 fill-amber-400" />
                                 <Star size={12} className="text-amber-400 fill-amber-400" />
                                 <Star size={12} className="text-amber-400 fill-amber-400" />
                                 <Star size={12} className="text-amber-400 fill-amber-400" />
                                 <Star size={12} className="text-amber-400 fill-amber-400" />
                             </div>
                             <p className="text-xs text-slate-300 font-medium">Validado por Designers e Copywriters Seniores.</p>
                        </div>
                    </div>
                </div>

                <button 
                   onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                   className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all transform hover:-translate-y-1 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center justify-center gap-3">
                        Quero minha Landing Page Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>
            </div>

        </div>

      </div>
    </section>
  );
};
