"use client";

import { motion } from "framer-motion";

export default function HudBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 38%, rgba(20,24,32,0.96) 0%, rgba(8,10,14,0.98) 45%, #000 100%)",
      }}
    >
      {/* deep luxury vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.18) 58%, rgba(0,0,0,0.62) 100%)",
        }}
      />

      {/* center atmospheric glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.2, 0.12],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "42%",
          width: "54rem",
          height: "54rem",
          transform: "translate(-50%, -50%)",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(145,185,255,0.13) 0%, rgba(120,150,220,0.06) 28%, rgba(120,100,210,0.035) 52%, transparent 72%)",
          filter: "blur(36px)",
        }}
      />

      {/* premium spotlight */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "0%",
          width: "90rem",
          height: "35rem",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(120,160,255,0.03) 22%, transparent 65%)",
          filter: "blur(28px)",
        }}
      />

      {/* primary ring system */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "44%",
          width: "112vmin",
          height: "112vmin",
          transform: "translate(-50%, -50%)",
          opacity: 0.34,
        }}
      >
        <svg
          viewBox="0 0 1000 1000"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="luxRingGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(220,235,255,0.10)" />
              <stop offset="55%" stopColor="rgba(140,170,220,0.04)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>

            <filter id="luxGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* inner wash */}
          <circle cx="500" cy="500" r="290" fill="url(#luxRingGlow)" />

          {/* main concentric rings */}
          {[130, 190, 250, 315, 390, 455].map((r, i) => (
            <circle
              key={r}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke={
                i % 2 === 0
                  ? "rgba(205,220,238,0.10)"
                  : "rgba(130,145,165,0.06)"
              }
              strokeWidth={i === 0 ? 1.5 : 1}
              filter={i < 2 ? "url(#luxGlow)" : undefined}
            />
          ))}

          {/* radial geometry */}
          {Array.from({ length: 56 }).map((_, i) => {
            const angle = (i * 360) / 56;
            return (
              <line
                key={i}
                x1="500"
                y1="500"
                x2="500"
                y2="30"
                stroke={
                  i % 7 === 0
                    ? "rgba(190,210,235,0.10)"
                    : "rgba(110,125,145,0.05)"
                }
                strokeWidth={i % 7 === 0 ? 1 : 0.7}
                transform={`rotate(${angle} 500 500)`}
              />
            );
          })}

          {/* premium arcs */}
          <g filter="url(#luxGlow)">
            <path
              d="M 500 110 A 390 390 0 0 1 788 245"
              fill="none"
              stroke="rgba(175,205,255,0.14)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 245 788 A 390 390 0 0 1 110 500"
              fill="none"
              stroke="rgba(175,205,255,0.11)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 670 835 A 335 335 0 0 1 835 670"
              fill="none"
              stroke="rgba(235,240,255,0.10)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>

          {/* signature central construction */}
          <circle
            cx="500"
            cy="500"
            r="100"
            fill="none"
            stroke="rgba(220,232,255,0.13)"
            strokeWidth="1.3"
            filter="url(#luxGlow)"
          />
          <circle
            cx="500"
            cy="500"
            r="44"
            fill="none"
            stroke="rgba(220,232,255,0.08)"
            strokeWidth="1"
          />
          <circle
            cx="500"
            cy="500"
            r="12"
            fill="rgba(210,228,255,0.12)"
            filter="url(#luxGlow)"
          />
        </svg>
      </motion.div>

      {/* secondary reverse structure */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "44%",
          width: "88vmin",
          height: "88vmin",
          transform: "translate(-50%, -50%)",
          opacity: 0.16,
        }}
      >
        <svg
          viewBox="0 0 1000 1000"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[170, 260, 345].map((r) => (
            <circle
              key={r}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="rgba(210,224,242,0.08)"
              strokeDasharray="4 12"
              strokeWidth="1"
            />
          ))}

          {Array.from({ length: 16 }).map((_, i) => {
            const angle = i * 22.5;
            return (
              <rect
                key={i}
                x="497"
                y="118"
                width="6"
                height="22"
                rx="3"
                fill="rgba(205,220,245,0.10)"
                transform={`rotate(${angle} 500 500)`}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* subtle lower glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-10rem",
          width: "80rem",
          height: "24rem",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center, rgba(90,120,180,0.10) 0%, rgba(70,90,130,0.04) 28%, transparent 72%)",
          filter: "blur(44px)",
        }}
      />
    </div>
  );
}