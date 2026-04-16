import React from 'react';

const Experience = () => {
  const jobs = [
    {
      title: "Junior Web Developer",
      company: "Company Name",
      period: "Jan 2024 – Present",
      description: "Describe your responsibilities and achievements here.",
    },
    {
      title: "Web Dev Intern",
      company: "Another Company",
      period: "Jun 2023 – Dec 2023",
      description: "Describe your responsibilities and achievements here.",
    },
  ];
  
   return (
  <section className="mb-10">
      <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">Experience</h2>
      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <div key={job.title} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-500 text-sm">{job.company} · {job.period}</p>
            <p className="mt-2 text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;