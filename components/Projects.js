export default function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern portfolio built with Next.js"
    },
    {
      title: "Machine Learning Project",
      desc: "Exploring machine learning models"
    },
    {
      title: "Python Data Analysis",
      desc: "Data analysis using Python libraries"
    }
  ];

  return (
    <section id="skills" className="py-20 flex justify-center">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 border border-cyan-400 rounded-xl bg-gray-800 text-center hover:scale-105 transition"
            >

              <h3 className="text-xl font-semibold text-white">
                {p.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {p.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}