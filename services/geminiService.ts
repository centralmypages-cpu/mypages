import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

const apiKey = process.env.API_KEY || '';
// Initialize securely - in a real app, handle missing key gracefully
const ai = new GoogleGenAI({ apiKey });

export const generateLandingPageCopy = async (businessDescription: string): Promise<GeneratedContent> => {
  if (!apiKey) {
    // Fallback if no API key is present for demo purposes
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          headline: "Transforme Seu Negócio Hoje",
          subheadline: "A solução completa que você estava procurando para escalar suas vendas e automação.",
          ctaText: "Começar Agora",
          benefits: ["Aumento de Conversão", "Automação Inteligente", "Suporte 24/7"]
        });
      }, 1500);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a high-conversion landing page structure for a business described as: "${businessDescription}". content should be in Portuguese.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING, description: "A catchy, short, high-impact H1 headline." },
            subheadline: { type: Type.STRING, description: "A persuasive subtitle explaining the value proposition." },
            ctaText: { type: Type.STRING, description: "Text for the main call-to-action button." },
            benefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of 3 key benefits, short phrases."
            }
          },
          required: ["headline", "subheadline", "ctaText", "benefits"],
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedContent;

  } catch (error) {
    console.error("Error generating content:", error);
    // Fallback on error
    return {
      headline: "Sua Ideia, Online em Minutos",
      subheadline: "Ocorreu um erro ao gerar o conteúdo personalizado, mas nossa plataforma está pronta para você.",
      ctaText: "Criar Manualmente",
      benefits: ["Rápido", "Fácil", "Seguro"]
    };
  }
};