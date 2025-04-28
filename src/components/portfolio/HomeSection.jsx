import React from "react";

const anchors = ['home', 'about', 'projects', 'devhive', 'contact']; // define it here

export default function HomeSection({ fullpageApi }) {
  return (
    <div className="section bg-stone-900 text-stone-50" data-anchor="home">
      <div className="section-content min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-0">
        
        {/* Tagline */}
        <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4">
          <span className="text-amber-400 text-sm font-medium">Software Developer</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-400">
          Kai <span className="text-amber-500">Hedrick</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-stone-200 max-w-2xl mb-8">
          Full-stack developer specializing in creating modern, responsive, and user-friendly applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button
            onClick={() => fullpageApi.moveTo(anchors.indexOf('projects') + 1)}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium rounded-lg transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => fullpageApi.moveTo(anchors.indexOf('contact') + 1)}
            className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-stone-100 font-medium rounded-lg transition-colors border border-stone-600"
          >
            Contact Me
          </button>
        </div>
        
      </div>
    </div>
  );
}
