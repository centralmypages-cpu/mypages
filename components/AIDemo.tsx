
import React, { useState } from 'react';
import { generateLandingPageCopy } from '../services/geminiService';
import { GeneratedContent } from '../types';
import { Button } from './Button';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const AIDemo: React.FC = () => {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    try {
      const content = await generateLandingPageCopy(description);
      setResult(content);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-demo" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Input Side */}
            <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 mb-6">
                    <Sparkles className="w-4 h-4 text-black" />
                    <span className="text-xs font-bold text-black uppercase tracking-wide">Inteligência Estratégica</span>
                </div>

                <h2 className="text-4xl font-black text-black mb-6 uppercase leading-tight">
                    Teste o Poder da Tecnologia.<br/>
                    <span className="text-gray-400">Páginas em segundos.</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Descreva seu negócio ou produto abaixo e veja nossa inteligência criar a estrutura perfeita para sua landing page, focada em conversão.
                </p>

                <form onSubmit={handleGenerate} className="space-y-4">
                    <div>
                        <label htmlFor="desc" className="block text-sm font-bold text-black mb-2 uppercase">Sobre o que é seu negócio?</label>
                        <textarea
                            id="desc"
                            rows={5}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-black placeholder-gray-400 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none resize-none"
                            placeholder="Ex: Sou um personal trainer focado em perda de peso para mulheres acima de 40 anos..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <Button type="submit" isLoading={loading} className="w-full shadow-xl" size="lg">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Gerar Estrutura
                    </Button>
                </form>
            </div>

            {/* Preview Side */}
            <div className="bg-gray-100 rounded-2xl shadow-2xl p-2 border border-gray-200">
                <div className="bg-white rounded-xl overflow-hidden min-h-[500px] border border-gray-200 flex flex-col">
                    {/* Browser Bar */}
                    <div className="bg-white px-4 py-3 border-b flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="ml-4 flex-1 bg-gray-50 rounded-md h-6 text-[10px] flex items-center px-2 text-gray-400 font-mono justify-center">
                            mypages.site/preview
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col justify-center">
                        {!result && !loading && (
                            <div className="text-center text-gray-400 py-12">
                                <Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                                <p className="font-medium">O resultado aparecerá aqui...</p>
                            </div>
                        )}

                        {loading && (
                            <div className="flex flex-col items-center animate-pulse space-y-4 max-w-sm mx-auto w-full">
                                <div className="h-8 w-3/4 bg-gray-200 rounded-lg"></div>
                                <div className="h-4 w-full bg-gray-100 rounded-lg"></div>
                                <div className="h-4 w-2/3 bg-gray-100 rounded-lg"></div>
                                <div className="h-12 w-40 bg-gray-200 rounded-lg mt-8"></div>
                            </div>
                        )}

                        {result && !loading && (
                            <div className="w-full text-center animate-fade-in">
                                <h3 className="text-3xl font-black text-black mb-4 leading-tight">
                                    {result.headline}
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                                    {result.subheadline}
                                </p>
                                <div className="flex justify-center mb-10">
                                    <button className="bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-800 transition-colors">
                                        {result.ctaText}
                                    </button>
                                </div>
                                
                                <div className="bg-gray-50 rounded-xl p-6 text-left">
                                    <p className="text-xs uppercase font-bold text-gray-400 mb-4 tracking-wider text-center">Principais Benefícios</p>
                                    <ul className="space-y-3">
                                        {result.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-gray-800 font-medium">
                                                <CheckCircle2 className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
