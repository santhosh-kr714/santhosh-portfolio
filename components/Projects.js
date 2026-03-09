"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Marksheet Generator",
    description:
      "Python project that generates student marksheets using files and dictionaries."
  },
  {
    title: "Iris Data Visualization",
    description:
      "Data science project that visualizes the Iris dataset using Python."
  },
  {
    title: "AI Portfolio Website",
    description:
      "A modern animated developer portfolio built with Next.js and Tailwind."
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-10 text-white bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >

      <motion.h2
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        className="text-4xl font-bold text-center mb-20 text-cyan-400"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:index * 0.2 }}
            whileHover={{ scale:1.08 }}
            className="bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-400 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">
              {project.title}
            </h3>

            <p className="text-gray-300">
              {project.description}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}