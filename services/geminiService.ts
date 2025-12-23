
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getFinancialInsight(principal: number, rate: number, time: number): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `I have a principal amount of $${principal}, an annual interest rate of ${rate}%, and a duration of ${time} years. 
                 Give me a single, helpful, and concise (max 2 sentences) financial tip or observation regarding this specific calculation. 
                 Focus on inflation, saving habits, or investment growth. Do not use markdown bolding.`,
    });
    
    return response.text || "Keep saving and investing to grow your wealth over time!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Consistently tracking your interest is the first step toward financial freedom.";
  }
}
