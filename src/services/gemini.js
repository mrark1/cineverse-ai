import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export async function getMovieRecommendation(mood) {
  const prompt = `
You are a movie recommendation expert.

User mood: "${mood}"

Recommend ONLY ONE popular movie title.

Rules:
- Return only the movie title.
- No explanation.
- No quotation marks.
- No extra text.
`;

  const result = await model.generateContent(prompt);

  return result.response.text().trim();
}