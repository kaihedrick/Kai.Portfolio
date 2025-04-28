import React from 'react';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-stone-900/70 z-[100] flex items-center justify-center">
      <div className="bg-stone-800 p-4 rounded-lg flex items-center gap-3">
        <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-amber-400">Loading...</span>
      </div>
    </div>
  );
}