import React from 'react';
import './index.css';  // Make sure this imports the Tailwind styles

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;