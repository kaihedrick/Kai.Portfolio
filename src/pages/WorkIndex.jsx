import React from "react";

const projects = [
  { 
    title: "DevHive", 
    href: "/work/devhive", 
    blurb: "Agile workspace with chat + boards",
    color: "#f59e0b",
    textColor: "text-amber-500",
    logo: "/images/DevHiveLogo (1).png"
  },
  { 
    title: "kAIble", 
    href: "/work/kaible", 
    blurb: "iOS Bible reader + on-device AI",
    color: "#ef4444",
    textColor: "text-red-500",
    logo: "/images/kAIble/kaible image.png"
  }
];

export default function WorkIndex() {
  return (
    <main className="min-h-screen px-4 md:px-6 lg:px-8 py-10 bg-black">
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Work
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A collection of projects showcasing full-stack development, mobile apps, and collaborative platforms.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            className="group block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <img 
                src={project.logo}
                alt={`${project.title} Logo`}
                className="h-12 w-12 rounded-xl flex-shrink-0 transition-transform group-hover:scale-110 object-contain p-1"
              />
              <div className="flex-1">
                <h2 className={`text-2xl font-semibold text-white mb-2 group-hover:${project.textColor} transition-colors`}>
                  {project.title}
                </h2>
                <p className="text-gray-400">
                  {project.blurb}
                </p>
                <div className="mt-4 text-sm font-medium" style={{ color: project.color }}>
                  View project →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
