import React, { useEffect } from "react";

export default function MediaModal({ media, onClose }) {
  useEffect(() => {
    // Prevent scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!media) return null;

  const isVideo = media.type === 'video';

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Media container with liquid glass effect */}
        <div className="rounded-3xl border border-white/20 bg-black/40 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl overflow-hidden">
          {isVideo ? (
            <video
              src={media.src}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          ) : (
            <img
              src={media.src}
              alt={media.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
          
          {/* Caption */}
          {media.caption && (
            <div className="p-4 border-t border-white/10 bg-black/20">
              <p className="text-white text-center text-sm">{media.caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

