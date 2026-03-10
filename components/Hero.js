"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT SIDE */}

        <div className="relative z-10">

          <p className="text-cyan-400 text-lg mb-4">
            Hello World, I'm
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight neon-text">
            Santhosh KR
          </h1>

          <div className="mt-4 text-2xl text-cyan-400">

            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Machine Learning Developer",
                2000,
                "Data Scientist",
                2000,
              ]}
              repeat={Infinity}
            />

          </div>

          <p className="mt-6 text-gray-400 max-w-xl">
            Passionate about Artificial Intelligence,
            Machine Learning and building intelligent
            systems that solve real world problems.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="px-6 py-3 bg-cyan-500 rounded-lg text-black font-semibold hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Download Resume
            </button>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="relative flex justify-center md:justify-end">

          <Image
            src="/ai-developer.svg"
            alt="AI Developer"
            width={500}
            height={500}
            className="animate-float"
          />

          {/* Floating Tech Tags */}

          <div className="absolute top-10 left-0 tech-tag">
            Python
          </div>

          <div className="absolute bottom-10 left-10 tech-tag">
            TensorFlow
          </div>

          <div className="absolute top-20 right-0 tech-tag">
            React
          </div>

          <div className="absolute bottom-20 right-10 tech-tag">
            Node.js
          </div>

        </div>

      </div>

    </section>
  );
}