"use client"

import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function NeuralBackground() {

  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{

        background:{color:"transparent"},

        particles:{
          number:{value:80},
          color:{value:"#22d3ee"},

          links:{
            enable:true,
            color:"#22d3ee",
            distance:150
          },

          move:{
            enable:true,
            speed:2
          },

          size:{
            value:2
          }
        }
      }}

      className="fixed top-0 left-0 -z-10"
    />

  )
}