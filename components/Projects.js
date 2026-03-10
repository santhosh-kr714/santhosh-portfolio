"use client";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js",
  },
  {
    title: "Machine Learning Project",
    description: "Exploring machine learning models",
  },
  {
    title: "Python Data Analysis",
    description: "Data analysis using Python libraries",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

                  {projects.map((project, index) => (

            <div
              key={index}
              className="p-6 rounded-xl border border-cyan-400 bg-white/5 backdrop-blur-lg hover:scale-105 transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>

            </div>

          ))}
        </div>

      </div>

    </section>
  );
}