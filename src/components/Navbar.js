import { } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-navy md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#home" className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl text-gold hover:text-white bg-navy-dark border-0 py-2 px-6">
            Mohammad Affan Khan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gold	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#certifications" className="mr-5 hover:text-white">
            Certifications
          </a>
        </nav>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/mohammad-affan-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center focus:outline-none hover:bg-gray-700 rounded text-base"
            title="LinkedIn">
            <img src="Other/linkedin-xxl.png" alt="LinkedIn" className="w-4 h-4 ml-1" />
          </a>
          <a
            href="mailto:affank1020@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center focus:outline-none hover:bg-gray-700 rounded text-base"
            title="Email Me">
            <img src="Other/mail-xxl.png" alt="Email Me" className="w-5 h-5 ml-1" />
          </a>
          <a
            href="https://github.com/affank1020"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center focus:outline-none hover:bg-gray-700 rounded text-base"
            title="Github">
            <img src="Other/github-11-xxl.png" alt="GitHub" className="w-4 h-4 ml-1" />
          </a>
          <a
            href="https://4kh4n.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center focus:outline-none hover:bg-gray-700 rounded text-base"
            title="Itch.io">
            <img src="Other/itch.io.png" alt="itch.io" className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
      
    </header>
  );
}