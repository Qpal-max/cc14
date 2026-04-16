import React from 'react';

const AboutMe = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">About Me</h2>
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700">
          JKA
        </div>
        <div>
          <h3 className="text-xl font-semibold">Joshua Keane I. Almora</h3>
          <p className="text-gray-500">Hopefully A Developer</p>
          <p className="mt-2 text-gray-700">
            I build clean, user-friendly web applications. Passionate about solving
            real-world problems through code and always eager to learn new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;