
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
    images: [
        "https://i.pinimg.com/736x/65/dc/88/65dc88f3800d03d3251f6ee58c7ae712.jpg",
        "https://i.pinimg.com/736x/bb/96/ed/bb96edf643806b20721968c936145b5f.jpg",
        "https://i.pinimg.com/736x/66/0b/a5/660ba5c613e4f92871d04e4a41a3773c.jpg",
        "https://i.pinimg.com/736x/4f/e9/e4/4fe9e498d513c8337f1e2b1a561e4b85.jpg"
    ],
    tags: ["Advocacia", "Institucional", "Premium", "Corporativo"],
    device: "mobile",
    url: "#",
    featured: true
  },
  {
    id: 5,
    title: "Nexus Consultoria",
    category: "Sites Institucionais",
    description: "\"No nosso mercado, imagem é credibilidade. A MyPages entregou um site sóbrio e robusto, exatamente o que precisávamos para passar confiança aos investidores.\"",
    images: [
        "https://i.pinimg.com/736x/a3/de/04/a3de0443947e2dc4bcf4058c1abaada8.jpg",
        "https://i.pinimg.com/736x/c6/f6/c5/c6f6c53fe13f678db1d0d962645bf6e9.jpg",
        "https://i.pinimg.com/736x/01/af/1a/01af1a43fc30b2d0670959373d472b2b.jpg",
        "https://i.pinimg.com/736x/80/b4/ef/80b4efa13fcae690970f20d471c23688.jpg",
        "https://i.pinimg.com/736x/25/49/c3/2549c30ee098f1d046ce847b27479698.jpg"
    ],
    tags: ["B2B", "Consultoria", "Financeiro", "Dark Mode"],
    device: "mobile",
    url: "#"
  },
  {
    id: 6,
    title: "Odonto Premium",
    category: "Landing Pages",
    description: "\"Em duas semanas minha agenda de implantes lotou. A página já tira as dúvidas principais, então o paciente chega no consultório praticamente pronto para fechar.\"",
    images: [
        "https://i.pinimg.com/736x/ef/6d/1c/ef6d1cd4eeb4108982901a73f1c2f498.jpg",
        "https://i.pinimg.com/736x/39/3a/08/393a087d2db2cdec1f2db7f446808368.jpg",
        "https://i.pinimg.com/736x/e7/b9/f3/e7b9f3dc7eee7f768f7a263a6c3c065e.jpg",
        "https://i.pinimg.com/736x/bb/2d/7c/bb2d7cc96a400f15f10843ed38d22e90.jpg",
        "https://i.pinimg.com/736x/24/f7/83/24f783865705886cf576d37dd4e8794c.jpg"
    ],
    tags: ["Odonto", "Implantes", "Saúde", "High Ticket"],
    device: "mobile",
    url: "#"
  },
  {
    id: 1,
    title: "Dr. Ricardo Silva",
    category: "Landing Pages",
    description: "\"Meus pacientes sempre comentam como ficou fácil achar as informações. O design ficou limpo e passa a segurança que um médico precisa transmitir.\"",
    images: [
        "https://i.pinimg.com/736x/85/0b/c1/850bc1fc1d2422f8c76dff9aa35c10c3.jpg",
        "https://i.pinimg.com/736x/5f/6d/08/5f6d0806a22ae1775bfd8765eb64d704.jpg",
        "https://i.pinimg.com/736x/33/b2/62/33b26297a85613d45042826ac25df069.jpg",
        "https://i.pinimg.com/736x/f1/ea/6c/f1ea6c06a8b6e3f84fdbe6ecf1faa2f9.jpg"
    ],
    tags: ["Médico", "Agendamento", "Clean", "Cardiologia"],
    device: "mobile",
    url: "#"
  },
  {
    id: 2,
    title: "Luminous Estética",
    category: "Sites Institucionais",
    description: "\"Ficou a cara da clínica! Super elegante e clean. As clientes amaram e a facilidade de agendar pelo WhatsApp fez toda a diferença no nosso dia a dia.\"",
    images: [
        "https://i.pinimg.com/736x/57/67/8b/57678b4039376f5d25e45eb92b23648e.jpg",
        "https://i.pinimg.com/736x/7d/5e/a1/7d5ea1e83825bce5bc9576b0a8bebe31.jpg",
        "https://i.pinimg.com/736x/7a/a0/f0/7aa0f0f4985709f21956357b70ef8956.jpg",
        "https://i.pinimg.com/736x/32/a2/93/32a29305aa8bfb8832fa01db6da02b7c.jpg",
        "https://i.pinimg.com/736x/89/85/2d/89852d80792df1a4ac0bd1f4f05bfd03.jpg",
        "https://i.pinimg.com/736x/dd/14/8f/dd148f33763634c2be332af08bf2bbcb.jpg"
    ],
    tags: ["Estética", "Premium", "Minimalista", "Beleza"],
    device: "mobile",
    url: "#"
  },
  {
    id: 4,
    title: "Coach Alex",
    category: "Landing Pages",
    description: "\"O visual Dark ficou animal, conectou direto com meu público. A galera entra no site e já entende que é um serviço de alta performance. As vendas decolaram.\"",
    images: [
        "https://i.pinimg.com/736x/7b/80/c5/7b80c577606abba2181362c13ed9edfc.jpg",
        "https://i.pinimg.com/736x/c8/58/7a/c8587a3a0ec6a9a2b02d8f0c27afce65.jpg",
        "https://i.pinimg.com/736x/fd/f1/78/fdf178bacd06bb8b72870206f0c728c4.jpg",
        "https://i.pinimg.com/736x/6b/9e/fa/6b9efacdd158f52bdeaf3b5fa29f9d1a.jpg"
    ],
    tags: ["Fitness", "High Ticket", "Dark Mode", "Vendas"],
    device: "mobile",
    url: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 4000); 
        return () => clearInterval(interval);
    }
  }, [project.images.length]);

  return (
    <div className="animate-slide-up group cursor-pointer mb-12 last:mb-0" onClick={onClick}>
        <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row hover:border-white/20 transition-colors duration-500 shadow-sm hover:shadow-xl">
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-zinc-900">
                <div className="mb-4">
                    <span className={`inline-block text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 shadow-md ${
                        project.category === 'Landing Pages' ? 'bg-slate-800' : 'bg-indigo-600'
                    }`}>
                        {project.category}
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                        {project.title}
                    </h2>
                    <div className="relative pl-4 border-l-2 border-indigo-500/50">
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed italic">
                            {project.description}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8 mt-6">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
                <button className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:text-indigo-400 transition-colors">
                    Ver Projeto <ArrowUpRight size={16} />
                </button>
            </div>
            <div className="lg:w-1/2 relative h-[400px] lg:h-[500px] overflow-hidden bg-zinc-800/50">
                {project.images.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 p-6 md:p-8 transition-all duration-[2000ms] ease-in-out flex items-center justify-center ${
                            index === currentImageIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                        }`}
                    >
                        <img src={img} alt={`${project.title} ${index + 1}`} className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl rounded-xl" />
                    </div>
                ))}
                {project.images.length > 1 && (
                    <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                        {project.images.map((_, idx) => (
                            <div key={idx} className={`h-1.5 rounded-full transition-all duration-[1500ms] shadow-sm ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}></div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ onBack, onNavigateToPlans }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("Todos");
  
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const filteredProjects = activeFilter === "Todos" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 px-6 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <button onClick={onBack} className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform"/> 
            </div>
            <span>Voltar</span>
          </button>
          <div className="flex items-center gap-3">
             <MyPagesLogo className="w-6 h-6 text-white" />
             <span className="font-bold text-white text-lg tracking-tight hidden sm:inline">Galeria</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8 max-w-[1800px] mx-auto">
        <div className="mb-12 flex flex-col justify-between gap-8 animate-fade-in border-b border-white/10 pb-8">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">CASES.</span>
            </h1>
            <div className="flex flex-wrap gap-2 pt-4">
                {["Todos", "Landing Pages", "Sites Institucionais"].map((filter) => (
                    <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeFilter === filter ? "bg-white text-black border-white shadow-lg" : "bg-transparent text-slate-500 border-white/10 hover:border-white/30 hover:text-white"}`}>{filter}</button>
                ))}
            </div>
        </div>

        <div className="flex flex-col gap-0">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
        </div>

        {/* --- FINAL PAGE CTA SECTION --- */}
        <section className="mt-24 py-16 px-6 border border-white/10 rounded-[3rem] bg-zinc-900/50 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-colors"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Sparkles size={12} /> Seleção de Elite
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">E muito mais...</h3>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                    Estes são apenas alguns dos nossos cases de sucesso. Cada projeto é único e focado em transformar visitantes em clientes reais através de design estratégico e alta performance.
                </p>
                <button 
                    onClick={onNavigateToPlans}
                    className="bg-white text-black hover:bg-indigo-600 hover:text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-1"
                >
                    <Layout size={20} /> Ver Planos e Preços
                </button>
            </div>
        </section>

      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-6">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedProject(null)}></div>
            <div className="relative w-full h-full bg-zinc-900 md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col lg:flex-row">
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white hover:text-black rounded-full text-white transition-colors backdrop-blur-md border border-white/10 shadow-md"><X size={24} /></button>
                <div className="flex-1 overflow-y-auto bg-black custom-scrollbar relative flex flex-col items-center p-0 md:p-10 gap-4">
                     {selectedProject.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`${selectedProject.title} view ${idx+1}`} className="w-full max-w-4xl h-auto object-contain shadow-xl shadow-black rounded-lg mb-4" />
                     ))}
                </div>
                <div className="w-full lg:w-[400px] bg-zinc-900 border-l border-white/10 p-8 flex flex-col shrink-0 h-auto lg:h-full overflow-y-auto relative z-20">
                    <div className="mb-auto">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest border border-indigo-500/20 px-3 py-1 rounded-full bg-indigo-500/10">{selectedProject.category}</span>
                        </div>
                        <h2 className="text-4xl font-black text-white mb-6 leading-tight">{selectedProject.title}</h2>
                        <div className="relative pl-4 border-l-2 border-indigo-500/50 mb-8">
                            <p className="text-slate-300 text-sm leading-relaxed italic">{selectedProject.description}</p>
                        </div>
                        <div className="space-y-6 border-t border-white/10 pt-6">
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2"><Tag size={12} /> Tecnologias / Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold text-slate-300 bg-white/5 px-3 py-1.5 rounded border border-white/10">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    {selectedProject.device === 'mobile' ? <Smartphone size={12} /> : <Monitor size={12} />}
                                    Otimização
                                </h4>
                                <p className="text-white text-sm font-bold flex items-center gap-2">{selectedProject.device === 'mobile' ? 'Mobile First (Foco em Celular)' : 'Desktop & Grandes Telas'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <button 
                            onClick={onNavigateToPlans}
                            className="w-full bg-white text-black hover:bg-indigo-600 hover:text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-lg hover:shadow-indigo-500/25"
                        >
                            Ver Planos e Preços <ArrowUpRight size={16} />
                        </button>
                        <p className="text-center text-[10px] text-slate-500 mt-4">
                            Gostou deste estilo? <button className="text-indigo-400 underline hover:text-indigo-300 transition-colors" onClick={onNavigateToPlans}>Ver orçamentos</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
