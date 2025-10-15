import React from "react";

export default function KaiblePrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-stone-50">
      <div className="mx-auto max-w-3xl px-6 pt-24 md:pt-28 pb-12 text-left">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-red-400 mb-2">kAIble Privacy Policy</h1>
          <p className="text-stone-300">Effective Date: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="space-y-6 text-stone-200">
          <p>
            Discover Scripture. Experience Insight. Grow Spiritually.
          </p>
          <p>
            kAIble transforms Bible reading into a deeply personal experience. Built with care and powered by advanced on-device AI summarization, kAIble helps you not only read Scripture — but understand it. This Privacy Policy explains how kAIble handles your information.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Summary</h2>
          <ul className="list-disc pl-6 space-y-2 text-stone-200 text-left">
            <li>We do not create user accounts and do not require you to provide personal information to use the app.</li>
            <li>All Bible content and AI summaries are stored locally on your device for offline access.</li>
            <li>We do not sell your data, and we do not use third‑party advertising SDKs.</li>
            <li>Any optional diagnostics are anonymized and opt‑in only.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Data We Do Not Collect</h2>
          <p className="text-stone-200">By default, kAIble does <span className="font-semibold">not</span> collect, transmit, or store the following:</p>
          <ul className="list-disc pl-6 space-y-2 text-stone-200 text-left">
            <li>Personal identifiers (name, email, phone number)</li>
            <li>Precise location</li>
            <li>Contacts, photos, or files</li>
            <li>Usage tracking linked to your identity</li>
            <li>Advertising identifiers</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">On‑Device Processing</h2>
          <p className="text-stone-200">
            When you tap a verse to reveal AI‑generated commentary or devotionals, the summarization pipeline runs locally on your device or uses pre‑generated content bundled with the app. This means your interactions remain private and are not sent to external servers for processing.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Local Storage</h2>
          <p className="text-stone-200">
            To enable offline access and a seamless reading experience, kAIble stores Bible text, summaries, and your recently read items locally on your device. You can remove this data at any time by uninstalling the app.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Optional Diagnostics</h2>
          <p className="text-stone-200">
            If you opt in, we may collect minimal, anonymized diagnostics (e.g., crash reports, performance metrics) to improve stability and user experience. These diagnostics do not include personal information and are not linked to your identity.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">No Advertising & No Tracking</h2>
          <p className="text-stone-200">
            kAIble does not include third‑party advertising and does not track you across apps or websites. We do not share, sell, or rent any user data.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Children's Privacy</h2>
          <p className="text-stone-200">
            kAIble is suitable for users of all ages. We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us and we will delete it.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2 text-stone-200 text-left">
            <li>Use the app offline without creating an account.</li>
            <li>Opt in or out of diagnostics at any time (if offered in Settings).</li>
            <li>Delete all locally stored data by uninstalling the app.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Third‑Party Services</h2>
          <p className="text-stone-200">
            If the portfolio website hosting this policy uses basic, privacy‑respecting analytics (page views only), such analytics are aggregated and not linked to your identity. They are separate from the kAIble app and do not impact app usage.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Security</h2>
          <p className="text-stone-200">
            We use reasonable technical and organizational measures to protect information processed by the app. As most data remains on‑device, you retain control. No method of electronic storage is 100% secure, but we continuously improve protections.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">International Use</h2>
          <p className="text-stone-200">
            kAIble may be used globally. Where applicable, local laws may provide you with additional rights.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Changes to This Policy</h2>
          <p className="text-stone-200">
            We may update this Privacy Policy to reflect improvements or regulatory requirements. We will revise the effective date above when changes are made. Material changes will be communicated in‑app or on our portfolio website.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-300">Contact</h2>
          <p className="text-stone-200">
            Questions about privacy? Contact us at <a className="text-red-400 hover:text-red-300 underline" href="mailto:kaihedrick@icloud.com">kaihedrick@icloud.com</a>.
          </p>
        </section>

        <footer className="mt-12 text-sm text-stone-400">
          <p>© {new Date().getFullYear()} kAIble. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
