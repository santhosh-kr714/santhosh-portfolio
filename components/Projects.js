"use client"

import Tilt from "react-parallax-tilt"

export default function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js",
      link: "https://github.com/santhosh-kr714"
    },
    {
      title: "Machine Learning Project",
      description: "Exploring machine learning models",
      link: "https://github.com/santhosh-kr714"
    },
    {
      title: "Python Data Analysis",
      description: "Data analysis using Python libraries",
      link: "https://github.com/santhosh-kr714"
    }
  ]

  return (

    <section id="projects" className="py-20 px-6 text-center">

      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project,index)=>(

          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
          >

          <a
            href={project.link}
            target="_blank"
            className="block p-6 bg-slate-800 rounded-xl border border-cyan-500

            transition duration-500
            hover:shadow-[0_0_40px_cyan]"
          >

            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

          </a>

          </Tilt>

        ))}

      </div>

    </section>

  )
}