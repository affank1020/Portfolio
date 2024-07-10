import React, { useEffect, useState } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import ResizeObserver from "resize-observer-polyfill";

export default function Projects({ isVisible }) {
  const [currentPage, setCurrentPage] = useState(1); // Corrected this line
  const projectsPerPage = 4;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll smooth to the top of the #projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const opacityClass = isVisible ? 'opacity-100' : 'opacity-0';

  const adjustFontSize = (element) => {
    const parentWidth = element.parentElement.offsetWidth;
    const newSize = Math.min(Math.max(parentWidth / 30, 12), 17); // Adjust the values as needed
    element.style.fontSize = `${newSize}px`;
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".description-text");
    const resizeObserver = new ResizeObserver(() => {
      elements.forEach((element) => adjustFontSize(element));
    });

    elements.forEach((element) => resizeObserver.observe(element.parentElement));

    return () => {
      elements.forEach((element) => resizeObserver.unobserve(element.parentElement));
    };
  }, []);

  return (
    <section id="projects" className={`py-10 text-gold-darker bg-navy-darker body-font`}>
      <div className={`container px-5 py-10 mx-auto text-center lg:px-40 transition-opacity duration-500 ${opacityClass}`}>
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Things I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Source code for all projects can be found on my{" "}
            <a href="https://github.com/affank1020" target="_blank" rel="noopener noreferrer" className="underline">
              Github.
            </a>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {currentProjects.map((project) => ( // Use currentProjects instead of projects
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-full p-4">
              <div className="flex relative h-72">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-9 w-full border-4 border-gold bg-navy-darkest opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <div className="description-text leading-relaxed">
                    {project.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
          <br></br>
        {currentPage > 1 && (<button className="inline-flex text-white bg-red border-0 py-1 px-3 focus:outline-none hover:bg-red-darker rounded text-lg mr-4" onClick={() => paginate(currentPage - 1)}>
          Previous
        </button>)}
        {Array.from({ length: totalPages }, (_, i) => (
          <button className="inline-flex text-white bg-red border-0 py-1 px-2 focus:outline-none hover:bg-red-darker rounded text-lg mr-4" key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (<button className="inline-flex text-white bg-red border-0 py-1 px-3 focus:outline-none hover:bg-red-darker rounded text-lg" onClick={() => paginate(currentPage + 1)}>
          Next
        </button>)}
      </div>
    </section>
  );
}