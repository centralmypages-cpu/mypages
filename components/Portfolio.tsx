
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, X, Smartphone, Monitor, Tag, Sparkles, Layout } from 'lucide-react';
import { MyPagesLogo } from './MyPagesLogo';

interface PortfolioProps {
  onBack: () => void;
  onNavigateToPlans: () => void;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  tags: string[];
  device: 'mobile' | 'desktop';
  url: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 3,
    title: "Silva & Associados",
    category: "Sites Institucionais",
    description: "\"O site mudou a percepção do escritório. O cliente já chega na reunião sabendo da nossa autoridade, o que facilitou muito fechar contratos de maior valor.\"",
    images: ["https://i.pinimg.com/736x/65/dc/88/65dc88f3800d03d3251f6ee58c7ae712.jpg"],
    tags: ["Advocacia", "Institucional", "Premium"],
    device: "mobile",
    url: "#",
    featured: true
  },
  {
    id: 6,
    title: "Odonto Premium",
    category: "Páginas de Vendas",
    description: "\"Em duas semanas minha agenda de implantes lotou. A página já tira as dúvidas principais, então o paciente chega praticamente pronto para fechar.\"",
    images: ["https://i.pinimg.com/736x/ef/6d/1c/ef6d1cd4eeb4108982901a73f1c2f498.jpg"],
    tags: ["Odonto", "Saúde", "High Ticket"],
    device: "mobile",
    url: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div className="animate-slide-up group cursor-pointer mb-12" onClick={onClick}>
        <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row hover:border-white/20 transition-all duration-500">
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 bg-slate-800">
                    {project.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
                    {project.title}
                </h2>
                <p className="text-slate-300 italic mb-8 border-l-2 border-indigo-500 pl-4">
                    {project.description}
                </p>
                <button className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:text-indigo-400 transition-colors">
                    Ver Detalhes <ArrowUpRight size={16} />
                </button>
            </div>
            <div className="lg:w-1/2 bg-zinc-800 h-[400px] flex items-center justify-center p-8">
                <img src={project.images[0]} alt={project.title} className="max-w-full max-h-full rounded-xl shadow-2xl" />
            </div>
        </div>
    </div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ onBack, onNavigateToPlans }) => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredProjects = activeFilter === "Todos" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 px-6">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <button onClick={onBack} className="text-slate-400 hover:text-white flex items-center gap-2 font-bold uppercase text-xs">
            <ArrowLeft size={14}/> Voltar
          </button>
          <MyPagesLogo className="w-6 h-6 text-white" />
        </div>
      </header>
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-[1800px] mx-auto">
        <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6">CASES.</h1>
            <div className="flex flex-wrap gap-2">
                {["Todos", "Páginas de Vendas", "Sites Institucionais"].map((f) => (
                    <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase border transition-all ${activeFilter === f ? "bg-white text-black border-white" : "border-white/10 text-slate-500"}`}>{f}</button>
                ))}
            </div>
        </div>
        <div>
            {filteredProjects.map((p) => (
                <ProjectCard key={p.id} project={p} onClick={() => {}} />
            ))}
        </div>
      </main>
    </div>
  );
};
