"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white text-center px-6">

      <motion.h1
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="text-6xl font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
      >
        Hi, I'm Santhosh KR
      </motion.h1>

      <TypeAnimation
        sequence={[
          "AI & ML Student",
          2000,
          "Python Developer",
          2000,
          "Data Science Enthusiast",
          2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl text-cyan-400 font-semibold"
      />

    </section>
  )
}