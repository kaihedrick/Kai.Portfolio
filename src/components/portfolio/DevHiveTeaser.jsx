import React from "react";
import CentralShowcase from "../VideoShowcase";

export default function DevHiveTeaser({ navigate }) {
  return (
    <div className="section fp-auto-height-responsive bg-stone-300" data-anchor="devhive">
      <div className="main-content-wrapper flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-24 pb-16">

        {/* Text Content */}
        <div className="text-content relative z-10 w-full lg:w-2/5 text-center lg:text-left flex flex-col justify-center">
          <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
            <span className="text-amber-600 text-sm font-medium">Featured Project</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">DevHive - Senior Project</h1>
          <p className="text-xl mb-8 text-stone-700">
            DevHive is a collaborative platform designed to connect developers and enable seamless project management. It provides tools for team collaboration and code sharing — all within a user-friendly interface that promotes developer productivity.
          </p>

          <div className="flex flex-row gap-4 mt-8 lg:justify-start justify-center">
            <a 
              href="https://github.com/kaihedrick/DevHive.ReactFrontend" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors text-stone-100"
            >
              View Code
            </a>
            <button 
              onClick={() => navigate("/devhive-showcase")}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors text-stone-900 shadow-md hover:shadow-amber-500/20 font-medium"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Showcase Area */}
        <div className="showcase-wrapper w-full lg:w-3/5 relative">
          <CentralShowcase />
        </div>
      </div>
    </div>
  );
}
