import React from "react";

export default function Contact({ isVisible }) {
  const opacityClass = isVisible ? 'opacity-100' : 'opacity-80';
  return (
    <section id="contact" className="relative">
      {/* Footer-like section for faint text */}
      <div className={`text-center mt-8 pb-8 transition-opacity duration-500 ${opacityClass}`}>
        <p className="text-gray-400 text-sm">
          Created by <a href="mailto:affank1020@gmail.com" className="underline">affank1020@gmail.com</a>.<br />
          This site was built with React and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}