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

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Skills
        </h2>

                {skills.map((skill, index) => (
          <div key={index} className="mb-6">

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-cyan-400 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}