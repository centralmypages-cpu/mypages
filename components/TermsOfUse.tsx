
import React from 'react';
import { ArrowLeft, FileText, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
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
             <span className="font-bold text-white text-sm tracking-tight">Termos de Uso</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            
            <div className="mb-12 border-b border-slate-100 pb-8">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                    <FileText size={32} />
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                    Termos de Uso
                </h1>
                <p className="text-slate-500 leading-relaxed text-lg">
                    Regras claras, jogo limpo. Aqui definimos as responsabilidades e os direitos na contratação dos serviços MyPages.
                </p>
                <p className="text-xs text-slate-400 mt-4 uppercase font-bold tracking-wider">Válido a partir de: Outubro de 2023</p>
            </div>

            <div className="space-y-10">
                
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Ao contratar os serviços da MyPages (seja via site, WhatsApp ou consultor), você concorda com estes termos. Eles regem a relação entre a MyPages (CONTRATADA) e você (CONTRATANTE).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">2. O Serviço</h2>
                    <div className="text-slate-600 leading-relaxed space-y-3">
                        <p>
                            A MyPages presta serviços de desenvolvimento de Landing Pages e Sites Institucionais focados em alta performance.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 ml-2">
                            <li><strong>Escopo:</strong> Definido no momento da contratação (Plano Landing Page, Site Institucional ou Personalizado).</li>
                            <li><strong>Personalização:</strong> Os projetos não utilizam templates prontos de terceiros. A estrutura é desenvolvida baseada no briefing do cliente.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                    <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        3. Propriedade Intelectual (Diferencial MyPages)
                    </h2>
                    <div className="text-green-800 leading-relaxed space-y-3">
                        <p>
                            Diferente de plataformas de aluguel (SaaS), na MyPages:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 ml-2 font-medium">
                            <li>Após o pagamento integral, <strong>o Código Fonte é de propriedade do Cliente</strong>.</li>
                            <li>Entregamos os arquivos finais via transferência direta ou configuração no servidor, garantindo sua liberdade de hospedar onde desejar.</li>
                            <li>Não reivindicamos direitos sobre o conteúdo (textos e imagens) fornecido pelo cliente.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">4. Prazos de Entrega</h2>
                    <div className="text-slate-600 leading-relaxed space-y-3">
                        <p>
                            Nosso compromisso é a agilidade (24h a 48h para primeira versão), porém este prazo começa a contar apenas após:
                        </p>
                        <ol className="list-decimal pl-5 space-y-1 ml-2">
                            <li>Confirmação do pagamento;</li>
                            <li>Envio completo do Briefing e materiais (logotipo, fotos, textos base) pelo cliente.</li>
                        </ol>
                        <p className="text-sm italic mt-2">
                            *Atrasos no envio de material por parte do cliente pausam a contagem do prazo de entrega.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">5. Pagamentos e Manutenção</h2>
                    <div className="text-slate-600 leading-relaxed space-y-3">
                        <ul className="list-disc pl-5 space-y-1 ml-2">
                            <li><strong>Projeto Único:</strong> Pagamento único pela criação e setup. Não há mensalidade obrigatória pelo uso do código.</li>
                            <li><strong>Custos de Terceiros:</strong> O cliente é responsável pelos custos de Domínio (ex: registro.br) e Hospedagem (ex: HostGator), salvo se contratar o plano de manutenção gerenciada da MyPages.</li>
                            <li><strong>Suporte Mensal (Opcional):</strong> A MyPages oferece planos de manutenção para atualizações de conteúdo e monitoramento técnico, contratados à parte.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-slate-400" />
                        6. Limitação de Responsabilidade
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        A MyPages não se responsabiliza por: Conteúdo ilegal ou ofensivo fornecido pelo cliente para inclusão no site; Quedas de servidores de hospedagem terceiros (ex: instabilidade na HostGator); Perda de acesso por mau uso das credenciais entregues ao cliente.
                    </p>
                </section>

                <section className="pt-8 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-slate-400 mt-1" />
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Ao prosseguir com a contratação, você declara estar ciente e de acordo com estes termos. 
                            Dúvidas? Fale com nosso jurídico em: <a href="mailto:centralmypages@gmail.com" className="text-blue-600 hover:underline">centralmypages@gmail.com</a>
                        </p>
                    </div>
                </section>

            </div>
        </div>
      </main>
    </div>
  );
};
