export default function Certificates() {

  const certificates = [
    "AWS Machine Learning Foundations",
    "Graph Machine Learning",
    "IBM Cognitive Class"
  ];

  return (
    <section id="skills" className="py-20 flex justify-center">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {certificates.map((c, i) => (
            <div
              key={i}
              className="p-6 border border-cyan-400 rounded-xl bg-gray-800 text-center hover:scale-105 transition"
            >

              <h3 className="text-xl font-semibold text-white">
                {c}
              </h3>

              <p className="text-gray-400 mt-2">
                Click to View Certificate
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}