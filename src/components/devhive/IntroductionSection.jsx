// src/components/devhive/IntroductionSection.jsx
import React, { useEffect, useState } from 'react';

export default function IntroductionSection({ fullpageApi }) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Update useEffect to use rem units
  useEffect(() => {
    const section = document.querySelector('.section[data-anchor="intro"]');
    if (section) {
      const content = section.querySelector('.section-content');
      if (content) {
        // Extra top padding to clear the fixed navbar on the DevHive page
        content.style.paddingTop = '6rem';
        content.style.paddingBottom = '6rem'; // keep generous bottom padding
      }
    }
  }, []);
  
  // Simplify the navigation - use the anchor name directly to match the pattern in DevHiveShowcase
  const handleShowcaseClick = () => {
    if (fullpageApi) {
      // This matches how the navbar works in DevHiveShowcase
      // The anchors array is zero-indexed in the onNavClick function
      // Showcase is at index 7 in the anchors array (it's the 8th item)
      const showcaseIndex = 7; // "showcase" is the 8th anchor (index 7)
      fullpageApi.moveTo(showcaseIndex + 1); // +1 because fullpage sections are 1-indexed
    }
  };
  
  const handleMouseEnter = () => {
    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 1500);
  };
  
  return (
    <div className="section bg-stone-900 text-stone-50 flex items-center justify-center" data-anchor="intro">
      <div className="section-content max-w-5xl mx-auto text-center px-6 py-8 pb-24 devhive-section-padding">
        {/* Content remains the same */}
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
            onClick={handleShowcaseClick}
            onMouseEnter={handleMouseEnter}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors text-stone-900 shadow-md hover:shadow-amber-500/20 font-medium relative overflow-hidden"
          >
            <span className="relative z-10">View Showcase</span>
            <span 
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full ${
                isAnimating ? 'animate-shine' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
