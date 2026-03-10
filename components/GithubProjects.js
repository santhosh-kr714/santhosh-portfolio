"use client";

const githubProjects = [
  {
    title: "AI-mini-pro",
  },
  {
    title: "AI-mini-project",
  },
  {
    title: "AI-mini-project.",
  },
  {
    title: "Net-Banking-Login-Transfer-Simulation",
  },
  {
    title: "oop-miniproject",
  },
  {
    title: "oopsNet-Banking-Login-Transfer-Simulation",
  },
];

export default function GithubProjects() {
  return (
    <section id="github" className="py-24">

      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          GitHub Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
                    {githubProjects.map((project, index) => (

            <div
              key={index}
              className="p-6 rounded-xl border border-cyan-400 bg-white/5 backdrop-blur-lg hover:scale-105 transition text-center"
            >

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400">
                GitHub Repository
              </p>

            </div>

          ))}
        </div>

      </div>

    </section>
  );
}