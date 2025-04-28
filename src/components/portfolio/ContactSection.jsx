import React from "react";

export default function ContactSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kaihedrick@icloud.com");
  };

  return (
    <div className="section bg-stone-900 text-stone-50" data-anchor="contact">
      <div className="section-content max-w-5xl mx-auto flex flex-col items-center justify-center px-6">
        <div className="w-full">
          {/* Tagline */}
          <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
            <span className="text-amber-400 text-sm font-medium">Get in touch</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Contact Me</h1>

          {/* Intro Text */}
          <p className="text-lg text-stone-300 text-center mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Email Card */}
          <div className="bg-stone-800/60 backdrop-blur-sm rounded-xl p-6 border border-stone-700 hover:border-amber-500/30 transition-all group mb-12 max-w-xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-amber-400 font-medium mb-1">Email</h3>
                <p className="text-stone-200 text-xl">kaihedrick@icloud.com</p>
              </div>
              <button
                className="bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-stone-900 rounded-lg p-3 transition-colors group-hover:bg-amber-500 group-hover:text-stone-900"
                onClick={handleCopyEmail}
                aria-label="Copy email to clipboard"
                title="Copy to clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-amber-300 text-center">Connect with me</h3>

            <div className="flex flex-wrap justify-center gap-4">
              {/* GitHub */}
              <a href="https://github.com/kaihedrick" target="_blank" rel="noopener noreferrer" className="bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 rounded-xl p-5 flex items-center gap-3 transition-all flex-1 min-w-[170px] max-w-[220px]">
                <div className="bg-stone-700/80 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2.2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.2-3.13-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.2 1.2a11.1 11.1 0 015.8 0c2.22-1.52 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.81 1.2 1.85 1.2 3.13 0 4.51-2.75 5.49-5.37 5.79.43.37.81 1.1.81 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                  </svg>
                </div>
                <span className="text-stone-200">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/kai-hedrick" target="_blank" rel="noopener noreferrer" className="bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 rounded-xl p-5 flex items-center gap-3 transition-all flex-1 min-w-[170px] max-w-[220px]">
                <div className="bg-stone-700/80 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667h-3.554v-11.5h3.413v1.571h.048c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.451v6.33zM5.746 7.052c-1.144 0-2.067-.926-2.067-2.067 0-1.144.923-2.067 2.067-2.067 1.143 0 2.067.923 2.067 2.067 0 1.141-.924 2.067-2.067 2.067zM7.523 20.452h-3.554v-11.5h3.554v11.5z"/>
                  </svg>
                </div>
                <span className="text-stone-200">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/kaihedri/" target="_blank" rel="noopener noreferrer" className="bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 rounded-xl p-5 flex items-center gap-3 transition-all flex-1 min-w-[170px] max-w-[220px]">
                <div className="bg-stone-700/80 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                </div>
                <span className="text-stone-200">@kaihedri</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
