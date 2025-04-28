import React, { useState } from "react";

export default function ShowcaseCarousel({ showcaseSlides, onExpand }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[400px] mb-8">
      {/* Navigation Arrows */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900/80 hover:bg-stone-900 text-amber-400 p-2 rounded-r-lg border-l-2 border-amber-500 transition-all"
        onClick={() => setActiveIndex(activeIndex === 0 ? showcaseSlides.length - 1 : activeIndex - 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Content Area */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {showcaseSlides.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out bg-stone-900/80 border border-amber-400 rounded-lg p-4 flex flex-col items-center ${
              index === activeIndex
                ? "z-30 scale-100 opacity-100"
                : index === (activeIndex - 1 + showcaseSlides.length) % showcaseSlides.length
                  ? "z-20 -translate-x-[70%] scale-75 opacity-60 blur-[1px]"
                  : index === (activeIndex + 1) % showcaseSlides.length
                    ? "z-20 translate-x-[70%] scale-75 opacity-60 blur-[1px]"
                    : "z-10 opacity-0 scale-50"
            }`}
          >
            <h3 className="text-amber-300 text-lg font-medium mb-2">{item.title}</h3>
            <div className="relative group">
              {item.type === "video" ? (
                <video
                  className="rounded max-h-[280px] max-w-full md:w-auto w-full"
                  controls
                  preload="metadata"
                  playsInline
                  muted
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full max-h-[280px] object-contain rounded cursor-pointer transition-transform group-hover:scale-[1.02]"
                  onClick={() => onExpand(item)}
                />
              )}
              {item.type !== "video" && (
                <div
                  className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded"
                  onClick={() => onExpand(item)}
                >
                  <div className="bg-amber-500/80 text-stone-900 px-3 py-1 rounded-full text-sm font-medium">
                    Click to expand
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900/80 hover:bg-stone-900 text-amber-400 p-2 rounded-l-lg border-r-2 border-amber-500 transition-all"
        onClick={() => setActiveIndex((activeIndex + 1) % showcaseSlides.length)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
