import React from "react";
import profilePhoto from "../assets/KaiEditMex.jpg";
import { 
  SiReact, 
  SiJavascript, 
  SiMysql, 
  SiFirebase, 
  SiFlutter, 
  SiDotnet,
  SiGithub,
  SiMongodb,
  SiPostman,
  SiSpring,
  SiAngular,
  SiSwift
} from 'react-icons/si';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 md:px-6 lg:px-8 py-10 bg-black">
      {/* Header */}
      <section className="max-w-6xl mx-auto mb-10">
        <div className="bg-red-500/10 p-2 px-4 rounded-full mb-4 inline-block border border-red-500/20">
          <span className="text-red-300 text-sm font-medium">About Me</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100 tracking-tight">The Journey Behind the Code</h1>
        <p className="text-lg text-stone-300 leading-relaxed max-w-3xl">
          I've always been fascinated by how creativity meets logic. From video editing and sound design to full‑stack software development, my journey has been all about creating, whether it's a game, app, song, or visual story.
        </p>
      </section>

      {/* Bio Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* LEFT: Image + Snapshot */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 flex flex-col items-center text-center">
            <img
              src={profilePhoto}
              alt="Portrait of Kai Hedrick"
              className="w-full h-auto rounded-2xl mb-4 border border-white/10"
            />
            <h2 className="text-xl font-semibold text-stone-100 mb-1">Kai Hedrick</h2>
            <p className="text-stone-400">Software Developer • Creator • Storyteller</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-lg font-semibold text-stone-100 mb-3">Quick Facts</h3>
            <ul className="text-stone-300 space-y-2">
              <li>📍 Based in Arizona (MST)</li>
              <li>🎮 Loves game design & tech camps</li>
              <li>🎸 Plays guitar & writes music</li>
              <li>🧠 Interested in software architecture & UI design</li>
            </ul>
          </div>

          <a 
            href="https://www.youtube.com/@KaiTheGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 hover:border-red-500/30 transition-all block group"
          >
            <div className="flex items-center gap-3">
              <img 
                src="https://yt3.googleusercontent.com/ytc/AIdro_mI0gjtcjmH_2_EaZd9mp0KP9V9YuLbtkjobkYlvq0TatA=s160-c-k-c0x00ffffff-no-rj" 
                alt="YouTube Channel" 
                className="w-12 h-12 rounded-full border border-white/10"
              />
              <div>
                <h3 className="text-lg font-semibold text-stone-100 group-hover:text-red-400 transition-colors">Kai The Guy</h3>
                <p className="text-stone-400 text-sm">YouTube Channel</p>
              </div>
            </div>
          </a>

          {/* Skills Section */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-lg font-semibold text-stone-100 mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://react.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiReact className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">React</span>
              </a>
              <a 
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiJavascript className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">JavaScript</span>
              </a>
              <a 
                href="https://www.mysql.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiMysql className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">MySQL</span>
              </a>
              <a 
                href="https://firebase.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiFirebase className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">Firebase</span>
              </a>
              <a 
                href="https://flutter.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiFlutter className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">Flutter</span>
              </a>
              <a 
                href="https://dotnet.microsoft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiDotnet className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">.NET</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiGithub className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">GitHub</span>
              </a>
              <a 
                href="https://www.mongodb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiMongodb className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">MongoDB</span>
              </a>
              <a 
                href="https://www.postman.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiPostman className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">Postman</span>
              </a>
              <a 
                href="https://spring.io/projects/spring-boot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiSpring className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">Spring Boot</span>
              </a>
              <a 
                href="https://angular.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiAngular className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">Angular</span>
              </a>
              <a 
                href="https://developer.apple.com/swift/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all duration-200"
              >
                <SiSwift className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                <span className="text-stone-300 text-sm font-medium hover:text-red-400 transition-colors">Swift</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Long Bio */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Early Passion for Technology</h2>
            <p className="text-stone-300 leading-relaxed">
              My love for technology began around age 14 when I attended <strong>ID Tech Camp</strong> at Arizona State University. Those summers introduced me to programming through <strong>Unity</strong> and <strong>Unreal Engine</strong>, and even sparked my curiosity for modding. I built <strong>Java mods for Minecraft</strong> long before understanding object‑oriented programming formally.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Creative Foundations</h2>
            <p className="text-stone-300 leading-relaxed">
              In high school, my creativity branched out into <strong>video editing</strong> and <strong>media production</strong>. I worked with <strong>Adobe After Effects</strong>, <strong>Premiere Pro</strong>, and <strong>Photoshop</strong>, learning motion tracking, lyric syncing, color grading, and flow control for video rhythm. These experiences taught me not only design but logic flow, pattern recognition, and storytelling; skills that later strengthened my approach to programming.
            </p>
            <p className="text-stone-300 leading-relaxed mt-3">
              My YouTube channel, <a href="https://www.youtube.com/@KaiTheGuy" className="text-red-400 underline hover:text-red-300">Kai The Guy</a>, became my personal sandbox. Over the years, it evolved from simple edits to layered, music‑synced videos that balance humor, storytelling, and creative timing.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Academic Background & Development</h2>
            <p className="text-stone-300 leading-relaxed">
              After high school, I enrolled at <strong>Grand Canyon University</strong>, initially majoring in <strong>Computer Science (Game Design emphasis)</strong>. There, I learned <strong>C++</strong>, understanding classes, pointers, and memory management. I later transitioned to a <strong>Software Development</strong> degree to focus on building production‑grade apps with scalable architecture.
            </p>
            <p className="text-stone-300 leading-relaxed mt-3">
              This path deepened my skills in <strong>clean architecture</strong>, <strong>SOLID principles</strong>, and <strong>microservice design</strong>. My coursework included enterprise development, databases, cloud deployment, and front‑to‑back system integration. You can read about the program <a href="https://www.gcu.edu/degree-programs/bs-software-development" className="text-red-400 underline hover:text-red-300">here</a>.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Beyond Code</h2>
            <p className="text-stone-300 leading-relaxed">
              Outside of development, I'm a musician and sound designer, producing tracks in <strong>FL Studio</strong> and exploring songwriting and composition with my brother, <strong>Karsten Hedrick</strong>. Creativity has always been a shared part of our lives, whether experimenting with guitar tones, building new apps, or exploring digital storytelling.
            </p>
            <p className="text-stone-300 leading-relaxed mt-3">
              My projects and hobbies all share one goal: to design experiences that connect people, whether through gameplay, visuals, or code.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
