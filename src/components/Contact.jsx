import React from 'react';

const Contact = () => {
  const contacts = [
    { label: "Email", value: "you@email.com" },
    { label: "Phone", value: "+63 912 345 6789" },
    { label: "GitHub", value: "github.com/yourname" },
    { label: "LinkedIn", value: "linkedin.com/in/yourname" },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">Contact</h2>
      <div className="grid grid-cols-2 gap-4">
        {contacts.map((c) => (
          <div key={c.label} className="bg-white rounded-lg shadow p-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide">{c.label}</p>
            <p className="font-medium text-gray-800 mt-1">{c.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;