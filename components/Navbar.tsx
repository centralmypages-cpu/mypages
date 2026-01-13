
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface NavbarProps {
  onNavigate?: (page: string, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/message/OVDNOGVQF3FOK1?autoload=1&app_absent=0', '_blank');
  };

  const handleNavClick = (page: string, sectionId?: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <>
      <nav 
        className={`
            fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform
            ${scrolled ? 'top-0' : 'top-6'}
        `}
      >
        <div 
            className={`
                mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${scrolled ? 'max-w-full px-0' : 'max-w-6xl px-4 sm:px-6'}
            `}
        >
            <div className={`
                flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                bg-black/90 backdrop-blur-md border-white/10 shadow-2xl
                ${scrolled 
                    ? 'rounded-none py-4 px-6 md:px-12 border-b'
                    : 'rounded-full py-4 px-8 border'
                } 
            `}>
                
                {/* Logo */}
                <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 group">
                    <MyPagesLogo className="w-8 h-8 text-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-105" />
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-gray-200 transition-colors">MyPages</span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => handleNavClick('home')} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors tracking-wide">Home</button>
                    <button onClick={() => handleNavClick('portfolio')} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors tracking-wide">Cases</button>
                    <button onClick={() => handleNavClick('home', 'features')} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors tracking-wide">Como Funciona</button>
                    <button onClick={() => handleNavClick('home', 'pricing')} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors tracking-wide">Planos</button>
                    <button onClick={() => handleNavClick('home', 'faq')} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors tracking-wide">FAQ (Dúvidas)</button>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <button 
                        onClick={openWhatsApp}
                        className="
                            bg-white text-black hover:bg-gray-100 
                            px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                            shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-0.5
                            flex items-center gap-2 border border-transparent
                        "
                    >
                        <MessageCircle className="w-4 h-4 fill-black" />
                        Solicitar Consultoria
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col h-full pt-32 px-6 space-y-8">
              <button onClick={() => handleNavClick('home')} className="text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 text-left">Home</button>
              <button onClick={() => handleNavClick('portfolio')} className="text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 text-left">Cases</button>
              <button onClick={() => handleNavClick('home', 'features')} className="text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 text-left">Como Funciona</button>
              <button onClick={() => handleNavClick('home', 'pricing')} className="text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 text-left">Planos</button>
              <button onClick={() => handleNavClick('home', 'faq')} className="text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 text-left">FAQ (Dúvidas)</button>
              
              <div className="mt-auto pb-12">
                  <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]" onClick={openWhatsApp}>
                      <MessageCircle className="w-5 h-5 fill-black" />
                      Solicitar Consultoria
                  </button>
              </div>
          </div>
      </div>
    </>
  );
};
