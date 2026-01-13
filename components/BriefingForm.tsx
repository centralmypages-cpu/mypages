
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, User, Globe, Palette, Settings, DollarSign, ChevronRight, ChevronLeft, CheckSquare, Search, FileText, Layout, Target, Megaphone, Wrench, ShieldCheck, Map } from 'lucide-react';

interface BriefingFormProps {
  plan: string;
  onBack: () => void;
}

export const BriefingForm: React.FC<BriefingFormProps> = ({ plan, onBack }) => {
  // Detecta o tipo de plano
  const isSiteCreation = plan.includes('Site') || plan.includes('Institucional');
  const isPerformance = plan.includes('Performance') || plan.includes('Setup');
  
  // Define total de passos baseado no tipo
  // Performance: 4 Etapas + Final = 5
  // LP: 6 Etapas + Final = 7
  // Site: 7 Etapas + Final = 8
  let totalSteps = 7;
  if (isSiteCreation) totalSteps = 8;
  if (isPerformance) totalSteps = 5;
  
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // --- ETAPA 1 (COMUM + PERFORMANCE) ---
    name: '',
    company: '',
    cnpj: '',
    whatsapp: '',
    email: '',
    currentSite: '',
    socials: '',
    address: '', 
    // Performance specific in Step 4 now
    perfRequestType: '', // Plano Mensal / Serviço Avulso

    // --- ETAPA 2 (PERFORMANCE) ---
    perfServiceType: [] as string[], // Checkboxes
    perfOtherService: '',

    // --- ETAPA 3 (PERFORMANCE) ---
    perfDetails: '',
    perfLinks: '',
    perfMaterials: '',

    // --- ETAPA 4 (PERFORMANCE) ---
    perfUrgency: '',

    // --- LANDING PAGE / SITE FIELDS ---
    // LP Specifics
    lpObjective: '',
    lpProjectDesc: '',
    lpAudience: '',
    lpOffer: '',
    lpValueProp: '',
    lpDifferentials: '',
    lpMaterial: '',
    lpServices: '',
    lpAction: '',
    lpCopy: '',
    lpRefs: '',
    
    // Site Specifics
    siteType: '',
    siteObjective: '',
    siteDesc: '',
    siteAudience: '',
    siteValueProp: '',
    siteDifferentials: '',
    siteTexts: '',
    siteContent: '',
    sitePages: [] as string[],
    siteCustomPages: '',
    siteRefs: '',

    // LP Visual
    lpVisualId: '',
    lpVisualFiles: '',
    lpVisualStyle: '',
    lpVisualRefs: '',
    lpVisualPath: '',
    lpDislikes: '',

    // Site Visual
    siteVisualId: '',
    siteVisualFiles: '',
    siteVisualStyle: '',
    siteVisualRefs: '',
    siteDislikes: '',
    siteBalance: '', 

    // LP Funcionalidades
    lpSections: [] as string[],
    lpIntegrations: [] as string[],
    lpMultilingual: '',
    lpUrgency: '', 

    // Site Funcionalidades
    siteForm: '',
    siteFormFields: '',
    siteBlog: '',
    siteCatalog: '',
    siteIntegrations: [] as string[],
    siteMaps: '',
    siteSocials: '',
    siteProtected: '',
    siteMultilingual: '',
    siteHosting: '',

    // LP SEO
    lpSeo: '',
    lpKeywords: '',
    lpGoogleIntent: '',
    lpAnalytics: '',
    lpPixels: '',
    lpCampaigns: '',

    // Site Estrutura
    siteStructureImagine: '',
    sitePageDetails: '',
    siteMediaSource: '',
    siteAnimations: '',
    siteCompetitor: '',

    // LP Comercial
    lpBudget: '',
    lpMaintenance: '',
    lpHiringUrgency: '',

    // Site SEO
    siteSeo: '',
    siteKeywords: '',
    siteGoogleIntent: '',
    siteAnalytics: '',

    // Site Comercial
    siteDeadline: '',
    siteBudget: '',
    siteApproval: '',
    siteMaintenance: ''
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
      // @ts-ignore - dynamic key access
      const current = prev[field] as string[];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const generateWhatsAppMessage = () => {
    let msg = '';
    
    if (isPerformance) {
        msg = `*BRIEFING – PERFORMANCE STACK (Setup & Suporte)* 🛠️\n`;
        msg += `--------------------------------\n\n`;
        
        msg += `*1. IDENTIFICAÇÃO* 👤\n`;
        msg += `Nome: ${formData.name}\n`;
        msg += `Empresa: ${formData.company}\n`;
        msg += `Whats: ${formData.whatsapp}\n\n`;

        msg += `*2. SERVIÇOS* ⚙️\n`;
        msg += `Tipos: ${formData.perfServiceType.join(', ')}\n`;
        if (formData.perfOtherService) msg += `Outro: ${formData.perfOtherService}\n`;
        msg += `\n`;

        msg += `*3. DETALHAMENTO* 📝\n`;
        msg += `Explicação: ${formData.perfDetails}\n`;
        msg += `Links: ${formData.perfLinks}\n`;
        msg += `Materiais: ${formData.perfMaterials}\n\n`;

        msg += `*4. COMERCIAL E PRAZO* 💰\n`;
        msg += `Tipo Solicitação: ${formData.perfRequestType}\n`;
        msg += `Prazo: ${formData.perfUrgency}\n`;
        
    } else {
        msg = `*BRIEFING – ${isSiteCreation ? 'CRIAÇÃO DE SITE' : 'LANDING PAGE'}* 🚀\n`;
        msg += `--------------------------------\n`;
        msg += `*Plano:* ${plan}\n\n`;

        msg += `*1. INFORMAÇÕES DO CLIENTE* 👤\n`;
        msg += `Nome: ${formData.name}\n`;
        msg += `Empresa: ${formData.company}\n`;
        if (!isPerformance) msg += `CNPJ: ${formData.cnpj}\n`;
        msg += `Whats: ${formData.whatsapp}\n`;
        msg += `Email: ${formData.email}\n`;
        msg += `Site Atual: ${formData.currentSite}\n`;
        msg += `Redes: ${formData.socials}\n`;
        if (isSiteCreation) msg += `Endereço: ${formData.address}\n`;
        msg += `\n`;

        if (isSiteCreation) {
            // ... SITE FIELDS ...
            msg += `*2. SOBRE O PROJETO* 🎯\n`;
            msg += `Tipo: ${formData.siteType}\n`;
            msg += `Objetivo: ${formData.siteObjective}\n`;
            msg += `Descrição: ${formData.siteDesc}\n`;
            msg += `Público: ${formData.siteAudience}\n`;
            msg += `Valor: ${formData.siteValueProp}\n`;
            msg += `Diferenciais: ${formData.siteDifferentials}\n`;
            msg += `Textos Prontos: ${formData.siteTexts}\n`;
            msg += `Conteúdo Obrigatório: ${formData.siteContent}\n`;
            msg += `Páginas: ${formData.sitePages.join(', ')}\n`;
            msg += `Páginas Extras: ${formData.siteCustomPages}\n`;
            msg += `Refs: ${formData.siteRefs}\n\n`;

            msg += `*3. IDENTIDADE VISUAL* 🎨\n`;
            msg += `ID Pronta: ${formData.siteVisualId}\n`;
            msg += `Arquivos: ${formData.siteVisualFiles}\n`;
            msg += `Estilo: ${formData.siteVisualStyle}\n`;
            msg += `Refs Visuais: ${formData.siteVisualRefs}\n`;
            msg += `Evitar: ${formData.siteDislikes}\n`;
            msg += `Equilíbrio: ${formData.siteBalance}\n\n`;

            msg += `*4. FUNCIONALIDADES* ⚙️\n`;
            msg += `Formulário: ${formData.siteForm} (${formData.siteFormFields})\n`;
            msg += `Blog: ${formData.siteBlog}\n`;
            msg += `Catálogo: ${formData.siteCatalog}\n`;
            msg += `Integrações: ${formData.siteIntegrations.join(', ')}\n`;
            msg += `Maps: ${formData.siteMaps}\n`;
            msg += `Redes Sociais: ${formData.siteSocials}\n`;
            msg += `Área Protegida: ${formData.siteProtected}\n`;
            msg += `Multilíngue: ${formData.siteMultilingual}\n`;
            msg += `Hospedagem: ${formData.siteHosting}\n\n`;

            msg += `*5. ESTRUTURA E CONTEÚDO* 📐\n`;
            msg += `Imaginação: ${formData.siteStructureImagine}\n`;
            msg += `Detalhes: ${formData.sitePageDetails}\n`;
            msg += `Mídia: ${formData.siteMediaSource}\n`;
            msg += `Animações: ${formData.siteAnimations}\n`;
            msg += `Concorrente: ${formData.siteCompetitor}\n\n`;

            msg += `*6. SEO E ESTRATÉGIA* 🔎\n`;
            msg += `SEO Básico: ${formData.siteSeo}\n`;
            msg += `Palavras-chave: ${formData.siteKeywords}\n`;
            msg += `Busca Google: ${formData.siteGoogleIntent}\n`;
            msg += `Analytics: ${formData.siteAnalytics}\n\n`;

            msg += `*7. PRAZO E INVESTIMENTO* 💰\n`;
            msg += `Prazo: ${formData.siteDeadline}\n`;
            msg += `Investimento: ${formData.siteBudget}\n`;
            msg += `Aprovado: ${formData.siteApproval}\n`;
            msg += `Manutenção: ${formData.siteMaintenance}\n`;

        } else {
            // ... LP FIELDS ...
            msg += `*2. SOBRE O PROJETO* 🎯\n`;
            msg += `Objetivo: ${formData.lpObjective}\n`;
            msg += `Projeto: ${formData.lpProjectDesc}\n`;
            msg += `Público: ${formData.lpAudience}\n`;
            msg += `Oferta: ${formData.lpOffer}\n`;
            msg += `Valor: ${formData.lpValueProp}\n`;
            msg += `Diferenciais: ${formData.lpDifferentials}\n`;
            msg += `Material: ${formData.lpMaterial}\n`;
            msg += `Serviços: ${formData.lpServices}\n`;
            msg += `Ação Final: ${formData.lpAction}\n`;
            msg += `Copy: ${formData.lpCopy}\n`;
            msg += `Modelo/Ref: ${formData.lpRefs}\n\n`;

            msg += `*3. IDENTIDADE VISUAL* 🎨\n`;
            msg += `ID Pronta: ${formData.lpVisualId}\n`;
            msg += `Arquivos: ${formData.lpVisualFiles}\n`;
            msg += `Estilo: ${formData.lpVisualStyle}\n`;
            msg += `Refs: ${formData.lpVisualRefs}\n`;
            msg += `Caminho: ${formData.lpVisualPath}\n`;
            msg += `Evitar: ${formData.lpDislikes}\n\n`;

            msg += `*4. FUNCIONALIDADES* ⚙️\n`;
            msg += `Seções: ${formData.lpSections.join(', ')}\n`;
            msg += `Integrações: ${formData.lpIntegrations.join(', ')}\n`;
            msg += `Multilíngue: ${formData.lpMultilingual}\n`;
            msg += `Urgência/Prazo: ${formData.lpUrgency}\n\n`;

            msg += `*5. SEO E ESTRATÉGIA* 🔎\n`;
            msg += `SEO Básico: ${formData.lpSeo}\n`;
            msg += `Palavras-chave: ${formData.lpKeywords}\n`;
            msg += `Busca Google: ${formData.lpGoogleIntent}\n`;
            msg += `Analytics: ${formData.lpAnalytics}\n`;
            msg += `Pixels: ${formData.lpPixels}\n`;
            msg += `Campanhas: ${formData.lpCampaigns}\n\n`;

            msg += `*6. COMERCIAL* 💰\n`;
            msg += `Investimento: ${formData.lpBudget}\n`;
            msg += `Manutenção: ${formData.lpMaintenance}\n`;
            msg += `Início: ${formData.lpHiringUrgency}\n`;
        }
    }

    return encodeURIComponent(msg);
  };

  const handleSubmit = () => {
    const encodedMessage = generateWhatsAppMessage();
    window.open(`https://api.whatsapp.com/send?phone=5521993009478&text=${encodedMessage}`, '_blank');
  };

  // ----------------------------------------------------------------------
  // RENDER STEPS
  // ----------------------------------------------------------------------

  const renderStep = () => {
    // --- STEP: FINAL (CONFIRMATION) ---
    if (step === totalSteps) {
        return (
            <div className="text-center space-y-8 animate-fade-in py-8">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30 animate-pulse">
                    <CheckCircle2 size={48} className="text-white" />
                </div>
                
                <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Tudo Pronto!</h3>
                    <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
                        Ao clicar no botão abaixo, você será redirecionado para o <strong>WhatsApp</strong>. Nossa equipe receberá seu briefing estruturado e iniciará a análise imediatamente.
                    </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 max-w-md mx-auto text-left">
                     <p className="text-sm font-bold text-slate-900 mb-2 uppercase">Resumo:</p>
                     <p className="text-sm text-slate-600 mb-1"><strong>Cliente:</strong> {formData.name}</p>
                     <p className="text-sm text-slate-600 mb-1"><strong>Empresa:</strong> {formData.company}</p>
                     <p className="text-sm text-slate-600"><strong>Plano:</strong> {plan}</p>
                </div>

                <button 
                    onClick={handleSubmit}
                    className="w-full max-w-md bg-[#25D366] hover:bg-[#128C7E] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                    <Send size={24} /> Enviar Briefing no WhatsApp
                </button>
            </div>
        )
    }

    // --- STEP 1: CLIENT INFO (COMMON) ---
    if (step === 1) {
        return (
            <div className="space-y-6 animate-fade-in">
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-8 relative overflow-hidden">
                    <div className="relative z-10">
                        {isPerformance ? (
                            <>
                                <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-3">Solicitação de Suporte/Setup.</h3>
                                <p className="text-sm md:text-base text-blue-800 leading-relaxed">
                                    Mini briefing para solicitações avulsas ou do plano mensal. Preencha para agilizar o atendimento.
                                </p>
                            </>
                        ) : (
                            <>
                                <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-3">Vamos começar sua {isSiteCreation ? 'Presença Digital' : 'Landing Page'}.</h3>
                                <p className="text-sm md:text-base text-blue-800 leading-relaxed">
                                    Antes de iniciar o projeto, precisamos entender sua marca e seu objetivo. Preencha este briefing com atenção. Ele nos permite avaliar o escopo, propor as melhores ideias e agilizar todo o processo quando você chegar ao WhatsApp.
                                </p>
                            </>
                        )}
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-10">
                        <User size={120} className="text-blue-600" />
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Etapa 1: Identificação do Cliente</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-slate-500">Nome Completo</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-slate-500">Nome da Empresa / Marca</label>
                        <input name="company" value={formData.company} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    
                    {!isPerformance && (
                        <>
                             <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">CNPJ (Caso tenha)</label>
                                <input name="cnpj" value={formData.cnpj} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                        </>
                    )}

                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-slate-500">WhatsApp para contato</label>
                        <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    {!isPerformance && (
                        <>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">E-mail Comercial</label>
                                <input name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Site Atual (Caso exista)</label>
                                <input name="currentSite" value={formData.currentSite} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-xs font-bold uppercase text-slate-500">Redes Sociais da Marca</label>
                                <input name="socials" value={formData.socials} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Instagram, TikTok, YouTube..." />
                            </div>
                            {isSiteCreation && (
                                <div className="space-y-1 md:col-span-2">
                                    <label className="text-xs font-bold uppercase text-slate-500">Endereço Físico (Caso relevante)</label>
                                    <input name="address" value={formData.address} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        );
    }

    // --- STEP 2: PROJECT INFO ---
    if (step === 2) {
        if (isPerformance) {
             return (
                 <div className="space-y-6 animate-fade-in">
                    <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0"><Wrench size={20}/></div>
                        <div>
                            <h3 className="font-bold text-purple-900">Etapa 2: Tipo de Alteração</h3>
                            <p className="text-xs text-purple-600">Selecione o que deseja.</p>
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 block">Selecione os serviços:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                'Troca de textos', 
                                'Substituição de fotos', 
                                'Ajuste de cores', 
                                'Correção de informações',
                                'Criação de nova seção',
                                'Alteração de layout existente',
                                'Formulários complexos',
                                'Instalação de integrações',
                                'Configuração Tag Manager',
                                'Instalação Pixel',
                                'Otimização SEO Básica',
                                'Ajustes de Performance'
                            ].map((svc) => (
                                    <label key={svc} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${formData.perfServiceType.includes(svc) ? 'bg-purple-50 border-purple-200 text-purple-900' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}>
                                    <input 
                                        type="checkbox" 
                                        className="hidden" 
                                        checked={formData.perfServiceType.includes(svc)}
                                        onChange={() => handleCheckboxChange('perfServiceType', svc)}
                                    />
                                    {formData.perfServiceType.includes(svc) ? <CheckSquare size={16} /> : <div className="w-4 h-4 border border-slate-300 rounded sm:mr-0.5"></div>}
                                    <span className="text-sm font-medium">{svc}</span>
                                    </label>
                            ))}
                        </div>
                        <div className="space-y-1 mt-4">
                            <label className="text-xs font-bold uppercase text-slate-500">Outro tipo?</label>
                            <input name="perfOtherService" value={formData.perfOtherService} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Descreva..." />
                        </div>
                    </div>
                 </div>
             )
        }

        return (
            <div className="space-y-6 animate-fade-in">
                <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0"><Target size={20}/></div>
                    <div>
                        <h3 className="font-bold text-purple-900">Etapa 2: Sobre o Projeto</h3>
                        <p className="text-xs text-purple-600">Entendendo seu negócio.</p>
                    </div>
                </div>

                {isSiteCreation ? (
                    /* SITE QUESTIONS */
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">O que você busca criar?</label>
                            <select name="siteType" value={formData.siteType} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Site Institucional">Site Institucional</option>
                                <option value="Site Profissional">Site Profissional (Autônomos)</option>
                                <option value="Site Comercial">Site Comercial</option>
                                <option value="Catálogo de Produtos">Catálogo de Produtos</option>
                                <option value="Blog / Conteúdo">Blog / Conteúdo</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Objetivo Principal?</label>
                            <input name="siteObjective" value={formData.siteObjective} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Credibilidade, leads, vendas..." />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Descreva sua empresa/serviço</label>
                            <textarea name="siteDesc" value={formData.siteDesc} onChange={handleChange} rows={3} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Público-Alvo</label>
                            <input name="siteAudience" value={formData.siteAudience} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Proposta de Valor</label>
                            <input name="siteValueProp" value={formData.siteValueProp} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Por que escolher você?" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Diferenciais</label>
                            <textarea name="siteDifferentials" value={formData.siteDifferentials} onChange={handleChange} rows={2} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Tem textos prontos?</label>
                                <select name="siteTexts" value={formData.siteTexts} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                    <option value="Parcial">Parcial</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Conteúdo Obrigatório</label>
                                <input name="siteContent" value={formData.siteContent} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Vídeos, fotos, depoimentos..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                             <label className="text-xs font-bold uppercase text-slate-500 block">Quais páginas o site deve ter?</label>
                             <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                 {['Home', 'Sobre', 'Serviços', 'Produtos', 'Portfólio', 'Depoimentos', 'Blog', 'Contato', 'FAQ'].map((page) => (
                                      <label key={page} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${formData.sitePages.includes(page) ? 'bg-purple-900 text-white border-purple-900' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}>
                                         <input 
                                             type="checkbox" 
                                             className="hidden" 
                                             checked={formData.sitePages.includes(page)}
                                             onChange={() => handleCheckboxChange('sitePages', page)}
                                         />
                                         {formData.sitePages.includes(page) ? <CheckSquare size={16} /> : <div className="w-4 h-4 border border-slate-300 rounded sm:mr-0.5"></div>}
                                         <span className="text-sm font-medium">{page}</span>
                                      </label>
                                 ))}
                             </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Outras páginas específicas?</label>
                            <input name="siteCustomPages" value={formData.siteCustomPages} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Referências (Links)</label>
                            <input name="siteRefs" value={formData.siteRefs} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                    </div>
                ) : (
                    /* LANDING PAGE QUESTIONS */
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Objetivo Principal?</label>
                            <select name="lpObjective" value={formData.lpObjective} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Captar Leads">Captar Leads</option>
                                <option value="Vender Serviço">Vender Serviço</option>
                                <option value="Vender Produto">Vender Produto</option>
                                <option value="Agendamentos">Agendamentos</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Explique seu projeto</label>
                            <textarea name="lpProjectDesc" value={formData.lpProjectDesc} onChange={handleChange} rows={3} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Público-Alvo</label>
                            <input name="lpAudience" value={formData.lpAudience} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Idade, dores, desejos..." />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Já possui oferta definida? Qual?</label>
                            <input name="lpOffer" value={formData.lpOffer} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Sim/Não - Explique" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Proposta de Valor</label>
                            <input name="lpValueProp" value={formData.lpValueProp} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Por que você?" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Diferenciais</label>
                            <textarea name="lpDifferentials" value={formData.lpDifferentials} onChange={handleChange} rows={2} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Material obrigatório na página</label>
                            <input name="lpMaterial" value={formData.lpMaterial} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Vídeos, fotos, depoimentos..." />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Liste seus serviços/produtos</label>
                            <textarea name="lpServices" value={formData.lpServices} onChange={handleChange} rows={2} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Ação final do visitante (CTA)</label>
                            <input name="lpAction" value={formData.lpAction} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Ir p/ WhatsApp, Comprar, Baixar..." />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Já possui Copy (Textos)?</label>
                            <select name="lpCopy" value={formData.lpCopy} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Estrutura/Modelo de preferência (Links)</label>
                            <input name="lpRefs" value={formData.lpRefs} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // --- STEP 3: VISUAL (OR PERFORMANCE DETAILS) ---
    if (step === 3) {
        if (isPerformance) {
            return (
                 <div className="space-y-6 animate-fade-in">
                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0"><FileText size={20}/></div>
                        <div>
                            <h3 className="font-bold text-amber-900">Etapa 3: Detalhamento</h3>
                            <p className="text-xs text-amber-600">Explique a solicitação.</p>
                        </div>
                    </div>
                    
                     <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Explique o que deseja alterar/adicionar</label>
                            <textarea name="perfDetails" value={formData.perfDetails} onChange={handleChange} rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Links/Páginas específicas do ajuste</label>
                            <input name="perfLinks" value={formData.perfLinks} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Ex: mypages.site/sobre" />
                        </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Possui novos materiais? (Drive/Link)</label>
                            <input name="perfMaterials" value={formData.perfMaterials} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Cole o link aqui" />
                        </div>
                     </div>
                 </div>
            )
        }

        return (
            <div className="space-y-6 animate-fade-in">
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0"><Palette size={20}/></div>
                    <div>
                        <h3 className="font-bold text-amber-900">Etapa 3: Identidade Visual</h3>
                        <p className="text-xs text-amber-600">O estilo da sua marca.</p>
                    </div>
                </div>

                {isSiteCreation ? (
                     /* SITE VISUAL */
                     <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Identidade visual pronta?</label>
                            <select name="siteVisualId" value={formData.siteVisualId} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                        {formData.siteVisualId === 'Sim' && (
                             <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Arquivos (Logo, Cores...)</label>
                                <input name="siteVisualFiles" value={formData.siteVisualFiles} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Links..." />
                            </div>
                        )}
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Estilo Visual</label>
                            <select name="siteVisualStyle" value={formData.siteVisualStyle} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Moderno/Clean">Moderno/Clean</option>
                                <option value="Corporativo">Corporativo</option>
                                <option value="Minimalista">Minimalista</option>
                                <option value="Criativo">Criativo</option>
                                <option value="Premium">Premium</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Referências Visuais</label>
                            <input name="siteVisualRefs" value={formData.siteVisualRefs} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">O que NÃO quer no visual?</label>
                            <input name="siteDislikes" value={formData.siteDislikes} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Preferência de Balanço</label>
                            <select name="siteBalance" value={formData.siteBalance} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Mais visual/imagens">Mais visual/imagens</option>
                                <option value="Mais textual">Mais textual</option>
                                <option value="Equilibrado">Equilibrado</option>
                            </select>
                        </div>
                     </div>
                ) : (
                    /* LP VISUAL */
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Identidade visual definida?</label>
                            <select name="lpVisualId" value={formData.lpVisualId} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                         {formData.lpVisualId === 'Sim' && (
                             <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Arquivos (Logo, Cores...)</label>
                                <input name="lpVisualFiles" value={formData.lpVisualFiles} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Links..." />
                            </div>
                        )}
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Estilo Visual</label>
                            <select name="lpVisualStyle" value={formData.lpVisualStyle} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Moderno">Moderno</option>
                                <option value="Minimalista">Minimalista</option>
                                <option value="Clean">Clean</option>
                                <option value="Criativo">Criativo</option>
                                <option value="Corporativo">Corporativo</option>
                                <option value="Premium">Premium</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Referências Visuais</label>
                            <input name="lpVisualRefs" value={formData.lpVisualRefs} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">A LP deve seguir qual caminho?</label>
                            <select name="lpVisualPath" value={formData.lpVisualPath} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Mais persuasiva e emocional">Mais persuasiva e emocional</option>
                                <option value="Mais técnica e direta">Mais técnica e direta</option>
                                <option value="Mais visual e dinâmica">Mais visual e dinâmica</option>
                                <option value="Mistura de tudo">Mistura de tudo</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Alguma cor/estilo que NÃO quer?</label>
                            <input name="lpDislikes" value={formData.lpDislikes} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // --- STEP 4: FUNCTIONALITIES (OR PERFORMANCE URGENCY) ---
    if (step === 4) {
         if (isPerformance) {
             return (
                 <div className="space-y-6 animate-fade-in">
                    <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0"><DollarSign size={20}/></div>
                        <div>
                            <h3 className="font-bold text-green-900">Etapa 4: Comercial e Prazo</h3>
                            <p className="text-xs text-green-600">Definição do modelo.</p>
                        </div>
                    </div>
                    
                     <div className="space-y-4">
                        <div className="space-y-1">
                             <label className="text-xs font-bold uppercase text-slate-500">Tipo de Contratação</label>
                             <select name="perfRequestType" value={formData.perfRequestType} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Plano Mensal">Plano Mensal</option>
                                <option value="Serviço Avulso">Serviço Avulso</option>
                            </select>
                         </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Qual o prazo ideal?</label>
                            <select name="perfUrgency" value={formData.perfUrgency} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Normal">Normal</option>
                                <option value="Rápido">Rápido</option>
                                <option value="Urgente">Urgente</option>
                            </select>
                        </div>
                     </div>
                 </div>
             )
         }

        return (
             <div className="space-y-6 animate-fade-in">
                 <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 shrink-0"><Settings size={20}/></div>
                    <div>
                       <h3 className="font-bold text-slate-900">Etapa 4: Funcionalidades e Estrutura</h3>
                       <p className="text-xs text-slate-600">Recursos técnicos.</p>
                    </div>
                 </div>

                 {isSiteCreation ? (
                     /* SITE FUNCTIONALITIES */
                     <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Formulário de Contato?</label>
                                <select name="siteForm" value={formData.siteForm} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>
                            {formData.siteForm === 'Sim' && (
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-slate-500">Quais campos?</label>
                                    <input name="siteFormFields" value={formData.siteFormFields} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" placeholder="Nome, email..." />
                                </div>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                             <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Área de Blog?</label>
                                <select name="siteBlog" value={formData.siteBlog} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Catálogo de Produtos?</label>
                                <select name="siteCatalog" value={formData.siteCatalog} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 block">Integrações?</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['WhatsApp', 'Chat Online', 'Email / Leads', 'CRM', 'Agenda', 'Pagamento'].map((integ) => (
                                        <label key={integ} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${formData.siteIntegrations.includes(integ) ? 'bg-slate-800 text-white border-slate-800' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}>
                                        <input 
                                            type="checkbox" 
                                            className="hidden" 
                                            checked={formData.siteIntegrations.includes(integ)}
                                            onChange={() => handleCheckboxChange('siteIntegrations', integ)}
                                        />
                                        {formData.siteIntegrations.includes(integ) ? <CheckSquare size={16} /> : <div className="w-4 h-4 border border-slate-300 rounded sm:mr-0.5"></div>}
                                        <span className="text-sm font-medium">{integ}</span>
                                        </label>
                                ))}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Mapa Google?</label>
                                <select name="siteMaps" value={formData.siteMaps} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Integração Redes Sociais?</label>
                                <input name="siteSocials" value={formData.siteSocials} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" placeholder="Insta, TikTok..." />
                            </div>
                        </div>
                        <div className="space-y-1">
                             <label className="text-xs font-bold uppercase text-slate-500">Páginas Protegidas/Restritas?</label>
                             <input name="siteProtected" value={formData.siteProtected} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" placeholder="Sim/Não - Explique" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                             <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Multilíngue?</label>
                                <input name="siteMultilingual" value={formData.siteMultilingual} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" placeholder="Sim/Não - Idiomas" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Hospedagem</label>
                                <select name="siteHosting" value={formData.siteHosting} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Cliente fornece">Cliente fornece</option>
                                    <option value="Agência fornece">Agência fornece</option>
                                    <option value="Não sei">Não sei</option>
                                </select>
                            </div>
                        </div>
                     </div>
                 ) : (
                     /* LP FUNCTIONALITIES */
                     <div className="space-y-4">
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 block">Seções Obrigatórias</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['Hero (Cabeçalho)', 'Sobre', 'Benefícios', 'Depoimentos', 'Portfólio', 'Explicação Serviço', 'FAQ', 'Contato', 'Rodapé'].map((sec) => (
                                        <label key={sec} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${formData.lpSections.includes(sec) ? 'bg-slate-800 text-white border-slate-800' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}>
                                        <input 
                                            type="checkbox" 
                                            className="hidden" 
                                            checked={formData.lpSections.includes(sec)}
                                            onChange={() => handleCheckboxChange('lpSections', sec)}
                                        />
                                        {formData.lpSections.includes(sec) ? <CheckSquare size={16} /> : <div className="w-4 h-4 border border-slate-300 rounded sm:mr-0.5"></div>}
                                        <span className="text-sm font-medium">{sec}</span>
                                        </label>
                                ))}
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 block">Integrações?</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['WhatsApp', 'Email', 'CRM', 'Pagamento'].map((integ) => (
                                        <label key={integ} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${formData.lpIntegrations.includes(integ) ? 'bg-slate-800 text-white border-slate-800' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}>
                                        <input 
                                            type="checkbox" 
                                            className="hidden" 
                                            checked={formData.lpIntegrations.includes(integ)}
                                            onChange={() => handleCheckboxChange('lpIntegrations', integ)}
                                        />
                                        {formData.lpIntegrations.includes(integ) ? <CheckSquare size={16} /> : <div className="w-4 h-4 border border-slate-300 rounded sm:mr-0.5"></div>}
                                        <span className="text-sm font-medium">{integ}</span>
                                        </label>
                                ))}
                            </div>
                         </div>
                         <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Versão Multilíngue?</label>
                                <select name="lpMultilingual" value={formData.lpMultilingual} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500">Prazo de Entrega/Urgência</label>
                                <select name="lpUrgency" value={formData.lpUrgency} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                    <option value="">Selecione...</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Rápida">Rápida</option>
                                    <option value="Urgente">Urgente</option>
                                </select>
                            </div>
                         </div>
                     </div>
                 )}
             </div>
        );
    }

    // --- STEP 5: SITE (STRUCTURE) OR LP (SEO) ---
    if (step === 5) {
        if (isSiteCreation) {
            return (
                <div className="space-y-6 animate-fade-in">
                     <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 shrink-0"><Layout size={20}/></div>
                        <div>
                           <h3 className="font-bold text-slate-900">Etapa 5: Estrutura e Conteúdo</h3>
                           <p className="text-xs text-slate-600">Organização das páginas.</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Como imagina a estrutura do site?</label>
                            <textarea name="siteStructureImagine" value={formData.siteStructureImagine} onChange={handleChange} rows={3} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" placeholder="Menu, navegação..." />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Detalhe o conteúdo de cada página</label>
                            <textarea name="sitePageDetails" value={formData.sitePageDetails} onChange={handleChange} rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" placeholder="Ex: Página Serviços deve ter..." />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Fotos/Vídeos</label>
                            <select name="siteMediaSource" value={formData.siteMediaSource} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Tenho material próprio">Tenho material próprio</option>
                                <option value="Quero banco de imagens">Quero banco de imagens</option>
                                <option value="Misturar os dois">Misturar os dois</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Deseja animações leves?</label>
                             <select name="siteAnimations" value={formData.siteAnimations} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                             <label className="text-xs font-bold uppercase text-slate-500">Concorrente para superar?</label>
                             <input name="siteCompetitor" value={formData.siteCompetitor} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" />
                        </div>
                     </div>
                </div>
            )
        } else {
            // LP STEP 5: SEO
            return (
                 <div className="space-y-6 animate-fade-in">
                     <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0"><Search size={20}/></div>
                        <div>
                           <h3 className="font-bold text-blue-900">Etapa 5: SEO e Estratégia</h3>
                           <p className="text-xs text-blue-600">Rastreamento e busca.</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Otimizar para SEO básico?</label>
                            <select name="lpSeo" value={formData.lpSeo} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Palavras-chave desejadas?</label>
                            <input name="lpKeywords" value={formData.lpKeywords} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Sim/Não - Liste" />
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Como quer ser encontrado no Google?</label>
                            <input name="lpGoogleIntent" value={formData.lpGoogleIntent} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ex: Nutricionista em SP" />
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Integração Analytics/Tag Manager?</label>
                            <select name="lpAnalytics" value={formData.lpAnalytics} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Google Analytics">Google Analytics</option>
                                <option value="Google Tag Manager">Google Tag Manager</option>
                                <option value="Nenhum">Nenhum</option>
                            </select>
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Pixels de Anúncios?</label>
                            <input name="lpPixels" value={formData.lpPixels} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Meta, TikTok, Google Ads..." />
                         </div>
                         <div className="space-y-1">
                             <label className="text-xs font-bold uppercase text-slate-500">Campanha de tráfego ativa?</label>
                             <input name="lpCampaigns" value={formData.lpCampaigns} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Sim/Não - Qual?" />
                         </div>
                     </div>
                 </div>
            )
        }
    }

    // --- STEP 6: SITE (SEO) OR LP (COMMERCIAL) ---
    if (step === 6) {
        if (isSiteCreation) {
            return (
                 <div className="space-y-6 animate-fade-in">
                     <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0"><Search size={20}/></div>
                        <div>
                           <h3 className="font-bold text-blue-900">Etapa 6: SEO e Estratégia</h3>
                           <p className="text-xs text-blue-600">Rastreamento e busca.</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Otimizar para SEO básico?</label>
                            <select name="siteSeo" value={formData.siteSeo} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Lista de palavras-chave?</label>
                            <input name="siteKeywords" value={formData.siteKeywords} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Sim/Não - Liste" />
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Como quer ser encontrado no Google?</label>
                            <input name="siteGoogleIntent" value={formData.siteGoogleIntent} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ex: Eletricista SP" />
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Integração Analytics?</label>
                            <select name="siteAnalytics" value={formData.siteAnalytics} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                         </div>
                     </div>
                 </div>
            )
        } else {
            // LP STEP 6: COMMERCIAL
            return (
                 <div className="space-y-6 animate-fade-in">
                    <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0"><DollarSign size={20}/></div>
                        <div>
                            <h3 className="font-bold text-green-900">Etapa 6: Comercial e Orçamento</h3>
                            <p className="text-xs text-green-600">Alinhamento de investimento.</p>
                        </div>
                    </div>
                    
                     <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Investimento Estimado?</label>
                            <select name="lpBudget" value={formData.lpBudget} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Até R$ 500">Até R$ 500</option>
                                <option value="R$ 500 a R$ 1.000">R$ 500 a R$ 1.000</option>
                                <option value="R$ 1.000 a R$ 2.000">R$ 1.000 a R$ 2.000</option>
                                <option value="Acima de R$ 2.000">Acima de R$ 2.000</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Precisa de manutenção mensal?</label>
                            <select name="lpMaintenance" value={formData.lpMaintenance} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                                <option value="Talvez">Talvez</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                             <label className="text-xs font-bold uppercase text-slate-500">Urgência de contratação?</label>
                             <select name="lpHiringUrgency" value={formData.lpHiringUrgency} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Hoje">Hoje</option>
                                <option value="Esta semana">Esta semana</option>
                                <option value="Este mês">Este mês</option>
                                <option value="Estou apenas avaliando">Estou apenas avaliando</option>
                            </select>
                        </div>
                     </div>
                 </div>
            )
        }
    }

    // --- STEP 7: SITE (COMMERCIAL) ---
    if (step === 7) {
        if (isSiteCreation) {
            return (
                 <div className="space-y-6 animate-fade-in">
                    <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0"><DollarSign size={20}/></div>
                        <div>
                            <h3 className="font-bold text-green-900">Etapa 7: Prazo e Investimento</h3>
                            <p className="text-xs text-green-600">Alinhamento final.</p>
                        </div>
                    </div>
                    
                     <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Prazo ideal para entrega?</label>
                            <select name="siteDeadline" value={formData.siteDeadline} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Normal">Normal</option>
                                <option value="Rápido">Rápido</option>
                                <option value="Urgente">Urgente</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Investimento Estimado?</label>
                            <select name="siteBudget" value={formData.siteBudget} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Até R$ 1.000">Até R$ 1.000</option>
                                <option value="R$ 1.000 a R$ 2.000">R$ 1.000 a R$ 2.000</option>
                                <option value="R$ 2.000 a R$ 4.000">R$ 2.000 a R$ 4.000</option>
                                <option value="Acima de R$ 4.000">Acima de R$ 4.000</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Projeto aprovado internamente?</label>
                            <select name="siteApproval" value={formData.siteApproval} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500">Manutenção mensal após entrega?</label>
                            <select name="siteMaintenance" value={formData.siteMaintenance} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                                <option value="Talvez">Talvez</option>
                            </select>
                        </div>
                     </div>
                 </div>
            )
        }
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in font-sans text-slate-900 pb-20">
      {/* Header Sticky */}
      <header className="bg-slate-900 text-white py-6 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Cancelar
          </button>
          <div className="text-right">
             <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Briefing Inicial</p>
             <p className="font-bold text-white text-sm">{plan}</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Progress Bar */}
        <div className="mb-8">
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Início</span>
                <span>{Math.round((step / totalSteps) * 100)}% Concluído</span>
            </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            {renderStep()}
        </div>

        {/* Navigation Buttons */}
        {step < totalSteps && (
            <div className="flex justify-between mt-8">
                <button 
                    onClick={handlePrev}
                    disabled={step === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}
                >
                    <ChevronLeft size={18} /> Voltar
                </button>

                <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Próxima Etapa <ChevronRight size={18} />
                </button>
            </div>
        )}

      </main>
    </div>
  );
};
