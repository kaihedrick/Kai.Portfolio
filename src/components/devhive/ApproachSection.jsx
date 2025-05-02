import React, { useEffect } from "react";
import DiagramCarousel from "./DiagramCarousel";

export default function ApproachSection({ setExpandedImage }) {
  // Update useEffect to use rem units
  useEffect(() => {
    const section = document.querySelector('.section[data-anchor="approach"]');
    if (section) {
      const content = section.querySelector('.section-content');
      if (content) {
        content.style.paddingTop = '2rem'; // Less padding at top
        content.style.paddingBottom = '6rem'; // 6rem padding at bottom
      }
    }
  }, []);

  return (
    <div
      className="section bg-stone-800 text-stone-100 flex items-center justify-center"
      data-anchor="approach"
    >
      <div className="section-content max-w-4xl mx-auto px-4 py-8 devhive-section-padding"> {/* Added helper class */}
        {/* Header */}
        <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
          <span className="text-amber-400 text-sm font-medium">
            Technical Approach & Diagrams
          </span>
        </div>
        <h2 className="text-4xl font-semibold mb-6 text-amber-400">
          Technical Approach & Diagrams
        </h2>
        
        {/* Description */}
        <p className="mb-8">
          The architecture follows an N-tier pattern:{" "}
          <span className="text-amber-300 font-semibold">
            UI → Business Logic → Data Access → Database
          </span>. A RESTful API serves as the unifying layer between web and mobile platforms.
          <br />
          <span className="text-stone-100">
            SDLC phases were followed: requirements, design, implementation, testing, deployment.
          </span>
        </p>

        {/* Diagram Carousel */}
        <DiagramCarousel setExpandedImage={setExpandedImage} />

        {/* Footer */}
        <div className="bg-stone-900/50 p-4 rounded-lg border border-amber-500/10 text-center mt-8">
          <p className="text-stone-300">
            <span className="text-amber-300 font-medium">Design Approach:</span>{" "}
            These diagrams illustrate clean separation of concerns, security layers, and component relationships. The architecture enables independent scaling of services and cross-platform functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
