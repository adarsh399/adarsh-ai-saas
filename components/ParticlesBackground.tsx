"use client";

import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0a0a0a",
        },
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: "#00ffff",
          },
        },
      }}
    />
  );
}