
import React from 'react';
import { Instagram, Server, Bot } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface FooterProps {
  onNavigate?: (page: string, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white pt-12 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
                <MyPagesLogo className="w-8 h-8 text-white rounded" />
                <span className="text-xl font-bold text-white tracking-tight">MyPages</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Transformando cliques em clientes com design de alta performance e tecnologia de ponta.
            </p>
            <div className="flex space-x-4 mb-8">
                <a 
                  href="https://www.instagram.com/mypages.com.br/?igsh=bTlhbHdpamFncGU4#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all text-white"
                >
                  <Instagram className="w-4 h-4" />
                </a>
            </div>

            {/* Partner Badge */}
            <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Parceiro Tecnológico</p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 bg-[#00A0D6]/10 border border-[#00A0D6]/30 rounded-lg px-4 py-3 w-fit hover:bg-[#00A0D6]/20 transition-colors cursor-default group">
                        <div className="bg-[#00A0D6] p-1 rounded">
                        <Server className="w-4 h-4 text-white" />
                        </div>
                        <div>
                        <p className="text-xs font-bold text-white leading-tight">HostGator</p>
                        <p className="text-[10px] text-[#00A0D6] uppercase font-bold tracking-wider">Official Partner</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Produto</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <button 
                  onClick={() => onNavigate?.('home', 'features')} 
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Vantagens
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('home', 'structure')} 
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Processo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('home', 'pricing')} 
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Planos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                  <button 
                    onClick={() => onNavigate?.('about')}
                    className="hover:text-white transition-colors text-left focus:outline-none"
                  >
                      Sobre Nós
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onNavigate?.('careers')}
                    className="hover:text-white transition-colors text-left focus:outline-none"
                  >
                      Carreiras
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onNavigate?.('contact')}
                    className="hover:text-white transition-colors text-left focus:outline-none"
                  >
                      Contato
                  </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                  <button 
                    onClick={() => onNavigate?.('privacy')}
                    className="hover:text-white transition-colors text-left focus:outline-none"
                  >
                      Privacidade
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onNavigate?.('terms')}
                    className="hover:text-white transition-colors text-left focus:outline-none"
                  >
                      Termos
                  </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p className="mb-4 md:mb-0">
                &copy; 2026 MyPages Digital Agency.
            </p>
            <div className="flex items-center space-x-6">
                <span>Rio de Janeiro, RJ 🇧🇷</span>
            </div>
        </div>
      </div>
    </footer>
  );
};
