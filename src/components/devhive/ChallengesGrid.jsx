import React from 'react';

export default function ChallengesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-700/50 shadow-inner backdrop-blur-md">
        <h3 className="text-amber-300 font-semibold text-lg mb-2">Limited iOS Access</h3>
        <p className="text-stone-300 text-sm leading-relaxed">
          We leveraged <strong>TeamViewer</strong> to access macOS remotely. When unavailable, we switched to <strong>cloud simulators</strong> for consistent Flutter testing.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-700/50 shadow-inner backdrop-blur-md">
        <h3 className="text-amber-300 font-semibold text-lg mb-2">Multiple Frontends, One Backend</h3>
        <p className="text-stone-300 text-sm leading-relaxed">
          Sharing a REST API between <strong>Flutter</strong> and <strong>React</strong> required tight contract enforcement via <strong>Postman and schema validation</strong>.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-700/50 shadow-inner backdrop-blur-md">
        <h3 className="text-amber-300 font-semibold text-lg mb-2">Real-Time Messaging</h3>
        <p className="text-stone-300 text-sm leading-relaxed">
          Real-time sync via <strong>Firebase</strong> had platform-specific inconsistencies. We implemented <strong>REST polling fallback</strong> and tested edge cases using <strong>AI-generated scenarios</strong>.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-700/50 shadow-inner backdrop-blur-md">
        <h3 className="text-amber-300 font-semibold text-lg mb-2">MacOS Upgrade Delay</h3>
        <p className="text-stone-300 text-sm leading-relaxed">
          A required upgrade to our macOS machine caused downtime. During that time, we pivoted to backend logic and comprehensive <strong>unit test development</strong>.
        </p>
      </div>

      {/* Card 5 (full width on desktop) */}
      <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-700/50 shadow-inner backdrop-blur-md md:col-span-2">
        <h3 className="text-amber-300 font-semibold text-lg mb-2">UI Consistency Across Platforms</h3>
        <p className="text-stone-300 text-sm leading-relaxed">
          Maintaining a unified design language between mobile and web required shared <strong>Figma files</strong> and consistent <strong>design tokens</strong> for spacing, color, and typography.
        </p>
      </div>
    </div>
  );
}
