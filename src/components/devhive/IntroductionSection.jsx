// src/components/devhive/IntroductionSection.jsx
import React from 'react';


export default function IntroductionSection({ fullpageApi }) {
  return (
    <div className="section bg-stone-900 text-stone-50 flex items-center justify-center" data-anchor="intro">
      <div className="section-content max-w-5xl mx-auto text-center px-6 py-24">

        <div className="bg-amber-500/10 px-4 py-1.5 rounded-full mb-6 inline-block shadow-sm shadow-amber-400/10">
          <span className="text-amber-300 text-sm font-semibold tracking-wide">Project Introduction</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-amber-400 tracking-tight mb-6 leading-tight">
          DevHive
        </h1>

        <p className="text-xl md:text-2xl text-stone-300 font-light mb-12 max-w-3xl mx-auto">
          A minimalist, cross-platform workspace for agile teams to manage tasks, message in real time, and stay aligned.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-left text-lg md:text-xl text-stone-200 font-light max-w-4xl mx-auto mb-12">
          <div className="bg-stone-800/40 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
            <span className="block text-amber-300 font-medium mb-2">Real-Time Messaging</span>
            <p>Direct and group chat built for fast, asynchronous collaboration.</p>
          </div>
          <div className="bg-stone-800/40 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
            <span className="block text-amber-300 font-medium mb-2">Sprint Planning</span>
            <p>Manage tasks, sprints, and assignments with intuitive drag-and-drop boards.</p>
          </div>
          <div className="bg-stone-800/40 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
            <span className="block text-amber-300 font-medium mb-2">Unified Experience</span>
            <p>All-in-one platform, built for speed — no tab-switching, no context loss.</p>
          </div>
        </div>

        <p className="text-stone-400 text-lg mb-10">
          Designed for agile developers, product managers, and startup teams who crave focus and flow.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => fullpageApi && fullpageApi.moveTo(8)}
            className="px-8 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold transition-all shadow-md hover:shadow-lg"
          >
            View Showcase
          </button>
        </div>
      </div>
    </div>
  );
}
