// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isCertificationVisible, setIsCertificationVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2, // Adjust as needed
    };

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      options
    );

    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsProjectsVisible(entry.isIntersecting);
      },
      options
    );

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSkillsVisible(entry.isIntersecting);
      },
      options
    );

    const certificationObserver = new IntersectionObserver(
      ([entry]) => {
        setIsCertificationVisible(entry.isIntersecting);
      },
      options
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      options
    );

    const aboutElement = document.getElementById('about');
    const projectsElement = document.getElementById('projects');
    const skillsElement = document.getElementById('skills');
    const certificationElement = document.getElementById('certifications');
    const contactElement = document.getElementById('contact');

    if (aboutElement) aboutObserver.observe(aboutElement);
    if (projectsElement) projectsObserver.observe(projectsElement);
    if (skillsElement) skillsObserver.observe(skillsElement);
    if (certificationElement) certificationObserver.observe(certificationElement);
    if (contactElement) contactObserver.observe(contactElement);

    return () => {
      if (aboutElement) aboutObserver.unobserve(aboutElement);
      if (projectsElement) projectsObserver.unobserve(projectsElement);
      if (skillsElement) skillsObserver.unobserve(skillsElement);
      if (certificationElement) certificationObserver.unobserve(certificationElement);
      if (contactElement) contactObserver.unobserve(contactElement);
    };
  }, []);

  return (
    <main className="text-gold bg-navy-darkest body-font">
      <Navbar />
      <About isVisible={isAboutVisible} />
      <Projects isVisible={isProjectsVisible} />
      <Skills isVisible={isSkillsVisible} />
      <Certifications isVisible={isCertificationVisible} />
      <Contact isVisible={isContactVisible} />
    </main>
  );
}

export default App;
