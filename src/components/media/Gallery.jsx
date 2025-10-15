import React, { useState } from "react";
import { X } from "lucide-react";

export default function Gallery({ items }) {
  const [active, setActive] = useState(null); // {src, alt, type, title}

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((m, i) => (
          <button
            key={i}
            onClick={() => setActive(m)}
            className="group relative block rounded-xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-amber-400/60"
          >
            {m.type === "video" ? (
              <video
                src={m.thumb || m.src}
                className="w-full h-full object-cover aspect-[4/3]"
                muted
                playsInline
              />
            ) : (
              <img
                loading="lazy"
                src={m.thumb || m.src}
                srcSet={m.srcSet}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                alt={m.alt || ""}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            )}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-stone-900 h-10 w-10 rounded-full flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-amber-400/60"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="max-h-[90vh] max-w-[90vw] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {active.title && (
              <h3 className="text-amber-300 text-xl font-medium mb-3">
                {active.title}
              </h3>
            )}
            {active.type === "video" ? (
              <video
                controls
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              >
                <source src={active.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={active.src}
                alt={active.alt || active.title || ""}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

