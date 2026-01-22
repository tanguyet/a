
import { GoogleGenAI } from "@google/genai";
import { User, Reward, Achievement } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLoyaltyAdvice = async (user: User, rewards: Reward[], achievements: Achievement[]) => {
  try {
    const prompt = `
      You are an Internal Corporate Loyalty Assistant called "EcoBot".
      Current User: ${user.name} (${user.role} in ${user.department})
      Points: ${user.points}
      Total Earned: ${user.totalEarned}

      Available Rewards: ${JSON.stringify(rewards.map(r => ({ title: r.title, cost: r.cost })))}
      Way to earn points: ${JSON.stringify(achievements.map(a => ({ title: a.title, points: a.points, desc: a.description })))}

      Provide a short, motivating message (in Vietnamese) for the user. 
      1. Suggest which reward they are close to achieving.
      2. Suggest one way they can earn more points today based on the achievements list.
      3. Keep it professional yet friendly.
      Format the response as clear bullet points or short paragraphs.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful and encouraging corporate loyalty coach for Vietnamese employees.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Xin lỗi, tôi không thể đưa ra lời khuyên lúc này. Hãy tiếp tục tích lũy điểm nhé!";
  }
};
