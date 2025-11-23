import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize GenAI client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
// We assume this variable is pre-configured, valid, and accessible.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  message: string
) => {
  try {
    // Create a chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};