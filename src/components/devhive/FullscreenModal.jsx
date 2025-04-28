import React from 'react';

export default function FullscreenModal({ expandedImage, onClose }) {
  if (!expandedImage) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-stone-900 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
        onClick={onClose}
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

        {/* Always render as an image because diagrams are images */}
        <img 
          src={expandedImage.src}
          alt={expandedImage.title}
          className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
