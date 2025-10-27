import React, { useState } from "react";
import { SiGithub } from 'react-icons/si';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const email = "kaihedrick@icloud.com";
  const phone = "602-541-8967";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Silently fail if clipboard API is unavailable
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 1800);
    } catch {
      // Silently fail if clipboard API is unavailable
    }
  };

  return (
    <main className="min-h-screen px-4 md:px-6 lg:px-8 py-10 bg-black">
      {/* Header */}
      <section className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100 tracking-tight">Contact Me</h1>
        <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
          I'm open to new projects, collaboration, internships, and roles. Reach out and I'll get back to you soon.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {/* Direct email card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-stone-100 mb-4">Email</h2>
              <button
                onClick={handleCopyEmail}
                className="w-full group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 p-5 transition-all flex items-center justify-between focus-visible:ring-2 focus-visible:ring-red-500/60"
                aria-live="polite"
              >
                <span className="text-stone-100 text-lg">{email}</span>
                <div className="bg-white/10 rounded-full p-3 flex-shrink-0">
                  {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>

            {/* Availability / Preferences */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-stone-100 mb-3">Availability & Preferences</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-stone-300">
                <li>• Response: usually within 24 hours</li>
                <li>• Timezone: MST (Phoenix)</li>
                <li>• Collab: async updates + short syncs</li>
                <li>• Formats: Loom demos, GitHub issues</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="col-span-12 lg:col-span-5 space-y-6">
            {/* Socials grid */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-stone-100 mb-4">Connect</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/kaihedrick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 p-5 transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-red-500/60"
                >
                  <div className="bg-white/10 rounded-full p-3">
                    <SiGithub className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-stone-100">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kai-hedrick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 p-5 transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-red-500/60"
                >
                  <div className="bg-white/10 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667h-3.554v-11.5h3.413v1.571h.048c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.451v6.33zM5.746 7.052c-1.144 0-2.067-.926-2.067-2.067 0-1.144.923-2.067 2.067-2.067 1.143 0 2.067.923 2.067 2.067 0 1.141-.924 2.067-2.067 2.067zM7.523 20.452h-3.554v-11.5h3.554v11.5z"/>
                    </svg>
                  </div>
                  <span className="text-stone-100">LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/kaihedri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 p-5 transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-red-500/60"
                >
                  <div className="bg-white/10 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-stone-100">@kaihedri</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 p-5 transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-red-500/60"
                  aria-live="polite"
                >
                  <div className="bg-white/10 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-stone-100 text-sm">{phoneCopied ? "Copied!" : phone}</span>
                </button>
              </div>
            </div>

            {/* Optional: Quick notes */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-stone-100 mb-3">Notes</h2>
              <p className="text-stone-300">If you don't see a reply, check your spam folder or message me on LinkedIn.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
