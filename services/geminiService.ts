
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

export const generateLandingPageCopy = async (businessDescription: string): Promise<GeneratedContent> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey || apiKey === "SUA_CHAVE_AQUI") {
    return {
      headline: "Sua Presença Digital com MyPages",
      subheadline: "Transforme sua autoridade em novos atendimentos com um site estratégico.",
      ctaText: "Falar com Especialista",
      benefits: [
        "Autoridade Digital",
        "Posicionamento Estratégico",
        "Mais Atendimentos"
      ]
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Aja como um Copywriter Senior focado em High Ticket. Crie o conteúdo de uma Página de Vendas profissional para o negócio: "${businessDescription}". Foque em transformar autoridade em atendimentos. Retorne em JSON estruturado. Idioma: PT-BR.`,
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
    return {
      headline: "Sua Nova Página de Vendas",
      subheadline: "Transforme sua autoridade em novos atendimentos e escale seu negócio.",
      ctaText: "Garantir Minha Vaga",
      benefits: ["Autoridade Digital", "Posicionamento Estratégico", "Mais Atendimentos"]
    };
  }
};
