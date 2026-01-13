import React from 'react';
import { Star, Users } from 'lucide-react';

export const SocialProofBanner: React.FC = () => {
  return (
    <section className="bg-slate-50 border-t border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        
        {/* Avatars */}
        <div className="flex items-center -space-x-3">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                <img 
                  src={`https://i.pravatar.cc/100?img=${10 + i}`} 
                  alt="Client" 
                  className="w-full h-full object-cover"
                />
             </div>
           ))}
           <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
             +1k
           </div>
        </div>

        {/* Text & Stars */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
           <div>
              <p className="text-slate-900 font-bold text-sm">
                 <span className="text-brand-600">+1.200 Profissionais</span> já elevaram seu nível.
              </p>
           </div>
           
           <div className="h-4 w-px bg-slate-300 hidden md:block"></div>

           <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">4.9/5 Nota Média</span>
           </div>
        </div>

      </div>
    </section>
  );
};