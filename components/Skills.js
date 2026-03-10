"use client";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Data Science", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">

      <div className="w-full max-w-7xl mx-auto px-10">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Skills
        </h2>

                {skills.map((skill, index) => (
          <div key={index} className="mb-8">

            <div className="flex justify-between mb-2 text-lg">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-cyan-400 h-4 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}