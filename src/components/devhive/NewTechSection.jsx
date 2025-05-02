import React from "react";

export default function NewTechSection() {
  return (
    <div
      className="section bg-stone-900 text-stone-50 flex items-center justify-center"
      data-anchor="new-tech"
    >
      <div className="section-content max-w-5xl mx-auto px-4 devhive-section-padding flex flex-col items-center justify-center h-full">
        <div className="w-full">
          <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
            <span className="text-amber-400 text-sm font-medium">
              New Technologies Learned
            </span>
          </div>
          <h2 className="text-4xl font-semibold mb-6 text-amber-400">
            New Technologies Learned
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-left mx-auto max-w-xl">
            <li className="flex items-start">
              <span>
                <span className="text-amber-300 font-semibold">Flutter + Dart:</span>{" "}
                <span className="text-stone-300">
                  Cross-platform mobile and desktop builds (Linux, macOS, Windows, Web)
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span>
                <span className="text-amber-300 font-semibold">Firebase Firestore:</span>{" "}
                <span className="text-stone-300">
                  Real-time database for chat messaging
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span>
                <span className="text-amber-300 font-semibold">JWT Auth + Mailgun:</span>{" "}
                <span className="text-stone-300">
                  Advanced email/token auth systems
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span>
                <span className="text-amber-300 font-semibold">AWS Deployment:</span>{" "}
                <span className="text-stone-300">
                  Cloud scalability with Elastic Beanstalk
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-6 bg-stone-800/50 p-4 rounded-lg border border-amber-500/10 text-center">
            <p className="flex flex-col md:flex-row items-center gap-2 justify-center text-lg">
              <span className="text-stone-200">
                These tools gave the team real-world full stack experience across
                platforms, preparing them for industry roles.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
