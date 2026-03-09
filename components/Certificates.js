"use client"

export default function Certificates() {

  const certificates = [
    {
      title: "AWS Machine Learning Foundations",
      file: "/certificates/aws.pdf"
    },
    {
      title: "Graph Machine Learning",
      file: "/certificates/graph.pdf"
    },
    {
      title: "IBM Cognitive Class",
      file: "/certificates/ibm.pdf"
    },
    {
      title: "UI Automation with Modern Design",
      file: "/certificates/ui-automation.pdf"
    }
  ]

  return (
    <section id="certificates" className="py-20 px-6 text-center">

      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Certificates
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {certificates.map((cert, index) => (

          <a
            key={index}
            href={cert.file}
            target="_blank"
            className="p-6 bg-slate-800 rounded-xl border border-cyan-500

            transform transition duration-500
            hover:scale-110 hover:-rotate-1
            hover:shadow-[0_0_40px_cyan]"
          >

            <h3 className="text-xl font-bold text-white">
              {cert.title}
            </h3>

            <p className="text-gray-400 mt-3">
              Click to View Certificate
            </p>

          </a>

        ))}

      </div>

    </section>
  )
}