import React, { useState } from 'react';
import { X, LayoutDashboard, MessageSquare, RefreshCcw, Globe, BarChart3, LogOut, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface ClientPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'dashboard' | 'support' | 'updates' | 'domain' | 'reports';

export const ClientPortal: React.FC<ClientPortalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating login delay
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-900">Visão Geral</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-600">Status do Site</h3>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                <p className="text-2xl font-bold text-slate-900">Online</p>
                <p className="text-xs text-slate-400 mt-2">Uptime: 99.9%</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-600">Plano Ativo</h3>
                  <RefreshCcw className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">Premium</p>
                <p className="text-xs text-slate-400 mt-2">Renova em: 15 dias</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-600">Visitas (Mês)</h3>
                  <BarChart3 className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">12.4k</p>
                <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
                  <span className="text-[10px]">▲</span> 12% vs mês anterior
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Atividade Recente</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <MessageSquare size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">Ticket #2024 Fechado</p>
                    <p className="text-xs text-slate-500">Alteração de texto na Home realizada.</p>
                  </div>
                  <span className="text-xs text-slate-400">Há 2 horas</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <RefreshCcw size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">Backup Realizado</p>
                    <p className="text-xs text-slate-500">Backup semanal automático.</p>
                  </div>
                  <span className="text-xs text-slate-400">Ontem</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-900">Suporte Técnico</h2>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
               <label className="block text-sm font-medium text-slate-700 mb-2">Novo Chamado</label>
               <textarea 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl mb-4 focus:ring-2 focus:ring-brand-500 outline-none" 
                  rows={4}
                  placeholder="Descreva seu problema ou solicitação..."
                ></textarea>
                <div className="flex justify-between items-center">
                   <div className="text-xs text-slate-400">Tempo médio de resposta: 2 horas</div>
                   <Button size="sm">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Solicitação
                   </Button>
                </div>
            </div>
            
            <div className="space-y-3">
               <h3 className="font-bold text-slate-900">Histórico</h3>
               <div className="border border-slate-100 rounded-xl overflow-hidden">
                  <div className="bg-slate-50 p-4 grid grid-cols-12 gap-4 text-xs font-bold text-slate-500 uppercase">
                    <div className="col-span-2">ID</div>
                    <div className="col-span-6">Assunto</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Data</div>
                  </div>
                  <div className="p-4 grid grid-cols-12 gap-4 text-sm text-slate-700 border-t border-slate-100 items-center hover:bg-slate-50 transition-colors">
                    <div className="col-span-2 font-mono text-slate-400">#4920</div>
                    <div className="col-span-6 font-medium">Erro no formulário de contato</div>
                    <div className="col-span-2"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Resolvido</span></div>
                    <div className="col-span-2 text-right text-slate-400">12/03/24</div>
                  </div>
                  <div className="p-4 grid grid-cols-12 gap-4 text-sm text-slate-700 border-t border-slate-100 items-center hover:bg-slate-50 transition-colors">
                    <div className="col-span-2 font-mono text-slate-400">#4918</div>
                    <div className="col-span-6 font-medium">Dúvida sobre Analytics</div>
                    <div className="col-span-2"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Resolvido</span></div>
                    <div className="col-span-2 text-right text-slate-400">10/03/24</div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'updates':
        return (
          <div className="space-y-6 animate-fade-in">
             <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Solicitar Atualizações</h2>
                <span className="text-sm bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-bold">Saldo: Ilimitado</span>
             </div>
             
             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-500 transition-colors cursor-pointer group">
                   <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors">
                      <RefreshCcw className="w-6 h-6 text-brand-600 group-hover:text-white" />
                   </div>
                   <h3 className="font-bold text-slate-900 mb-2">Alteração de Conteúdo</h3>
                   <p className="text-sm text-slate-500">Trocar textos, preços, telefones ou endereços.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-500 transition-colors cursor-pointer group">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <LayoutDashboard className="w-6 h-6 text-blue-600 group-hover:text-white" />
                   </div>
                   <h3 className="font-bold text-slate-900 mb-2">Nova Seção</h3>
                   <p className="text-sm text-slate-500">Adicionar uma nova área ou bloco na sua página.</p>
                </div>
             </div>

             <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                   Para redesign completo ou novas páginas, consulte seu gerente de conta para um orçamento especial.
                </p>
             </div>
          </div>
        );
      case 'domain':
        return (
           <div className="space-y-6 animate-fade-in">
             <h2 className="text-2xl font-bold text-slate-900">Gerenciamento de Domínio</h2>
             <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-slate-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">seunegocio.com.br</h3>
                 <p className="text-slate-500 mb-6">Provedor: Google Domains • SSL Ativo</p>
                 <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm">Configurar DNS</Button>
                    <Button variant="outline" size="sm">Gerenciar Emails</Button>
                 </div>
             </div>
             <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center justify-between">
                 <div>
                    <h4 className="font-bold">Precisa trocar de domínio?</h4>
                    <p className="text-sm text-slate-400">Nossa equipe técnica faz a migração segura.</p>
                 </div>
                 <Button variant="white" size="sm">Solicitar Troca</Button>
             </div>
           </div>
        );
      case 'reports':
        return (
            <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-900">Relatórios de Performance</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-40 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm">
                        Gráfico de Visitantes
                    </div>
                    <div className="h-40 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm">
                        Origem de Tráfego
                    </div>
                    <div className="h-40 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm">
                        Taxa de Conversão
                    </div>
                    <div className="h-40 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm">
                        Dispositivos
                    </div>
                </div>
                <div className="text-center">
                    <Button variant="outline">Baixar Relatório PDF Completo</Button>
                </div>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-5xl h-[80vh] rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row animate-slide-up">
        {/* Close Button Mobile */}
        <button onClick={onClose} className="absolute top-4 right-4 md:hidden p-2 bg-slate-100 rounded-full text-slate-500 z-50">
            <X size={20} />
        </button>

        {!isLoggedIn ? (
          /* LOGIN SCREEN */
          <div className="w-full h-full flex items-center justify-center bg-slate-50">
             <div className="max-w-md w-full p-8">
                 <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Área do Cliente</h2>
                    <p className="text-slate-500">Acesse para gerenciar seu site e solicitar suporte.</p>
                 </div>
                 <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-600 outline-none" 
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Senha</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-600 outline-none" 
                            placeholder="••••••••"
                        />
                    </div>
                    <Button type="submit" isLoading={loading} className="w-full mt-4">
                        Entrar no Portal
                    </Button>
                 </form>
                 <div className="mt-6 text-center">
                     <p className="text-xs text-slate-400">Esqueceu sua senha? Entre em contato via WhatsApp.</p>
                 </div>
             </div>
          </div>
        ) : (
          /* DASHBOARD LAYOUT */
          <>
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-slate-900 text-white flex flex-col justify-between flex-shrink-0">
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-10">
                        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold">M</div>
                        <span className="font-bold text-lg">MyPages</span>
                    </div>
                    
                    <nav className="space-y-2">
                        <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                            <LayoutDashboard size={18} />
                            <span className="font-medium text-sm">Visão Geral</span>
                        </button>
                        <button onClick={() => setActiveTab('support')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'support' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                            <MessageSquare size={18} />
                            <span className="font-medium text-sm">Suporte</span>
                        </button>
                        <button onClick={() => setActiveTab('updates')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'updates' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                            <RefreshCcw size={18} />
                            <span className="font-medium text-sm">Ajustes & Updates</span>
                        </button>
                        <button onClick={() => setActiveTab('domain')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'domain' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                            <Globe size={18} />
                            <span className="font-medium text-sm">Domínio</span>
                        </button>
                        <button onClick={() => setActiveTab('reports')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'reports' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                            <BarChart3 size={18} />
                            <span className="font-medium text-sm">Relatórios</span>
                        </button>
                    </nav>
                </div>

                <div className="p-6 border-t border-slate-800">
                    <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                        <LogOut size={16} />
                        Sair
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden relative">
                 {/* Top Bar */}
                 <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0">
                    <h1 className="font-bold text-slate-700 capitalize">{activeTab === 'dashboard' ? 'Visão Geral' : activeTab}</h1>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-slate-900">Empresa Exemplo Ltda</p>
                            <p className="text-xs text-slate-500">Plano Business</p>
                        </div>
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                            <img src="https://i.pravatar.cc/150?img=68" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors ml-2">
                            <X size={20} className="text-slate-400" />
                        </button>
                    </div>
                 </div>

                 {/* Scrollable Content */}
                 <div className="flex-1 overflow-y-auto p-8">
                    {renderContent()}
                 </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
