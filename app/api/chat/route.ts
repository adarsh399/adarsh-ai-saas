import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Invalid message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "openrouter/free";
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    if (!apiKey) {
      return NextResponse.json(
        { reply: "Missing OpenRouter API key." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": siteUrl,
          "X-Title": "Adarsh AI",
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: "system",
              content:
                "You are Adarsh AI, a premium helpful AI assistant. Keep replies clear, smart, and concise.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter API Error:", data);

      return NextResponse.json(
        {
          reply:
            data?.error?.message ||
            data?.error?.metadata?.raw ||
            `OpenRouter request failed with status ${response.status}`,
        },
        { status: response.status }
      );
    }

    const reply = data?.choices?.[0]?.message?.content || "No response";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Route Error:", error);

    return NextResponse.json(
      { reply: "Server error while connecting to OpenRouter." },
      { status: 500 }
    );
  }
}