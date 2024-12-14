import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { certifications } from "../data";

export default function Certifications({ isVisible }) {
  const opacityClass = isVisible ? 'opacity-100' : 'opacity-0'; // Adjust threshold as needed
  return (
    <section id="certifications" className="bg-navy-darker py-10">
      <div className={`container px-5 py-10 mx-auto text-center transition-opacity duration-500 ${opacityClass}`}>
        <AcademicCapIcon className="w-10 inline-block mb-4 text-gold" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certifications
        </h1>
        <div className="flex flex-wrap justify-center">
          {certifications.map((cert, index) => (
            <div key={index} className="p-4 md:w-1/3 w-full">
              <div className="flex flex-col h-full bg-navy-darkest bg-opacity-40 p-8 rounded-lg">
                <div className="flex-1">
                  {cert.image && (
                    <img
                      alt="certification"
                      src={cert.image}
                      className="w-32 h-32 mb-4 mx-auto rounded-full object-cover object-center"
                    />
                  )}
                  <h2 className="title-font font-medium text-lg text-white mb-1">
                    {cert.name}
                  </h2>
                  <h3 className="text-gold text-sm mb-3">{cert.date}</h3>
                  <p className="leading-relaxed text-base mb-4 text-gold-darker">
                    {cert.description}
                  </p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-white bg-red border-0 py-2 px-6 rounded hover:text-red-500 inline-flex items-center justify-center"
                  >
                    View
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}