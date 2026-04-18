export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await res.json();

    console.log("GROQ:", data);

    const reply =
      data?.choices?.[0]?.message?.content ||
      data?.error?.message ||
      "No response";

    return Response.json({ reply });
  } catch (err) {
    console.log(err);
    return Response.json({ reply: "Error connecting to AI" });
  }
}