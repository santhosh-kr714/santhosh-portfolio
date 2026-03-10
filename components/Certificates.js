"use client";

const certificates = [
  {
    title: "AWS Machine Learning Foundations",
    file: "/AWS_Academy_Graduate.pdf",
  },
  {
    title: "Graph Machine Learning",
    file: "/graph_machine_learning.pdf",
  },
  {
    title: "IBM Cognitive Class",
    file: "/IBM_certificate.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

                    {certificates.map((c, i) => (

            <a
              key={i}
              href={c.file}
              target="_blank"
              className="p-6 rounded-xl border border-cyan-400 bg-white/5 backdrop-blur-lg hover:scale-105 transition text-center"
            >

              <h3 className="text-lg font-semibold mb-2">
                {c.title}
              </h3>

              <p className="text-gray-400">
                Click to View Certificate
              </p>

            </a>

          ))}
        </div>

      </div>

    </section>
  );
}
