import React from 'react';

export default function LimitationsSection() {
  return (
    <div className="section bg-stone-800 text-stone-100 flex items-center justify-center" data-anchor="limitations">
      <div className="section-content max-w-5xl mx-auto px-4">

        {/* Tagline */}
        <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
          <span className="text-amber-400 text-sm font-medium">Current Limitations</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-10 text-amber-400">Outstanding Issues & Final Touches</h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-stone-900/60 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
            <span className="block text-amber-300 font-medium text-lg mb-2">Missing Deployment</span>
            <p className="text-stone-300 text-sm leading-relaxed">
              The project is hosted on AWS but awaits final domain linking and public deployment via CloudFront.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-stone-900/60 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
            <span className="block text-amber-300 font-medium text-lg mb-2">Out-of-Scope Features</span>
            <p className="text-stone-300 text-sm leading-relaxed">
              Voice messages, file sharing, emoji reactions, and advanced chat options were scoped out to ensure MVP quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-stone-900/60 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
            <span className="block text-amber-300 font-medium text-lg mb-2">Final Testing</span>
            <p className="text-stone-300 text-sm leading-relaxed">
              Final UI tuning and usability testing across screen sizes are underway to ensure polished user experience.
            </p>
          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-10 bg-stone-900/50 p-4 rounded-lg border border-amber-500/10 text-center">
          <p className="text-stone-300 text-sm">
            <strong className="text-amber-300">Next Steps:</strong> Finalize DNS setup, add analytics, and implement user notification features.
          </p>
        </div>

      </div>
    </div>
  );
}
