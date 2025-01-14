import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills({ isVisible }) {
  const opacityClass = isVisible ? 'opacity-100' : 'opacity-0'; // Adjust threshold as needed

  return (
    <section id="skills" className="py-10">
      <div className={`container bg-navy-darkest px-5 py-10 mx-auto transition-opacity duration-500 ${opacityClass}`}>
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A summary of the key technical skills and technologies I have had experience with so far.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-navy-dark rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-gold w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}