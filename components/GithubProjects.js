export default function GithubProjects() {

  const projects = [
    "AI-mini-pro",
    "AI-mini-project",
    "AI-mini-project.",
    "Net-Banking-Login-Transfer-Simulation",
    "oop-miniproject",
    "oopsNet-Banking-Login-Transfer-Simulation"
  ];

  return (
    <section id="skills" className="py-20 flex justify-center">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          GitHub Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 border border-cyan-400 rounded-xl bg-gray-800 text-center hover:scale-105 transition"
            >

              <h3 className="text-xl font-semibold text-white">
                {p}
              </h3>

              <p className="text-gray-400 mt-2">
                GitHub Repository
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}