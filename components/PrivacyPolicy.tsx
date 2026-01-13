
import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, Server } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in font-sans text-slate-900">
      
      {/* Header Sticky */}
      <header className="bg-slate-900 text-white py-6 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Voltar para Home
          </button>
          <div className="flex items-center gap-2">
             <MyPagesLogo className="w-6 h-6 text-white" />
             <span className="font-bold text-white text-sm tracking-tight">Privacidade e Dados</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            
            <div className="mb-12 border-b border-slate-100 pb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                    <ShieldCheck size={32} />
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                    Política de Privacidade
                </h1>
                <p className="text-slate-500 leading-relaxed text-lg">
                    A transparência é um dos nossos pilares. Entenda como a MyPages coleta, usa e protege suas informações.
                </p>
                <p className="text-xs text-slate-400 mt-4 uppercase font-bold tracking-wider">Última atualização: Outubro de 2023</p>
            </div>

            <div className="space-y-10">
                
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-brand-500" />
                        1. Coleta de Dados
                    </h2>
                    <div className="text-slate-600 leading-relaxed space-y-3">
                        <p>
                            Coletamos apenas as informações estritamente necessárias para a prestação dos nossos serviços de desenvolvimento web e consultoria. Isso inclui:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 ml-2">
                            <li>Dados de identificação (Nome, Empresa, CNPJ/CPF);</li>
                            <li>Dados de contato (E-mail, Telefone/WhatsApp);</li>
                            <li>Informações para o Briefing do projeto (Preferências de design, conteúdo, imagens).</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-brand-500" />
                        2. Uso das Informações
                    </h2>
                    <div className="text-slate-600 leading-relaxed space-y-3">
                        <p>
                            Seus dados são utilizados exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 ml-2">
                            <li>Execução do projeto contratado (Criação da Landing Page ou Site);</li>
                            <li>Comunicação sobre o andamento do projeto via WhatsApp ou E-mail;</li>
                            <li>Emissão de notas fiscais e processamento de pagamentos;</li>
                            <li>Configuração de domínios e hospedagem (quando solicitado).</li>
                        </ul>
                        <p className="font-bold text-slate-800 mt-2">
                            Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing não autorizado.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Server className="w-5 h-5 text-brand-500" />
                        3. Compartilhamento e Tecnologia
                    </h2>
                    <div className="text-slate-600 leading-relaxed space-y-3">
                        <p>
                            Para entregar a tecnologia prometida ("High-End Tech"), podemos compartilhar dados estritamente técnicos com parceiros de infraestrutura:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 ml-2">
                            <li><strong>Provedores de Nuvem:</strong> Para hospedagem segura da estrutura do site.</li>
                            <li><strong>HostGator (ou provedor similar):</strong> Para configuração de hospedagem e domínio.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">4. Segurança</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Adotamos práticas de segurança de nível industrial. Todo o tráfego em nosso site é criptografado via SSL. Os arquivos dos projetos são armazenados de forma privada até a entrega final ao cliente.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">5. Seus Direitos (LGPD)</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Você tem total controle sobre seus dados. A qualquer momento, você pode solicitar:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 ml-2 text-slate-600">
                        <li>A confirmação da existência de tratamento de dados;</li>
                        <li>O acesso aos dados que possuímos sobre você;</li>
                        <li>A correção de dados incompletos ou desatualizados;</li>
                        <li>A exclusão de dados desnecessários (respeitando as obrigações legais de retenção fiscal).</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-slate-100">
                    <p className="text-slate-500 text-sm">
                        Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato através do email: <a href="mailto:centralmypages@gmail.com" className="text-blue-600 hover:underline">centralmypages@gmail.com</a>
                    </p>
                </section>

            </div>
        </div>
      </main>
    </div>
  );
};
