"use client"

import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function NeuralBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#020617"
          }
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 70
          },
          color: {
            value: "#22d3ee"
          },
          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: 2
          }
        }
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  )
}