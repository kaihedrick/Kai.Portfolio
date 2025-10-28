import React, { useState, useEffect } from "react";

export default function ResumePage() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/KAI_HEDRICK_RESUME.pdf';
    link.download = 'KAI_HEDRICK_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        {/* iOS Download Button */}
        {isIOS && (
          <div className="mb-6">
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-red-500/60 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          </div>
        )}

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

