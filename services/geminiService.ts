
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

/**
 * Gera o conteúdo estratégico da landing page usando o modelo Gemini 3.
 * O conteúdo é retornado em formato JSON estruturado para alimentar a UI.
 */
export const generateLandingPageCopy = async (businessDescription: string): Promise<GeneratedContent> => {
  const apiKey = process.env.API_KEY;

  // Verifica se a chave de API está presente
  if (!apiKey || apiKey === "SUA_CHAVE_AQUI") {
    console.error("ERRO CRÍTICO: API_KEY não encontrada no process.env. Verifique as configurações da Vercel.");
    
    // Retorna um conteúdo padrão de segurança para evitar que o site quebre
    return {
      headline: "Sua Presença Digital com MyPages",
      subheadline: "Criamos landing pages de alta conversão para transformar seu negócio em referência no mercado.",
      ctaText: "Falar com Especialista",
      benefits: [
        "Design de Alta Performance",
        "Estratégia de Conversão",
        "Entrega em Tempo Recorde"
      ]
    };
  }

  try {
    // Inicializa o SDK usando a chave obtida
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Aja como um Copywriter Senior. Crie o conteúdo de uma Landing Page para o negócio: "${businessDescription}". Retorne em JSON com headline impactante, subheadline persuasiva, ctaText curto e 3 benefícios principais. Idioma: PT-BR.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            subheadline: { type: Type.STRING },
            ctaText: { type: Type.STRING },
            benefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["headline", "subheadline", "ctaText", "benefits"],
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Resposta vazia da IA.");
    
    return JSON.parse(text) as GeneratedContent;

  } catch (error) {
    console.error("Erro ao chamar Gemini API:", error);
    return {
      headline: "Sua Nova Landing Page",
      subheadline: "O design e a estratégia que seu negócio precisa para escalar as vendas.",
      ctaText: "Garantir Minha Vaga",
      benefits: ["Foco em Resultados", "Tecnologia de Ponta", "Suporte Exclusivo"]
    };
  }
};
