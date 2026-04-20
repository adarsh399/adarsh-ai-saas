"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HudBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const src =
      "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.6,
        }}
      />

      {/* 🌑 LEFT GRADIENT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #070b0a 0%, rgba(7,11,10,0.8) 25%, transparent 60%)",
        }}
      />

      {/* ⬇️ BOTTOM GRADIENT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* 📏 GRID LINES */}
      {[25, 50, 75].map((pos) => (
        <div
          key={pos}
          style={{
            position: "absolute",
            top: 0,
            left: `${pos}%`,
            width: "1px",
            height: "100%",
            background: "rgba(255,255,255,0.1)",
          }}
        />
      ))}

      {/* 💎 CENTRAL GLOW */}
      <svg
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          pointerEvents: "none",
        }}
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>

        <ellipse
          cx="300"
          cy="100"
          rx="250"
          ry="60"
          fill="rgba(94,210,156,0.4)"
          filter="url(#blur)"
        />
      </svg>
    </div>
  );
}