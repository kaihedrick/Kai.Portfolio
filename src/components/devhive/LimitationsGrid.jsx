import React from 'react';

export default function LimitationsGrid() {
  return (
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
  );
}