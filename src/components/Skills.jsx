import React from 'react';

const Skills = () => {
  const skills = ["React", "JavaScript", "Node.js", "HTML/CSS", "TypeScript", "Git", "REST APIs", "SQL"];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;