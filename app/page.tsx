"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "ai", text: "" }]);

      let text = data.reply || "No response";
      let index = 0;

      const typing = setInterval(() => {
        index++;

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = text.slice(0, index);
          return updated;
        });

        if (index >= text.length) clearInterval(typing);
      }, 15);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error connecting to AI" },
      ]);
    }

    setInput("");
  };

  return (
    <div style={{ position: "relative", color: "white" }}>
      
      {/* 🌌 SAFE BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(circle at 20% 20%, #111, #000 60%)",
        }}
      />

      {/* 🚀 HERO */}
      <section style={{ textAlign: "center", padding: "120px 20px" }}>
        
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #00f5ff, #7a00ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Adarsh AI
        </motion.h1>

        <p style={{ opacity: 0.7, marginTop: 10 }}>
          Build. Automate. Scale with AI 🚀
        </p>

        <p
          style={{
            opacity: 0.6,
            marginTop: 10,
            maxWidth: 600,
            marginInline: "auto",
          }}
        >
          I help businesses automate workflows, build AI systems, and scale faster.
        </p>

        <div style={{ marginTop: 30 }}>
          <button className="btn" style={{ marginRight: 10 }}>
            🚀 Get Started
          </button>
          <button className="btn">💼 Hire Me</button>
        </div>
      </section>

      {/* 🤖 CHAT */}
      <section style={{ padding: 20 }}>
        <div className="glass" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
          <h2>🤖 Talk to Adarsh AI</h2>

          <div
            style={{
              height: 300,
              overflowY: "auto",
              background: "#111",
              padding: 10,
              borderRadius: 10,
            }}
          >
            {messages.map((m, i) => (
              <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
                <span
                  style={{
                    background: m.role === "user" ? "#0070f3" : "#222",
                    padding: "6px 10px",
                    borderRadius: 8,
                    display: "inline-block",
                    marginBottom: 8,
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", marginTop: 10 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              style={{ flex: 1, padding: 10 }}
            />
            <button className="btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </section>

      {/* 💎 PROBLEM / SOLUTION / VISION */}
      <section style={{ padding: 40, textAlign: "center" }}>
        <div className="glass" style={{ marginBottom: 20, padding: 20 }}>
          <h2>❌ Problem</h2>
          <p>Businesses waste time doing repetitive tasks.</p>
        </div>

        <div className="glass" style={{ marginBottom: 20, padding: 20 }}>
          <h2>✅ Solution</h2>
          <p>Adarsh AI automates workflows using AI systems.</p>
        </div>

        <div className="glass" style={{ padding: 20 }}>
          <h2>🚀 Vision</h2>
          <p>Build scalable AI tools used globally.</p>
        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section style={{ padding: 60, textAlign: "center" }}>
        <h2>⚡ What I Build</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
            maxWidth: 1000,
            margin: "auto",
            marginTop: 30,
          }}
        >
          <div className="glass" style={{ padding: 20 }}>
            <h3>🤖 AI Chatbots</h3>
            <p>Smart assistants for automation.</p>
          </div>

          <div className="glass" style={{ padding: 20 }}>
            <h3>⚡ Automation</h3>
            <p>Save time using AI workflows.</p>
          </div>

          <div className="glass" style={{ padding: 20 }}>
            <h3>🌐 Websites</h3>
            <p>Modern SaaS UI websites.</p>
          </div>
        </div>
      </section>

      {/* 📊 STATS */}
      <section style={{ padding: 60, textAlign: "center" }}>
        <h2>📈 Growth Impact</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 30, flexWrap: "wrap" }}>
          <div><h1>10+</h1><p>Projects</p></div>
          <div><h1>100%</h1><p>Focus</p></div>
          <div><h1>24/7</h1><p>Automation</p></div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section style={{ padding: 80, textAlign: "center" }}>
        <h2>🚀 Ready to Build?</h2>
        <p style={{ opacity: 0.7 }}>Let’s create your AI system.</p>
        <button className="btn" style={{ marginTop: 20 }}>
          Contact Me
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: 30, opacity: 0.5 }}>
        © 2026 Adarsh AI
      </footer>
    </div>
  );
}