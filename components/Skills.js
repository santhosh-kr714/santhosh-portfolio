"use client"

import { motion } from "framer-motion"

const skills = [
  "Python",
  "Machine Learning",
  "Data Science",
  "Artificial Intelligence",
  "React",
  "Next.js",
  "JavaScript",
  "Git"
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen text-white py-24 px-10">

      <motion.h2
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        className="text-4xl font-bold text-center mb-20 text-cyan-400"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:index * 0.1 }}
            whileHover={{ scale:1.1 }}
            className="bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-400 p-6 rounded-xl text-center text-lg font-semibold shadow-lg hover:shadow-cyan-400/40 transition"
          >
            {skill}
          </motion.div>
        ))}

      </div>

    </section>
  )
}