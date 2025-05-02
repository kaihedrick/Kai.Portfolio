import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FrostedNavbar from "../components/FrostedNavbar";

import IntroductionSection from "../components/devhive/IntroductionSection";
import RequirementsSection from "../components/devhive/RequirementsSection";
import TechnologiesSection from "../components/devhive/TechnologiesSection";
import NewTechSection from "../components/devhive/NewTechSection";
import ApproachSection from "../components/devhive/ApproachSection";
import RisksSection from "../components/devhive/RisksSection";
import LimitationsSection from "../components/devhive/LimitationsSection";
import ShowcaseSection from "../components/devhive/ShowcaseSection";

const anchors = [
  "intro",
  "requirements",
  "technologies",
  "new-tech",
  "approach",
  "risks",
  "limitations",
  "showcase"
];

export default function DevHiveShowcase() {
  const [fullpageApi, setFullpageApi] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  // Create handleNavClick function similar to App.jsx
  const handleNavClick = (sectionId) => {
    if (fullpageApi) {
      fullpageApi.moveTo(sectionId + 1);
    }
  };

  return (
    <>
      {/* Frosted Navbar with updated onNavClick */}
      <FrostedNavbar isHome={false} onNavClick={handleNavClick} />

      {/* Global Fullscreen Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-stone-900 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setExpandedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="max-h-[90vh] max-w-[90vw] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-amber-300 text-xl font-medium mb-3">{expandedImage.title}</h3>
            {expandedImage.type === "video" ? (
              <video controls className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg">
                <source src={expandedImage.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={expandedImage.src}
                alt={expandedImage.title}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      )}

      {/* Fullpage Sections */}
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={[
          "Intro",
          "Requirements",
          "Technologies",
          "New Tech",
          "Approach",
          "Risks",
          "Limitations",
          "Showcase"
        ]}
        scrollingSpeed={700}
        scrollOverflow
        responsiveWidth={800}
        responsiveHeight={600}
        responsiveSlides
        bigSectionsDestination={'top'}
        paddingTop={'0px'}
        paddingBottom={'0px'}
        normalScrollElements={'.scrollable-content'}
        afterRender={({ fullpageApi }) => {
          console.log("fullpageApi initialized in DevHiveShowcase");
          setFullpageApi(fullpageApi);
        }}
        render={({ state, fullpageApi }) => (
          <div id="fullpage">
            {/* Pass both fullpageApi and handleNavClick to IntroductionSection */}
            <IntroductionSection fullpageApi={fullpageApi} handleNavClick={handleNavClick} />
            <RequirementsSection />
            <TechnologiesSection />
            <NewTechSection />
            <ApproachSection setExpandedImage={setExpandedImage} />
            <RisksSection />
            <LimitationsSection />
            <ShowcaseSection setExpandedImage={setExpandedImage} />
          </div>
        )}
      />
    </>
  );
}
