import React from "react";

export default function ResumePage() {
  return (
    <main className="min-h-screen px-4 md:px-6 lg:px-8 py-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
            Resume
          </h1>
          <p className="text-gray-400">
            Here is my resume
          </p>
        </header>

        {/* PDF Embed */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <iframe
            src="/pdfs/KAI_HEDRICK_RESUME.pdf"
            className="w-full min-h-screen"
            style={{ height: 'calc(100vh - 300px)' }}
            title="Kai Hedrick Resume"
          />
        </div>
      </div>
    </main>
  );
}

