"use client"

import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function SpaceBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0
      }}
      options={{
        background: {
          color: {
            value: "#020617"
          }
        },

        particles: {
          number: {
            value: 120
          },

          color: {
            value: "#22d3ee"
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 160,
            opacity: 0.5,
            width: 1
          },

          move: {
            enable: true,
            speed: 1.5
          },

          size: {
            value: 2
          },

          opacity: {
            value: 0.8
          }
        }
      }}
    />
  )
}