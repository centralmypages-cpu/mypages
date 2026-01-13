
import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Steps } from './Steps';
import { Pricing } from './Pricing';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-violet-200 selection:text-violet-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Pricing />
        
        {/* Simple Call to Action Banner before footer */}
        <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                    Pronto para <span className="gradient-text">Vender Mais?</span>
                </h2>
                <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto font-medium">
                   Junte-se a dezenas de profissionais que transformaram seu Instagram em uma máquina de vendas com nossas Landing Pages.
                </p>
                <div>
                    <button 
                      onClick={() => window.open('https://wa.me/5521993009478?text=Quero%20come%C3%A7ar', '_blank')}
                      className="bg-[#25D366] text-white font-black py-4 px-12 rounded-full hover:bg-[#128C7E] transition-all shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-1 duration-200 text-lg uppercase"
                    >
                        GARANTIR MINHA PÁGINA
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
