
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5521993009478?text=Ol%C3%A1%2C%20estou%20no%20site%20e%20quero%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Orçamento Rápido ⚡
      </span>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors hover:scale-110 duration-300">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>
      <div className="absolute inset-0 rounded-full bg-[#25D366] -z-10 animate-ping opacity-75"></div>
    </a>
  );
};
