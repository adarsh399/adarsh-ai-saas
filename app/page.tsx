"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HudBackground from "../components/HudBackground";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await res.json();
      const text = data.reply || "No response";

      setMessages((prev) => [...prev, { role: "ai", text: "" }]);

      let index = 0;
      const typing = setInterval(() => {
        index++;

        setMessages((prev) => {
          const updated = [...prev];
          const lastIndex = updated.length - 1;
          updated[lastIndex] = {
            ...updated[lastIndex],
            text: text.slice(0, index),
          };
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
  };

  return (
    <div style={{ position: "relative", color: "white" }} suppressHydrationWarning>
      <HudBackground />

      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lux-nav"
      >
        <div className="lux-nav-inner">
          <motion.div whileHover={{ scale: 1.03 }} className="brand-mark">
            Adarsh AI
          </motion.div>

          <nav className="lux-nav-links">
            <a href="#capabilities" className="nav-link">Capabilities</a>
            <a href="#standard" className="nav-link">Standard</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </motion.header>

      <section className="hero-wrap">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15 }}
          className="hero-orb"
        />

        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow-chip"
        >
          Precision AI Systems
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95 }}
          className="hero-title"
        >
          Adarsh AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hero-subtitle"
        >
          Automation, Refined.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="hero-description"
        >
          Crafted AI systems, digital experiences, and automation workflows for
          ambitious brands that expect elegance, speed, and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: 34 }}
        >
          <motion.button
            suppressHydrationWarning
            className="btn btn-premium"
            style={{ marginRight: 12 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin the Experience
          </motion.button>

          <motion.button
            suppressHydrationWarning
            className="btn btn-ghost"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Private Consultation
          </motion.button>
        </motion.div>
      </section>

      <motion.section
        id="capabilities"
        className="section-shell"
        {...fadeUp}
      >
        <div className="lux-grid-3">
          <motion.div className="glass card-hover premium-card large-card" whileHover={{ y: -10 }}>
            <div className="eyebrow">Signature Capability</div>
            <h2 className="section-title">Conversational Intelligence</h2>
            <p className="muted-text">
              Premium AI assistants engineered to feel fast, polished, and deeply
              aligned with your business workflow.
            </p>
          </motion.div>

          <motion.div className="glass card-hover premium-card" whileHover={{ y: -10 }}>
            <div className="eyebrow">System I</div>
            <h3 className="card-title">Workflow Automation</h3>
            <p className="muted-text">
              Replace repetitive manual effort with elegant, scalable systems.
            </p>
          </motion.div>

          <motion.div className="glass card-hover premium-card" whileHover={{ y: -10 }}>
            <div className="eyebrow">System II</div>
            <h3 className="card-title">Digital Presence</h3>
            <p className="muted-text">
              High-end interfaces and websites built with clarity, depth, and presence.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="standard"
        className="section-shell"
        {...fadeUp}
      >
        <div className="glass premium-card wide-card">
          <div className="eyebrow">The Standard</div>
          <div className="lux-grid-2 standard-grid">
            <div>
              <h2 className="section-title-xl">
                Built with precision,
                <br />
                not noise.
              </h2>
            </div>
            <div className="muted-text">
              Every system is designed for clarity, elegance, and measurable
              impact. The objective is not to add more tools. It is to create
              refined leverage that saves time, elevates experience, and scales
              intelligently.
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section-shell" {...fadeUp}>
        <div className="lux-grid-3">
          {[
            ["Craft", "Discover", "Understand the business, the friction, and the hidden leverage."],
            ["Craft", "Engineer", "Design systems that feel premium while performing with speed and stability."],
            ["Craft", "Refine", "Remove friction, polish the details, and elevate the full experience."],
          ].map(([eyebrow, title, desc], i) => (
            <motion.div
              key={i}
              className="glass card-hover premium-card"
              whileHover={{ y: -10 }}
            >
              <div className="eyebrow">{eyebrow}</div>
              <h3 className="card-title">{title}</h3>
              <p className="muted-text">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="section-shell"
        {...fadeUp}
      >
        <div className="lux-grid-experience">
          <motion.div className="glass card-hover premium-card" whileHover={{ y: -8 }}>
            <div className="eyebrow">Private Client Experience</div>
            <h2 className="section-title-xl">
              For founders, creators,
              <br />
              and ambitious brands.
            </h2>
            <p className="muted-text">
              Select systems for businesses that value elegance, speed, and
              strategic execution. The goal is not just automation. It is a
              superior operating experience.
            </p>
          </motion.div>

          <motion.div className="glass card-hover premium-card" whileHover={{ y: -8 }}>
            <div className="eyebrow">Prestige Metrics</div>
            <div className="metrics-stack">
              <div>
                <div className="metric-number">10+</div>
                <div className="metric-label">Systems and builds explored</div>
              </div>
              <div>
                <div className="metric-number">24/7</div>
                <div className="metric-label">Automation-first mindset</div>
              </div>
              <div>
                <div className="metric-number">100%</div>
                <div className="metric-label">Focused on execution</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="chat-shell" {...fadeUp}>
        <motion.div
          className="glass premium-card chat-card"
          whileHover={{ y: -6 }}
        >
          <div className="eyebrow">Interactive Preview</div>
          <h2 className="section-title-sm">Speak with Adarsh AI</h2>

          <div className="chat-window">
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.role === "user" ? "right" : "left",
                  marginBottom: 10,
                }}
              >
                <span
                  className={m.role === "user" ? "bubble-user" : "bubble-ai"}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div className="chat-input-row">
            <input
              suppressHydrationWarning
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="chat-input"
            />
            <motion.button
              suppressHydrationWarning
              className="btn btn-premium"
              onClick={sendMessage}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="contact-shell"
        {...fadeUp}
      >
        <motion.div
          className="glass premium-card contact-card"
          whileHover={{ y: -6 }}
        >
          <div className="eyebrow">Private Consultation</div>

          <h2 className="section-title-xl">Begin the Experience</h2>

          <p className="muted-text contact-copy">
            For businesses ready to move beyond ordinary execution and into a
            more refined AI-driven future.
          </p>

          <motion.button
            suppressHydrationWarning
            className="btn btn-premium"
            style={{ marginTop: 24 }}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Consultation
          </motion.button>
        </motion.div>
      </motion.section>

      <footer className="lux-footer">© 2026 Adarsh AI</footer>
    </div>
  );
}