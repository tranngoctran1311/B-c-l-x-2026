import { GoogleGenAI, Type } from "@google/genai";
import { LuckyMoneyResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMascotImage = async (): Promise<string | null> => {
  if (!apiKey) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: "A high-fidelity 3D render of a cute anthropomorphic yellow onion mascot named 'Bé Hành'. Characteristics: Golden yellow round body, wearing round black thick-rimmed glasses, a red scarf tied around the neck, and a green sprout on top of the head. Expression: Happy, cheerful, waving or holding a lucky money envelope. Background: A festive gradient orange and yellow background with soft lighting, marketing poster style, clean 3D clay render style."
          }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Failed to generate mascot:", error);
    return null;
  }
};

export const generateLuckyMoneyWish = async (): Promise<LuckyMoneyResult> => {
  const FIXED_CODE = "SANDEAL22";

  if (!apiKey) {
    // Fallback if no API key
    return {
      wish: "Chúc bạn năm mới rực rỡ như Bé Hành!",
      code: FIXED_CODE,
      amount: "50%"
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a short, funny, 1-sentence Tet wish from a cute onion mascot 'Bé Hành'.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            wish: { type: Type.STRING, description: "Short funny Tet wish (max 15 words)." },
            amount: { type: Type.STRING, description: "Discount amount (e.g. 10%, 20%)" }
          },
          required: ["wish", "amount"]
        }
      }
    });

    const text = response.text;
    if (text) {
      const data = JSON.parse(text);
      return {
        wish: data.wish,
        amount: data.amount,
        code: FIXED_CODE // Force fixed code
      };
    }
    throw new Error("No text response");
  } catch (error) {
    console.error("Failed to generate wish:", error);
    return {
      wish: "Ăn Tết vui vẻ, đừng quên săn deal!",
      code: FIXED_CODE,
      amount: "20%"
    };
  }
};