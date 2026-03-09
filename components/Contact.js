"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen text-white py-24 px-10">

      <motion.h2
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        className="text-4xl font-bold text-center mb-16 text-cyan-400"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col items-center gap-6">

        <motion.a
          whileHover={{ scale:1.1 }}
          href="mailto:gpdsanthosh916@gmail.com"
          className="bg-cyan-500 px-8 py-3 rounded-lg text-black font-semibold"
        >
          📧 Email Me
        </motion.a>

        <motion.a
          whileHover={{ scale:1.1 }}
          href="https://github.com/santhosh-kr714"
          target="_blank"
          className="border border-cyan-400 px-8 py-3 rounded-lg"
        >
          💻 GitHub
        </motion.a>

        <motion.a
          whileHover={{ scale:1.1 }}
          href="https://www.linkedin.com/in/santhosh-kr-65079b32b/"
          target="_blank"
          className="border border-cyan-400 px-8 py-3 rounded-lg"
        >
          🔗 LinkedIn
        </motion.a>

      </div>

    </section>
  )
}