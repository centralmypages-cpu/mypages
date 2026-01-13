
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Preciso pagar mensalidade para ter o site?",
    answer: "Não. Os planos de Criação (Landing Page ou Site Completo) são pagamento único. Você paga uma vez para criar — e o site é seu para sempre. A única despesa recorrente é o domínio, caso você ainda não tenha."
  },
  {
    question: "Como funciona a garantia de entrega em 24h/48h?",
    answer: "O prazo começa a contar assim que você envia o material básico (fotos, textos e informações) pelo WhatsApp. A partir daí, nossa equipe entra em modo de produção acelerada para entregar a primeira versão funcional em até 24h/48h."
  },
  {
    question: "O site será meu ou da agência?",
    answer: "100% seu. Não trabalhamos com aluguel de site. Após a conclusão e o pagamento, todos os acessos, arquivos e direitos ficam em seu nome."
  },
  {
    question: "E se eu não gostar do design?",
    answer: "Sem problema. Trabalhamos com revisões ilimitadas até sua aprovação. Se algo não estiver do seu jeito, ajustamos cores, fontes, imagens e layout até chegar exatamente no resultado que você imaginou — sem custo extra."
  },
  {
    question: "Funciona bem no celular?",
    answer: "Sim — e esse é um dos nossos diferenciais. Usamos a metodologia Mobile-First, criando o site primeiro para celulares (onde a maioria dos acessos acontece) e depois adaptando para desktops. Resultado: velocidade, clareza e desempenho muito melhores."
  },
  {
    question: "Eu mesmo consigo editar o site depois?",
    answer: "Sim, você pode solicitar alterações no seu site dentro de um prazo inicial de 7 a 15 dias após a entrega, período em que ajustes como textos, imagens e informações podem ser feitos sem custo adicional. Após esse prazo, novas alterações passam a ser realizadas exclusivamente mediante solicitação à MyPages, através de um plano de suporte ou pedido avulso de alterações, garantindo que o site continue organizado, seguro e profissional."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com 50% no início do projeto e 50% na entrega final, somente após sua aprovação."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4" />
              Tira-Dúvidas
           </div>
           <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
             Ficou alguma dúvida?
           </h2>
           <p className="text-slate-500">
             Respostas diretas para as perguntas mais comuns dos nossos clientes.
           </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-brand-200 bg-brand-50/30 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-700' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                   {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
