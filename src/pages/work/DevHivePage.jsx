import React, { useState } from "react";
import MediaModal from "../../components/media/MediaModal";
import { 
  SiReact, 
  SiMysql, 
  SiFirebase, 
  SiFlutter, 
  SiDotnet,
  SiGithub,
  SiAmazonwebservices
} from 'react-icons/si';

export default function DevHivePage() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('videos'); // 'videos' or 'images'

  const images = [
    { src: "/images/DevHiveLaunch.png", alt: "DevHive Launch Screen", caption: "DevHive Launch Screen" },
    { src: "/images/DevHiveAccountDetails.png", alt: "Account Details", caption: "User Account Management" },
    { src: "/images/Backlog.png", alt: "Project Backlog", caption: "Project Backlog View" },
    { src: "/images/ProjectDetails.png", alt: "Project Details", caption: "Project Details Dashboard" },
    { src: "/images/Physical_Solution_Design.png", alt: "Physical Solution Design", caption: "Physical Architecture Design" },
    { src: "/images/Logical_Solution_Design.png", alt: "Logical Solution Design", caption: "Logical System Architecture" },
    { src: "/images/Sitemap.png", alt: "Application Sitemap", caption: "Application Structure & Sitemap" },
    { src: "/images/MobileWireframe.png", alt: "Mobile Wireframe", caption: "Flutter Mobile App Wireframe" },
    { src: "/images/ReactComponentDesign.png", alt: "React Component Design", caption: "React Component Architecture" },
  ];

  const videos = [
    { src: "/videos/DevHiveReactSecondDemo.mp4", alt: "DevHive Demo", caption: "Complete Platform Demo" },
    { src: "/videos/DevHiveBoard.mp4", alt: "Kanban Board", caption: "Kanban Board in Action" },
    { src: "/videos/CreateSprint_CreateTask.mp4", alt: "Sprint & Task Creation", caption: "Creating Sprints and Tasks" },
    { src: "/videos/ProjectBacklog.mp4", alt: "Project Backlog Demo", caption: "Managing Project Backlog" },
    { src: "/videos/JoinLeaveProject.mp4", alt: "Join/Leave Project", caption: "Project Membership Management" },
    { src: "/videos/FlutterDemoLong.mp4", alt: "Flutter Mobile Demo", caption: "Flutter Mobile App Demo" },
  ];

  const openMedia = (media, type) => {
    setSelectedMedia({ ...media, type });
  };

  return (
    <main className="theme-devhive min-h-screen px-4 md:px-6 lg:px-8 py-10 bg-black">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight flex items-center gap-3 text-white">
          <img 
            src="/images/DevHiveLogo (1).png"
            alt="DevHive Logo"
            className="h-12 w-12 rounded-xl object-contain p-1"
          />
          DevHive
        </h1>
        <p className="mt-2 text-gray-400 max-w-2xl leading-relaxed">
          Senior project — agile workspace with tasks, sprints, and realtime chat.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a 
            href="https://devhive.it.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500/60 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Launch App
          </a>
          <a 
            href="https://github.com/kaihedrick/DevHive.ReactFrontend" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-amber-500/20 hover:border-amber-500/30 hover:text-amber-400 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500/60 flex items-center gap-2"
          >
            <SiGithub className="w-4 h-4 text-white hover:text-amber-400 transition-colors" />
            View Code
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* Main content */}
        <article className="col-span-12 lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-gray-400 leading-relaxed mb-4">
              DevHive is a collaborative platform designed to connect developers and enable seamless project management. 
              It provides tools for team collaboration and code sharing — all within a user-friendly interface that promotes developer productivity.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              For my capstone project, I completed the entire SDLC, including Proposal, Requirements, Design, Planning, and Risk Management. 
              I developed the React frontend, adhering to MVC principles, and integrated a RESTful API built with ASP.NET within an N-Tier 
              architecture for seamless CRUD operations.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Utilizing Postman for testing and Swagger for documentation, I ensured efficient API communication. My work included interactive 
              interfaces for task management, sprint tracking, and real-time messaging, leveraging MySQL and Firebase. By following agile 
              principles, I delivered a scalable and efficient solution.
            </p>
          </div>
          
          <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <h3 className="font-medium text-white mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://react.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-200"
              >
                <SiReact className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
              </a>
              <a 
                href="https://dotnet.microsoft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-200"
              >
                <SiDotnet className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
              </a>
              <a 
                href="https://www.mysql.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-200"
              >
                <SiMysql className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
              </a>
              <a 
                href="https://firebase.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-200"
              >
                <SiFirebase className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
              </a>
              <a 
                href="https://flutter.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-200"
              >
                <SiFlutter className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
              </a>
              <a 
                href="https://aws.amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-200"
              >
                <SiAmazonwebservices className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                Realtime chat (Firebase)
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                Kanban boards & sprints
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                Cross-platform (Web + Mobile)
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                RESTful API
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                JWT Authentication
              </li>
            </ul>
          </div>
        </aside>

        {/* Media Gallery with Tabs */}
        <section className="col-span-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Project Media</h2>
            
            {/* Tab Buttons */}
            <div className="flex gap-2 rounded-full bg-white/5 p-1">
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'videos'
                    ? 'bg-amber-500 text-black'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Videos ({videos.length})
              </button>
              <button
                onClick={() => setActiveTab('images')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'images'
                    ? 'bg-amber-500 text-black'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Images ({images.length})
              </button>
            </div>
          </div>

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => openMedia(video, 'video')}
                  className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/20"
                >
                  <video
                    src={video.src}
                    className="w-full aspect-video object-cover bg-gradient-to-br from-amber-900/20 to-amber-800/20"
                    muted
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/90 group-hover:bg-amber-500 transition-colors flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium">{video.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Images Tab */}
          {activeTab === 'images' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openMedia(image, 'image')}
                  className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover bg-gradient-to-br from-amber-900/20 to-amber-800/20"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <MediaModal 
          media={selectedMedia} 
          onClose={() => setSelectedMedia(null)} 
        />
      )}
    </main>
  );
}
