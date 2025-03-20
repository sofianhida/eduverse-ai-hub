
import { useState } from 'react';
import { toast } from 'sonner';

// Define API key from your provided example
const API_KEY = "AIzaSyCJ0RpvoyVczFZmN0uCoogp99KwpWKGoUY";

export const useGeminiAI = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string, systemPrompt: string = ""): Promise<string> => {
    setIsLoading(true);
    
    try {
      // Sanitize input
      const sanitizedMessage = message.trim();
      
      if (!sanitizedMessage) {
        throw new Error("Message cannot be empty");
      }
      
      const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
      
      // Prepare history and system prompt
      const requestBody = {
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt + "\n\n" + sanitizedMessage }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
        }
      };
      
      const response = await fetch(`${apiUrl}?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API error:", errorText);
        throw new Error(`Error from Gemini API: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Extract text from the response
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak dapat menghasilkan respons saat ini.";
      
      return generatedText;
      
    } catch (error) {
      console.error("Error in sendMessage:", error);
      toast.error("Gagal menghubungi AI. Silakan coba lagi nanti.");
      return "Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.";
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    sendMessage,
    isLoading
  };
};
