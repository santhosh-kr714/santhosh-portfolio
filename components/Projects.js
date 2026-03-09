"use client"

export default function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using Next.js with animations and modern UI.",
      link: "https://github.com/santhosh-kr714"
    },
    {
      title: "Machine Learning Project",
      description: "A machine learning model exploring data science concepts.",
      link: "https://github.com/santhosh-kr714"
    },
    {
      title: "Python Data Analysis",
      description: "Data analysis project using Python libraries like NumPy and Pandas.",
      link: "https://github.com/santhosh-kr714"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 text-center">

      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <a
            key={index}
            href={project.link}
            target="_blank"
            className="p-6 bg-slate-800 rounded-xl border border-cyan-500

            transform transition duration-500
            hover:scale-110 hover:-rotate-1
            hover:shadow-[0_0_40px_cyan]"
          >

            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

          </a>

        ))}

      </div>

    </section>
  )
}