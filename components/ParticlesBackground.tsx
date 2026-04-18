"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBackground() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}   // ✅ NOW VALID
      options={{
        background: {
          color: "#0a0a0a",
        },
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            distance: 120,
            color: "#00f5ff",
            opacity: 0.4,
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}