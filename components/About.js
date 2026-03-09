"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen text-white px-10 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity:0, x:-50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Who am I?
          </h3>

          <p className="text-gray-300 mb-4">
            Hi, I'm <b>Santhosh KR</b>, a Computer Science and Engineering
            student specializing in <b>Artificial Intelligence and Machine Learning</b>
            at <b>Rajalakshmi Institute of Technology, Chennai</b>.
          </p>

          <p className="text-gray-300">
            I am passionate about exploring modern technologies such as
            Artificial Intelligence, Machine Learning, Cloud Computing,
            and Data Science. I enjoy building innovative projects and
            continuously improving my technical and problem-solving skills.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity:0, x:50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/santhosh.jpg"
            width={300}
            height={300}
            alt="Santhosh KR"
            className="rounded-xl border-4 border-cyan-400"
          />
        </motion.div>

      </div>
    </section>
  )
}