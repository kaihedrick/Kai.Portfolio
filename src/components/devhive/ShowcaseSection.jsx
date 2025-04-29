import React, { useState } from "react";

const showcaseSlides = [
  { title: "Create Sprint & Task", src: "/videos/CreateSprint_CreateTask.mp4", type: "video" },
  { title: "DevHive Board", src: "/videos/DevHiveBoard.mp4", type: "video" },
  { title: "React Second Demo", src: "/videos/DevHiveReactSecondDemo.mp4", type: "video" },
  { title: "Join & Leave Project", src: "/videos/JoinLeaveProject.mp4", type: "video" },
  { title: "Messaging, Invites, and Account Settings", src: "/videos/FlutterDemoLong.mp4", type: "video" },
  { title: "Project Backlog", src: "/videos/ProjectBacklog.mp4", type: "video" }
];

export default function ShowcaseSection({ setExpandedImage }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="section bg-stone-800 text-stone-100 flex items-center justify-center overflow-hidden" data-anchor="showcase">
      <div className="section-content max-w-5xl mx-auto px-4 overflow-hidden">
        {/* Header */}
        <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
          <span className="text-amber-400 text-sm font-medium">Project Showcase</span>
        </div>
        <h2 className="text-4xl font-semibold mb-6 text-amber-400">UI Showcase & Demo</h2>

        {/* Showcase Carousel with fixed height */}
        <div className="relative w-full h-[400px] mb-8 overflow-visible">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900/80 hover:bg-stone-900 text-amber-400 p-2 rounded-r-lg border-l-2 border-amber-500 transition-all"
            onClick={() => setActiveIndex(activeIndex === 0 ? showcaseSlides.length - 1 : activeIndex - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Content container with controlled overflow */}
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
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
                      preload="metadata" // Only load the metadata first for better mobile performance
                      playsInline // Important for iOS
                      muted // Start muted (users can unmute)
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={item.src}
                      alt={item.title}
                      className="w-full max-h-[280px] object-contain rounded cursor-pointer transition-transform group-hover:scale-[1.02]"
                      onClick={() => setExpandedImage(item)}
                    />
                  )}
                  {item.type !== "video" && (
                    <div 
                      className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded"
                      onClick={() => setExpandedImage(item)}
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

        {/* QR Code Cards - Shortened for smaller screens */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {/* Kai Card */}
          <div className="bg-stone-900/60 backdrop-blur-md border border-amber-500/20 rounded-xl p-4 w-32 md:w-40 flex flex-col items-center shadow-inner shadow-black/10 transition-transform hover:scale-105">
            <img
              src="/images/KaiQR.png"
              alt="Kai Hedrick QR"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
            <span className="mt-2 text-stone-300 text-xs md:text-sm font-medium tracking-wide">Kai Hedrick</span>
          </div>

          {/* Karsten Card */}
          <div className="bg-stone-900/60 backdrop-blur-md border border-amber-500/20 rounded-xl p-4 w-32 md:w-40 flex flex-col items-center shadow-inner shadow-black/10 transition-transform hover:scale-105">
            <img
              src="/images/KarstenQR.png"
              alt="Karsten Hedrick QR"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
            <span className="mt-2 text-stone-300 text-xs md:text-sm font-medium tracking-wide">Karsten Hedrick</span>
          </div>
        </div>
      </div>
    </div>
  );
}
