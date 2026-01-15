import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, User, Globe, Palette, Settings, DollarSign, ChevronRight, ChevronLeft, CheckSquare, Search, FileText, Layout, Target, Megaphone, Wrench, ShieldCheck, Map, MessageCircle, AlertCircle, Info, Copy, Check, Clock, Zap, Sparkles, Rocket, XCircle } from 'lucide-react';

interface BriefingFormProps {
  plan: string;
  onBack: () => void;
}

export const BriefingForm: React.FC<BriefingFormProps> = ({ plan: initialPlan, onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan === 'mypages' ? 'Página de Vendas Profissional' : initialPlan);
  const isSupportFlow = selectedPlan === 'Performance Stack (Suporte)';
  
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  
  const totalSteps = isSupportFlow ? 11 : 7; 

  const [formData, setFormData] = useState({
    // Shared
    name: '',
    company: '',
    cnpj: '',
    whatsapp: '',
    email: '',
    currentSite: '',
    socials: '',
    observations: '',

    // Sales/Site Flow
    lpObjective: '',
    audienceAge: '',
    audiencePain: '',
    hasVisualIdentity: '',
    visualStyle: '',
    sections: [] as string[],
    integrations: [] as string[],
    urgency: '',
    hasDomain: '',
    seoOption: '',

    // Support Flow (Performance Stack)
    confirmedMyPages: false,
    supportTypes: [] as string[],
    supportDesc: '',
    supportPage: '',
    supportSection: '',
    supportObjective: '',
    supportIntegrations: [] as string[],
    supportPriority: '',
    supportMaterials: [] as string[]
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      scrollToTop();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData(prev => {
      const current = prev[field as keyof typeof prev] as string[];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const buildMessage = () => {
    let msg = `*PROTOCOLO ESTRATÉGICO MYPAGES* 🚀\n`;
    msg += `--------------------------------\n`;
    msg += `*PLANO:* ${selectedPlan}\n\n`;
    
    msg += `*1. IDENTIFICAÇÃO*\n`;
    msg += `• Nome: ${formData.name}\n`;
    msg += `• Empresa: ${formData.company}\n`;
    msg += `• WhatsApp: ${formData.whatsapp}\n\n`;

    if (isSupportFlow) {
      msg += `*2. TICKET DE SUPORTE*\n`;
      msg += `• Tipos: ${formData.supportTypes.join(', ')}\n`;
      msg += `• Descrição: ${formData.supportDesc}\n`;
      msg += `• Local: ${formData.supportPage} (${formData.supportSection})\n`;
      msg += `• Objetivo: ${formData.supportObjective}\n`;
      msg += `• Integrações: ${formData.supportIntegrations.join(', ')}\n`;
      msg += `• Prioridade: ${formData.supportPriority}\n`;
      msg += `• Materiais: ${formData.supportMaterials.join(', ')}\n`;
    } else {
      msg += `*2. ENGENHARIA DO PROJETO*\n`;
      msg += `• Objetivo: ${formData.lpObjective}\n`;
      msg += `• Estilo: ${formData.visualStyle}\n`;
      msg += `• Seções: ${formData.sections.join(', ')}\n`;
      msg += `• Urgência: ${formData.urgency}\n`;
    }

    msg += `\n*OBS:* ${formData.observations || 'Nenhuma'}`;
    return msg;
  };

  const handleCopy = () => {
    const msg = buildMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    const msg = buildMessage();
    const encodedMessage = encodeURIComponent(msg);
    window.open(`https://wa.me/5521993009478?text=${encodedMessage}`, '_blank');
  };

  const renderStep = () => {
    // COMMON START: SELECTION
    if (step === 1) {
      const showLP = initialPlan === 'mypages' || initialPlan === 'Página de Vendas Profissional';
      const showSite = initialPlan === 'mypages' || initialPlan === 'Site Profissional Completo';
      const showSupport = initialPlan === 'mypages' || initialPlan === 'Performance Stack (Suporte)';
      const visibleCount = [showLP, showSite, showSupport].filter(Boolean).length;

      return (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Rocket size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">mypages</h3>
              <p className="text-sm text-slate-500">O que vamos construir hoje?</p>
            </div>
          </div>
          
          <div className={`grid gap-6 ${visibleCount === 1 ? 'max-w-md mx-auto grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {showLP && (
                <div onClick={() => { setSelectedPlan('Página de Vendas Profissional'); handleNext(); }} className={`group p-6 rounded-[2rem] border-2 transition-all cursor-pointer ${selectedPlan === 'Página de Vendas Profissional' ? 'border-brand-500 bg-brand-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"><Layout size={24} /></div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Página de Vendas</h4>
                    <p className="text-xs text-slate-500 mb-6">Foco total em conversão de oferta única.</p>
                    <button className="w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest bg-slate-100 text-slate-500 group-hover:bg-brand-600 group-hover:text-white transition-all">selecionar</button>
                </div>
              )}
              {showSite && (
                <div onClick={() => { setSelectedPlan('Site Profissional Completo'); handleNext(); }} className={`group p-6 rounded-[2rem] border-2 transition-all cursor-pointer ${selectedPlan === 'Site Profissional Completo' ? 'border-brand-500 bg-brand-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"><Globe size={24} /></div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Site Profissional</h4>
                    <p className="text-xs text-slate-500 mb-6">Presença sólida e institucional completa.</p>
                    <button className="w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest bg-slate-100 text-slate-500 group-hover:bg-brand-600 group-hover:text-white transition-all">selecionar</button>
                </div>
              )}
              {showSupport && (
                <div onClick={() => { setSelectedPlan('Performance Stack (Suporte)'); handleNext(); }} className={`group p-6 rounded-[2rem] border-2 transition-all cursor-pointer ${selectedPlan === 'Performance Stack (Suporte)' ? 'border-purple-500 bg-purple-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"><Wrench size={24} /></div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Performance Stack</h4>
                    <p className="text-xs text-slate-500 mb-6">Suporte, ajustes e evolução contínua.</p>
                    <button className="w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest bg-slate-100 text-slate-500 group-hover:bg-purple-600 group-hover:text-white transition-all">selecionar</button>
                </div>
              )}
          </div>
        </div>
      );
    }

    // COMMON STEP 2: IDENTIFICATION
    if (step === 2) {
      return (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white"><User size={20} /></div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Identificação do Cliente</h3>
              <p className="text-sm text-slate-500">Para começarmos, informe seus dados.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1.5"><label className="text-[10px] font-black uppercase text-slate-500">Nome Completo</label><input name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Ana Clara Silva" /></div>
            <div className="space-y-1.5"><label className="text-[10px] font-black uppercase text-slate-500">Empresa / Marca</label><input name="company" value={formData.company} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Studio Digital" /></div>
            <div className="space-y-1.5"><label className="text-[10px] font-black uppercase text-slate-500">WhatsApp</label><input name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="+55 (11) 99999-9999" /></div>
            <div className="space-y-1.5"><label className="text-[10px] font-black uppercase text-slate-500">E-mail</label><input name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="contato@empresa.com" /></div>
          </div>
        </div>
      );
    }

    // SUPPORT FLOW (Steps 3 to 11)
    if (isSupportFlow) {
      switch(step) {
        case 3: // Confirmation
          return (
            <div className="space-y-8 animate-fade-in text-center py-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600 mb-6 border-4 border-amber-50">
                <AlertCircle size={40} />
              </div>
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Aviso Importante</h3>
                <p className="text-slate-500 mb-8">
                  Este serviço de suporte e otimização é exclusivo para sites desenvolvidos pela <strong>MyPages</strong>. Não realizamos ajustes em sites de terceiros.
                </p>
                <div className="space-y-3 text-left">
                  <label className={`flex items-center gap-4 p-5 border rounded-2xl cursor-pointer transition-all ${formData.confirmedMyPages ? 'bg-brand-50 border-brand-500' : 'bg-white border-slate-200'}`}>
                    <input type="checkbox" checked={formData.confirmedMyPages} onChange={(e) => setFormData({...formData, confirmedMyPages: e.target.checked})} className="w-5 h-5 rounded border-slate-300 text-brand-600" />
                    <span className="text-sm font-bold text-slate-700">Confirmo que meu site foi desenvolvido pela MyPages</span>
                  </label>
                  {!formData.confirmedMyPages && (
                    <div className="p-4 bg-red-50 rounded-xl flex gap-3 border border-red-100 animate-pulse">
                      <XCircle size={18} className="text-red-600 shrink-0" />
                      <p className="text-xs text-red-800 font-bold">A confirmação é obrigatória para avançar.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        case 4: // Type of request
          return (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-black text-slate-900">O que você precisa hoje?</h3>
              <p className="text-sm text-slate-500 mb-8">Selecione todas as opções que se aplicam.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Ajustes rápidos (textos/cores)', 'Criação de nova seção', 'Alterações estruturais', 'Formulários avançados', 'Integrações CRM', 'Otimização de Performance', 'Otimização de Conversão', 'Atualização de Pixels'].map(type => (
                  <label key={type} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.supportTypes.includes(type) ? 'border-purple-500 bg-purple-50' : 'border-slate-100 hover:border-slate-300'}`}>
                    <input type="checkbox" checked={formData.supportTypes.includes(type)} onChange={() => handleCheckboxChange('supportTypes', type)} className="hidden" />
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${formData.supportTypes.includes(type) ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-300'}`}>
                      {formData.supportTypes.includes(type) && <Check size={14} />}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        case 5: // Description
          return (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-black text-slate-900">Explique sua solicitação</h3>
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-4 mb-4">
                <Info size={20} className="text-blue-600 shrink-0" />
                <p className="text-xs text-blue-800 leading-relaxed">
                  <strong>Dica:</strong> Seja específico. Ex: "Alterar o título da seção de preços de X para Y" ou "Adicionar um botão de WhatsApp flutuante no canto inferior".
                </p>
              </div>
              <textarea name="supportDesc" value={formData.supportDesc} onChange={handleChange} rows={6} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none resize-none" placeholder="Descreva aqui o que precisa ser feito..." />
            </div>
          );
        case 6: // Location
          return (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-black text-slate-900">Onde será aplicado?</h3>
              <div className="space-y-4">
                <div className="space-y-1.5"><label className="text-[10px] font-black uppercase text-slate-500">URL ou Nome da Página</label><input name="supportPage" value={formData.supportPage} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Ex: Home, Página de Checkout, etc." /></div>
                <div className="space-y-1.5"><label className="text-[10px] font-black uppercase text-slate-500">Seção Específica</label><input name="supportSection" value={formData.supportSection} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Ex: Hero, FAQ, Rodapé..." /></div>
              </div>
            </div>
          );
        case 7: // Objective
          return (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-black text-slate-900">Qual o principal objetivo?</h3>
              <div className="grid grid-cols-1 gap-3">
                {['Melhorar conversão', 'Melhorar clareza de informações', 'Melhorar performance (velocidade)', 'Atualizar dados/preços', 'Outro'].map(obj => (
                  <label key={obj} className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all ${formData.supportObjective === obj ? 'border-brand-500 bg-brand-50' : 'border-slate-100'}`}>
                    <input type="radio" name="supportObjective" value={obj} checked={formData.supportObjective === obj} onChange={handleChange} className="w-5 h-5 text-brand-600" />
                    <span className="text-sm font-bold text-slate-700">{obj}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        case 8: // Integrations
          return (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-black text-slate-900">Ferramentas & Integrações</h3>
              <p className="text-sm text-slate-500 mb-6">Envolve alguma ferramenta externa?</p>
              <div className="grid grid-cols-2 gap-3">
                {['WhatsApp', 'CRM', 'Google Analytics', 'Google Tag Manager', 'Meta Pixel', 'Google Ads', 'TikTok Ads', 'Nenhuma'].map(int => (
                  <label key={int} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.supportIntegrations.includes(int) ? 'border-blue-500 bg-blue-50' : 'border-slate-100'}`}>
                    <input type="checkbox" checked={formData.supportIntegrations.includes(int)} onChange={() => handleCheckboxChange('supportIntegrations', int)} className="hidden" />
                    <span className="text-xs font-bold uppercase">{int}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        case 9: // Priority
          return (
            <div className="space-y-8 animate-fade-in text-center">
              <h3 className="text-xl font-black text-slate-900">Nível de Urgência</h3>
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                {['Normal (Fila padrão)', 'Alta (Próximas 24h)', 'Urgente (Imediata)'].map(prio => (
                  <label key={prio} className={`flex items-center justify-between p-6 rounded-2xl border cursor-pointer transition-all ${formData.supportPriority === prio ? 'border-red-500 bg-red-50' : 'border-slate-100'}`}>
                    <div className="flex items-center gap-4">
                      {prio.includes('Normal') && <Clock className="text-slate-400" />}
                      {prio.includes('Alta') && <Zap className="text-amber-500" />}
                      {prio.includes('Urgente') && <Rocket className="text-red-600" />}
                      <span className="text-sm font-bold text-slate-700">{prio}</span>
                    </div>
                    <input type="radio" name="supportPriority" value={prio} checked={formData.supportPriority === prio} onChange={handleChange} className="w-5 h-5 text-red-600" />
                  </label>
                ))}
              </div>
            </div>
          );
        case 10: // Materials
          return (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-black text-slate-900">Materiais Adicionais</h3>
              <p className="text-sm text-slate-500 mb-6">Você enviará algum destes itens via WhatsApp?</p>
              <div className="grid grid-cols-2 gap-3">
                {['Textos em doc', 'Imagens', 'Vídeos', 'Links de referência', 'Não é necessário'].map(mat => (
                  <label key={mat} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.supportMaterials.includes(mat) ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100'}`}>
                    <input type="checkbox" checked={formData.supportMaterials.includes(mat)} onChange={() => handleCheckboxChange('supportMaterials', mat)} className="hidden" />
                    <span className="text-sm font-medium">{mat}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        case 11: // FINAL SUCCESS
          return (
            <div className="text-center space-y-10 animate-fade-in py-12">
              <div className="relative inline-block"><div className="w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/30 ring-8 ring-purple-500/10"><CheckCircle2 size={64} className="text-white" /></div></div>
              <div className="space-y-4">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">Solicitação Pronta.</h3>
                  <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed font-medium">Sua solicitação será analisada e executada conforme o escopo do Performance Stack.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <button onClick={handleSubmit} className="w-full max-w-md bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-4"><MessageCircle size={28} className="fill-white" /> Enviar para MyPages <ChevronRight size={24} /></button>
                <button onClick={handleCopy} className={`w-full max-w-md py-4 rounded-xl border font-bold text-sm flex items-center justify-center gap-3 transition-all ${copied ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-200 text-slate-600'}`}>{copied ? <Check size={18} /> : <Copy size={18} />} {copied ? 'Protocolo Copiado!' : 'Copiar Protocolo de Suporte'}</button>
              </div>
            </div>
          );
      }
    }

    // SALES FLOW (Original Steps 3 to 7)
    switch (step) {
      case 3: // Project
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-900">Etapa 2: Sobre o Projeto</h3>
            <div className="space-y-6">
              <div className="space-y-3"><label className="text-sm font-bold text-slate-700">Objetivo do site?</label><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{['Captar leads', 'Vender serviço', 'Vender produto', 'Agendamentos'].map(opt => (<label key={opt} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer ${formData.lpObjective === opt ? 'border-brand-500 bg-brand-50' : 'border-slate-200'}`}><input type="radio" name="lpObjective" value={opt} checked={formData.lpObjective === opt} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium">{opt}</span></label>))}</div></div>
              <div className="space-y-1.5"><label className="text-sm font-bold text-slate-700">Dores do seu cliente?</label><textarea name="audiencePain" value={formData.audiencePain} onChange={handleChange} rows={3} placeholder="O que tira o sono do seu cliente?" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" /></div>
            </div>
          </div>
        );
      case 4: // Visual
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-900">Etapa 3: Identidade Visual</h3>
            <div className="space-y-8">
              <div className="space-y-4"><p className="text-sm font-bold text-slate-700">Estilo visual?</p><div className="grid grid-cols-2 gap-3">{['Clean', 'Institucional', 'Moderno', 'Premium'].map(opt => (<label key={opt} className={`flex items-center justify-center p-4 rounded-xl border font-bold text-xs uppercase tracking-widest cursor-pointer ${formData.visualStyle === opt ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-400'}`}><input type="radio" name="visualStyle" value={opt} checked={formData.visualStyle === opt} onChange={handleChange} className="hidden" />{opt}</label>))}</div></div>
            </div>
          </div>
        );
      case 5: // Sections
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-900">Etapa 4: Estrutura</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Hero', 'Sobre', 'Benefícios', 'Serviços', 'Depoimentos', 'Portfólio', 'FAQ', 'Rodapé'].map(sec => (
                <label key={sec} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" checked={formData.sections.includes(sec)} onChange={() => handleCheckboxChange('sections', sec)} className="w-4 h-4 rounded text-brand-600" />
                  <span className="text-sm font-medium">{sec}</span>
                </label>
              ))}
            </div>
          </div>
        );
      case 6: // Urgency & Domain
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-900">Etapa 5: Prazos</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Padrão', 'Urgente'].map(u => (
                <label key={u} className={`flex flex-col items-center justify-center p-6 rounded-2xl border cursor-pointer ${formData.urgency === u ? 'border-brand-500 bg-brand-50' : 'border-slate-200'}`}>
                  <input type="radio" name="urgency" value={u} checked={formData.urgency === u} onChange={handleChange} className="hidden" />
                  <span className="text-sm font-bold uppercase tracking-wider">{u === 'Padrão' ? '⏱️ Padrão' : '🚀 Urgente'}</span>
                </label>
              ))}
            </div>
          </div>
        );
      case 7: // Success
        return (
          <div className="text-center space-y-10 animate-fade-in py-12">
            <div className="relative inline-block"><div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30 ring-8 ring-green-500/10"><CheckCircle2 size={64} className="text-white" /></div></div>
            <div className="space-y-4">
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">Tudo Pronto.</h3>
                <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed font-medium">Seu briefing foi estruturado com os mais altos padrões da MyPages.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <button onClick={handleSubmit} className="w-full max-w-md bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-4"><MessageCircle size={28} className="fill-white" /> Enviar para MyPages <ChevronRight size={24} /></button>
            </div>
          </div>
        );
    }
  };

  const isNextDisabled = isSupportFlow && step === 3 && !formData.confirmedMyPages;

  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in pb-20">
      <header className="bg-slate-900 text-white py-6 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Voltar
          </button>
          {step < totalSteps && (
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{step} / {totalSteps}</span>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50">
            {renderStep()}
            
            {step < totalSteps && (
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
                    <button onClick={handlePrev} disabled={step === 1} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-500 hover:bg-slate-50'}`}>
                      <ChevronLeft size={18} /> Anterior
                    </button>
                    
                    <button 
                      onClick={handleNext} 
                      disabled={isNextDisabled}
                      className={`flex items-center gap-2 px-10 py-4 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition-all shadow-xl ${isNextDisabled ? 'bg-slate-300 cursor-not-allowed' : 'bg-slate-900 hover:bg-brand-600'}`}
                    >
                      Próxima Etapa <ChevronRight size={18} />
                    </button>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};