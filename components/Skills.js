"use client"

import { motion } from "framer-motion"

export default function Skills() {

  const skills = [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Science", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Git & GitHub", level: 85 },
  ]

  return (
    <section id="skills" className="py-20 px-10">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Skills
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">

        {skills.map((skill, index) => (

          <div key={index}>

            <div className="flex justify-between mb-2">
              <span className="text-white">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level + "%" }}
                transition={{ duration: 1.2 }}
                className="h-3 bg-cyan-400 rounded-full"
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}