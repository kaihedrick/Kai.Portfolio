import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-red-500/60"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
