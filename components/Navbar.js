"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full flex justify-between items-center px-10 py-5 bg-black text-white z-50"
    >

      <h1 className="text-xl font-bold text-cyan-400">
        Santhosh KR
      </h1>

      <div className="flex gap-10 text-lg">

        <motion.a
          href="#about"
          whileHover={{ y: -3 }}
          className="relative hover:text-cyan-400 transition"
        >
          About
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ y: -3 }}
          className="relative hover:text-cyan-400 transition"
        >
          Projects
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ y: -3 }}
          className="relative hover:text-cyan-400 transition"
        >
          Contact
        </motion.a>

      </div>

    </motion.nav>
  )
}