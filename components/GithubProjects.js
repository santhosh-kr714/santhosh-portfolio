"use client"

import { useEffect, useState } from "react"

export default function GithubProjects() {

  const [repos, setRepos] = useState([])

  useEffect(() => {

    fetch("https://api.github.com/users/santhosh-kr714/repos")
      .then(res => res.json())
      .then(data => setRepos(data.slice(0,6)))

  }, [])

  return (

    <section id="github" className="py-20 px-6 text-center">

      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        GitHub Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {repos.map(repo => (

          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="p-6 bg-slate-800 rounded-xl border border-cyan-500

            transform transition duration-500
            hover:scale-110 hover:-rotate-1
            hover:shadow-[0_0_40px_cyan]"
          >

            <h3 className="text-xl font-bold text-white">
              {repo.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {repo.description || "GitHub Repository"}
            </p>

          </a>

        ))}

      </div>

    </section>

  )
}