import React, { useState } from "react";
import MediaModal from "../../components/media/MediaModal";

export default function KaiblePage() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const screenshots = [
    { src: "/images/kAIble/Bible_Reader_View.png", alt: "Bible Reader View", caption: "Bible Reader View" },
    { src: "/images/kAIble/Book_Picker_View.png", alt: "Book Picker View", caption: "Book Picker View" },
    { src: "/images/kAIble/Chapter_Picker_View.png", alt: "Chapter Picker View", caption: "Chapter Picker View" },
    { src: "/images/kAIble/Commentary_Popup_View.png", alt: "Commentary Popup View", caption: "Commentary Popup View" },
    { src: "/images/kAIble/Full_Commentary_Popup.png", alt: "Full Commentary Popup", caption: "Full Commentary Popup" },
  ];

  const openMedia = (media, type) => {
    setSelectedMedia({ ...media, type });
  };

  return (
    <main className="theme-kaible min-h-screen px-4 md:px-6 lg:px-8 py-10 bg-black">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight flex items-center gap-3 text-white">
          <img 
            src="/images/kAIble/kaible image.png"
            alt="kAIble Logo"
            className="h-12 w-12 rounded-xl object-contain p-1"
          />
          kAIble
        </h1>
        <p className="mt-2 text-gray-400 max-w-2xl leading-relaxed">
          iOS Bible reader with on-device AI commentary and devotionals.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a 
            href="https://apps.apple.com/us/app/kaible/id6753740380" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors focus-visible:ring-2 focus-visible:ring-red-500/60 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Download on App Store
          </a>
          <a 
            href="/kaible-privacy" 
            className="px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-red-500/60"
          >
            Privacy Policy
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* Main content */}
        <article className="col-span-12 lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-gray-400 leading-relaxed mb-4">
              kAIble is an innovative iOS Bible reading application that combines traditional scripture study with modern AI technology. 
              The app provides intelligent commentary and devotional insights powered by on-device machine learning.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built with Swift and SwiftUI, kAIble offers a beautiful, distraction-free reading experience with liquid-glass UI elements 
              that feel native to iOS. The app works completely offline, ensuring your spiritual journey is never interrupted.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Features include verse-level annotations, personalized devotionals, reading plans, and AI-powered contextual commentary 
              that helps deepen understanding without requiring an internet connection.
            </p>
          </div>
          
          <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <h3 className="font-medium text-white mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip px-3 py-1 rounded-full text-sm font-medium text-white">Swift</span>
              <span className="chip px-3 py-1 rounded-full text-sm font-medium text-white">SwiftUI</span>
              <span className="chip px-3 py-1 rounded-full text-sm font-medium text-white">Core ML</span>
              <span className="chip px-3 py-1 rounded-full text-sm font-medium text-white">Core Data</span>
              <span className="chip px-3 py-1 rounded-full text-sm font-medium text-white">iOS 17+</span>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h3 className="text-sm font-semibold text-white mb-4">Highlights</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              On-device AI commentary
            </li>
            <li className="flex items-center gap-2 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              Liquid-glass UI
            </li>
            <li className="flex items-center gap-2 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              Verse-level notes
            </li>
            <li className="flex items-center gap-2 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              Offline-first design
            </li>
            <li className="flex items-center gap-2 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              Reading plans
            </li>
          </ul>
        </aside>

        {/* App Screenshots */}
        <section className="col-span-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">App Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => openMedia(screenshot, 'image')}
                className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/20"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full aspect-[9/16] object-cover bg-gradient-to-br from-red-900/20 to-red-800/20"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs font-medium">{screenshot.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <MediaModal 
          media={selectedMedia} 
          onClose={() => setSelectedMedia(null)} 
        />
      )}
    </main>
  );
}
