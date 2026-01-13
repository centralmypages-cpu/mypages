
import React from 'react';
import { ArrowLeft, MessageCircle, Mail, Clock, Phone, MapPin } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface ContactProps {
  onBack: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const whatsappNumber = '559993009478';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20MyPages.`;

  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in font-sans text-slate-900">
      
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
             <span className="font-bold text-white text-sm tracking-tight">Fale Conosco</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Como podemos ajudar?
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Acreditamos em comunicação direta e sem burocracia. Nossa equipe está pronta para atender você com a velocidade que seu negócio exige.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Card WhatsApp (Principal) */}
            <div className="md:col-span-3 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[80px] group-hover:bg-[#25D366]/20 transition-colors"></div>
                
                <div className="w-20 h-20 bg-[#25D366] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
                    <MessageCircle className="w-10 h-10 text-white fill-white" />
                </div>
                
                <div className="flex-1 text-center md:text-left relative z-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Atendimento via WhatsApp</h2>
                    <p className="text-slate-500 mb-6 max-w-lg">
                        É o canal mais rápido para orçamentos, dúvidas técnicas ou suporte. 
                        Nosso tempo médio de resposta é de poucos minutos dentro do horário comercial.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
                        >
                            Iniciar Conversa <MessageCircle size={18} fill="currentColor" />
                        </a>
                        <span className="text-slate-900 font-bold text-lg tracking-wide">+55 (99) 9300-9478</span>
                    </div>
                </div>
            </div>

            {/* Card Email */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Email Oficial</h3>
                <p className="text-sm text-slate-500 mb-4">Para envio de arquivos pesados, propostas formais ou parcerias.</p>
                <a href="mailto:centralmypages@gmail.com" className="text-blue-600 font-bold hover:underline break-all">
                    centralmypages@gmail.com
                </a>
            </div>

            {/* Card Horário */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-amber-300 transition-colors group">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Horário de Atendimento</h3>
                <p className="text-sm text-slate-500 mb-4">Nossa equipe está disponível para suporte e vendas:</p>
                <div className="space-y-1">
                    <p className="text-slate-900 font-bold">Segunda a Sexta</p>
                    <p className="text-slate-600">08:00 às 18:00</p>
                </div>
            </div>

             {/* Card Telefone */}
             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-purple-300 transition-colors group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Ligue para Nós</h3>
                <p className="text-sm text-slate-500 mb-4">Prefere uma ligação? Estamos disponíveis no mesmo número.</p>
                <a href="tel:+559993009478" className="text-purple-600 font-bold hover:underline">
                    (99) 9300-9478
                </a>
            </div>

        </div>

        {/* Location / Extra Info */}
        <div className="text-center py-8 border-t border-slate-200">
             <div className="inline-flex items-center gap-2 text-slate-400 font-medium">
                <MapPin size={16} />
                <span>Atendemos clientes em todo o Brasil e Exterior 🌎</span>
             </div>
        </div>

      </main>
    </div>
  );
};
