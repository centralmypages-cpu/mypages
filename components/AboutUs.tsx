
import React from 'react';
import { ArrowLeft, Target, Cpu, ShieldCheck, Zap, Users, Globe, Code2 } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface AboutUsProps {
  onBack: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onBack }) => {
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
             <span className="font-bold text-white text-sm tracking-tight">MyPages Institutional</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-[#050000] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 shadow-lg mb-8">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Nossa Identidade</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                    Não somos apenas uma agência.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">
                        Somos uma empresa de tecnologia.
                    </span>
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    A MyPages nasceu para desafiar o status quo do mercado digital: o dilema entre o "barato e amador" e o "caro e lento". Nós escolhemos o terceiro caminho: a inteligência tecnológica.
                </p>
            </div>
        </section>

        {/* The Manifesto / Story */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">O Manifesto MyPages</h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Durante anos, vimos excelentes profissionais perderem dinheiro por dois motivos: ou estavam reféns de plataformas alugadas que não transmitiam autoridade, ou estavam presos a agências tradicionais que cobravam fortunas para entregar sites lentos e burocráticos.
                            </p>
                            <p>
                                Acreditamos que <strong>o código deve ser um ativo, não um aluguel</strong>. 
                            </p>
                            <p>
                                Por isso, desenvolvemos uma metodologia proprietária que une a velocidade da automação avançada com a sensibilidade de designers e copywriters seniores. O resultado? Entregamos em 24h/48h o que o mercado leva 30 dias.
                            </p>
                            <div className="pt-4 border-l-4 border-brand-600 pl-6">
                                <p className="text-slate-800 font-bold italic">
                                    "Nosso objetivo não é apenas entregar um site. É entregar uma máquina de vendas que seja propriedade sua para sempre."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
                        <div className="bg-slate-900 rounded-3xl p-8 relative shadow-2xl text-white">
                            <div className="flex items-center gap-4 mb-8">
                                <Code2 className="w-10 h-10 text-brand-400" />
                                <div>
                                    <h3 className="font-bold text-xl">Engenharia de Performance</h3>
                                    <p className="text-slate-400 text-sm">Nossa obsessão técnica</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                    <span>Carregamento inferior a 1 segundo</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <ShieldCheck className="w-5 h-5 text-green-400" />
                                    <span>Código Limpo e Estrutura Segura</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Cpu className="w-5 h-5 text-blue-400" />
                                    <span>Otimização Técnica de Alta Performance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Nossos Pilares</h2>
                    <p className="text-slate-500 mt-2">O que guia cada linha de código que escrevemos.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-300 transition-colors">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Foco em Conversão</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Não fazemos arte pela arte. Fazemos design orientado a vendas. Cada botão, cor e texto é posicionado estrategicamente para gerar leads e receita.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Humanidade Tech</h3>
                        <p className="text-slate-500 leading-relaxed">
                            A tecnologia acelera, mas o humano direciona. Usamos ferramentas modernas para eliminar tarefas repetitivas, permitindo que nossos especialistas foquem na estratégia do seu negócio.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-green-300 transition-colors">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Liberdade Digital</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Lutamos contra o modelo de "aluguel de sites". Entregamos o código fonte para você. Acreditamos que a propriedade digital é um direito do empreendedor.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Tech Stack Banner */}
        <section className="py-16 bg-slate-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-8">Powered By High-End Tech</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex flex-col items-center gap-2">
                        <div className="font-bold text-xl">React Engine</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400">Framework</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="font-bold text-xl">Cloud Storage</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400">Infrastructure</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="font-bold text-xl">HostGator</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400">Hosting</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="font-bold text-xl">MyPages Code</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400">Performance</div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white text-center">
            <div className="max-w-2xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Pronto para elevar seu nível?</h2>
                <p className="text-slate-500 mb-10 text-lg">
                    Agora que você sabe quem somos, queremos saber quem é você. Vamos construir sua autoridade digital juntos.
                </p>
                <div className="flex justify-center gap-4">
                     <button 
                        onClick={onBack}
                        className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-colors"
                     >
                        Voltar para o Site
                     </button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};
