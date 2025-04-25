import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FrostedNavbar from "../components/FrostedNavbar";
import reactLogo from "../assets/react.svg";
import netLogo from "../assets/logo_net.svg";
import flutterLogo from "../assets/flutter_logo.svg";
import githubMark from "../assets/github-mark.svg";
import mysqlLogo from "../assets/mysql.svg";
import firebaseLogo from "../assets/firebase.svg";
import awsLogo from "../assets/aws.svg";

const anchors = [
  "intro",
  "requirements",
  "technologies",
  "new-tech",
  "approach",
  "risks",
  "limitations",
  "showcase"
];

export default function DevHiveShowcase() {
  const [fullpageApi, setFullpageApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const diagrams = [
    { title: "Logical Solution Diagram", src: "/images/Logical_Solution_Design.png" },
    { title: "Physical Solution Diagram", src: "/images/Physical_Solution_Design.png" },
    { title: "Component Design", src: "/images/ReactComponentDesign.png" },
    { title: "Mobile Wireframe", src: "/images/MobileWireframe.png" },
    { title: "Sitemap", src: "/images/Sitemap.png" }
  ];
  
  const showcaseSlides = [
    { title: "Create Sprint & Task", src: "/videos/CreateSprint_CreateTask.mp4", type: "video" },
    { title: "DevHive Board", src: "/videos/DevHiveBoard.mp4", type: "video" },
    { title: "React Second Demo", src: "/videos/DevHiveReactSecondDemo.mp4", type: "video" },
    { title: "Join & Leave Project", src: "/videos/JoinLeaveProject.mp4", type: "video" },
    { title: "Messaging, Invites, and Account Settings", src: "/videos/FlutterDemoLong.mp4", type: "video" },
    { title: "Project Backlog", src: "/videos/ProjectBacklog.mp4", type: "video" }
  ];
  
  
  return (
    <>
      <FrostedNavbar isHome={false} onNavClick={idx => fullpageApi && fullpageApi.moveTo(idx + 1)} />
      
      {/* Fullscreen Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-stone-900 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setExpandedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="max-h-[90vh] max-w-[90vw] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-amber-300 text-xl font-medium mb-3">{expandedImage.title}</h3>
            {expandedImage.type === "video" ? (
              <video controls className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg">
                <source src={expandedImage.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={expandedImage.src} 
                alt={expandedImage.title}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg" 
              />
            )}
          </div>
        </div>
      )}
      
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={[
          "Intro",
          "Requirements",
          "Technologies",
          "New Tech",
          "Approach",
          "Risks",
          "Limitations",
          "Showcase"
        ]}
        scrollingSpeed={700}
        scrollOverflow={true}
        afterRender={api => setFullpageApi(api)}
        render={({ fullpageApi }) => (
          <div id="fullpage">
            {/* 1. Introduction */}
            <div className="section bg-stone-900 text-stone-50 flex items-center justify-center" data-anchor="intro">
              <div className="section-content max-w-5xl mx-auto text-center px-6 py-24">

                {/* Tagline */}
                <div className="bg-amber-500/10 px-4 py-1.5 rounded-full mb-6 inline-block shadow-sm shadow-amber-400/10">
                  <span className="text-amber-300 text-sm font-semibold tracking-wide">Project Introduction</span>
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-7xl font-extrabold text-amber-400 tracking-tight mb-6 leading-tight">
                  DevHive
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-stone-300 font-light mb-12 max-w-3xl mx-auto">
                  A minimalist, cross-platform workspace for agile teams to manage tasks, message in real time, and stay aligned.
                </p>

                {/* Feature Highlights */}
                <div className="grid gap-6 md:grid-cols-3 text-left text-lg md:text-xl text-stone-200 font-light max-w-4xl mx-auto mb-12">
                  <div className="bg-stone-800/40 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
                    <span className="block text-amber-300 font-medium mb-2">Real-Time Messaging</span>
                    <p>Direct and group chat built for fast, asynchronous collaboration.</p>
                  </div>
                  <div className="bg-stone-800/40 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
                    <span className="block text-amber-300 font-medium mb-2">Sprint Planning</span>
                    <p>Manage tasks, sprints, and assignments with intuitive drag-and-drop boards.</p>
                  </div>
                  <div className="bg-stone-800/40 p-6 rounded-xl shadow-inner shadow-black/10 backdrop-blur-md border border-stone-700/50">
                    <span className="block text-amber-300 font-medium mb-2">Unified Experience</span>
                    <p>All-in-one platform, built for speed — no tab-switching, no context loss.</p>
                  </div>
                </div>

                {/* Target audience */}
                <p className="text-stone-400 text-lg mb-10">
                  Designed for agile developers, product managers, and startup teams who crave focus and flow.
                </p>

                {/* CTA to Showcase */}
                <div className="flex justify-center">
                  <button
                    onClick={() => fullpageApi && fullpageApi.moveTo(8)}
                    className="px-8 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    View Showcase
                  </button>
                </div>
              </div>
            </div>


            {/* 2. High-Level Functional & Non-Functional Requirements */}
            <div className="section bg-stone-800 text-stone-100 flex items-center justify-center" data-anchor="requirements">
              <div className="section-content max-w-5xl mx-auto px-4 flex flex-col items-center justify-center h-full">
                <div className="w-full">
                  <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                    <span className="text-amber-400 text-sm font-medium">Requirements</span>
                  </div>
                  <h2 className="text-4xl font-semibold mb-6 text-amber-400">Functional & Non-Functional Requirements</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
            {/* Functional Requirements */}
            <div>
              <h3 className="text-amber-300 text-xl font-medium mb-3 border-b border-stone-700 pb-2">Functional Requirements</h3>
              <div className="h-[300px] overflow-y-auto pr-2 styled-scrollbar">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200 w-1/3">Auth</td>
                      <td className="py-2 text-stone-300">Register, Login, JWT-secured sessions</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Forgot Password</td>
                      <td className="py-2 text-stone-300">Reset Flow (via Mailgun)</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Project Management</td>
                      <td className="py-2 text-stone-300">CRUD, Invite, Ownership, Member Roles</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Sprint Management</td>
                      <td className="py-2 text-stone-300">Start/Stop, Date validation, Statuses</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Task Management</td>
                      <td className="py-2 text-stone-300">CRUD, Assignment, Drag-and-drop Kanban</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Backlog View</td>
                      <td className="py-2 text-stone-300">Filter by sprint, inline editing</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Messaging</td>
                      <td className="py-2 text-stone-300">Firebase-powered real-time chat (Direct + Group)</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Member Management</td>
                      <td className="py-2 text-stone-300">Kick, Assign, Role-labeling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Non-Functional Requirements */}
            <div>
              <h3 className="text-amber-300 text-xl font-medium mb-3 border-b border-stone-700 pb-2">Non-Functional Requirements</h3>
              <div className="h-[300px] overflow-y-auto pr-2 styled-scrollbar">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200 w-1/3">AWS Deployment</td>
                      <td className="py-2 text-stone-300">Elastic Beanstalk Configuration</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Security</td>
                      <td className="py-2 text-stone-300">JWT Authentication, Hashed Passwords, Email Validation</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Real-time Updates</td>
                      <td className="py-2 text-stone-300">Firebase Firestore Integration</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Portability</td>
                      <td className="py-2 text-stone-300">Responsive Design (React + Flutter)</td>
                    </tr>
                    <tr className="border-b border-stone-700/50">
                      <td className="py-2 pr-3 font-medium text-amber-200">Error Handling</td>
                      <td className="py-2 text-stone-300">Comprehensive logging + Modal Confirmations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
                  
            <div className="mt-6 bg-stone-900/50 p-3 rounded-lg border border-amber-500/10 text-center">
              <strong className="text-amber-300">Example Use Case:</strong> 
              <p className="text-stone-300 mt-1">As a product owner, I can create sprints, assign tasks to team members, and track progress across both web and mobile interfaces.</p>
            </div>
          </div>
        </div>
      </div>

            {/* 3. Technologies Used & Industry Best Practices */}
            <div className="section bg-stone-700 text-stone-100 flex items-center justify-center" data-anchor="technologies">
              <div className="section-content max-w-5xl mx-auto px-4 flex flex-col items-center justify-center h-full">
                <div className="w-full">
                  <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                    <span className="text-amber-400 text-sm font-medium">Technologies & Architecture</span>
                  </div>
                  <h2 className="text-4xl font-semibold mb-6 text-amber-400">Tech Stack & Architecture</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div className="bg-stone-800/70 p-6 rounded-lg border border-amber-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center">
                          <img src={reactLogo} alt="React" className="h-6 w-6" />
                          <img src={flutterLogo} alt="Flutter" className="h-6 w-6 ml-1" />
                        </div>
                        <h3 className="text-amber-300 text-xl font-medium">Frontend</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">React 18.x:</span> 
                            <span className="text-stone-300"> Desktop Web</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">Flutter 3.24:</span> 
                            <span className="text-stone-300"> Mobile + Desktop + Web UI</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">UI Libraries:</span> 
                            <span className="text-stone-300"> Bootstrap, FontAwesome, TailwindCSS</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Backend */}
                    <div className="bg-stone-800/70 p-6 rounded-lg border border-amber-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={netLogo} alt=".NET" className="h-6 w-6" />
                        <h3 className="text-amber-300 text-xl font-medium">Backend</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">ASP.NET Core 8:</span> 
                            <span className="text-stone-300"> REST API</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">Authentication:</span> 
                            <span className="text-stone-300"> JWT-based</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">Email Service:</span> 
                            <span className="text-stone-300"> Mailgun for reset tokens</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Databases */}
                    <div className="bg-stone-800/70 p-6 rounded-lg border border-amber-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center">
                          <img src={mysqlLogo} alt="MySQL" className="h-6 w-6" />
                          <img src={firebaseLogo} alt="Firebase" className="h-6 w-6 ml-1" />
                        </div>
                        <h3 className="text-amber-300 text-xl font-medium">Databases</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">MySQL:</span> 
                            <span className="text-stone-300"> Users, Projects, Sprints, Tasks</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">Firebase Firestore:</span> 
                            <span className="text-stone-300"> Chat messaging</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Cloud & DevOps */}
                    <div className="bg-stone-800/70 p-6 rounded-lg border border-amber-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={awsLogo} alt="AWS" className="h-6 w-6" />
                        <h3 className="text-amber-300 text-xl font-medium">Cloud & DevOps</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">AWS:</span> 
                            <span className="text-stone-300"> Elastic Beanstalk Deployment</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-200 mr-2">•</span>
                          <span><span className="text-amber-200 font-medium">CI/CD:</span> 
                            <span className="text-stone-300"> GitHub Actions</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-stone-900/50 p-4 rounded-lg border border-amber-500/10 text-center">
                    <p className="text-stone-300">
                      <strong className="text-amber-300">Architecture:</strong> N-tier design with separate presentation, business logic, and data layers.
                      <br />Cross-platform support via a unified API layer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. New Technologies Learned */}
            <div className="section bg-stone-900 text-stone-50 flex items-center justify-center" data-anchor="new-tech">
              <div className="section-content max-w-3xl mx-auto px-4 flex flex-col items-center justify-center h-full">
                <div className="w-full">
                  <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                    <span className="text-amber-400 text-sm font-medium">New Technologies Learned</span>
                  </div>
                  <h2 className="text-4xl font-semibold mb-6 text-amber-400">New Technologies Learned</h2>
                  
                  <ul className="list-disc pl-5 space-y-3 text-left mx-auto max-w-xl">
                    <li className="flex items-start">

                      <span><span className="text-amber-300 font-semibold">Flutter + Dart:</span> 
                        <span className="text-stone-300"> Cross-platform mobile and desktop builds (Linux, macOS, Windows, Web)</span>
                      </span>
                    </li>
                    <li className="flex items-start">

                      <span><span className="text-amber-300 font-semibold">Firebase Firestore:</span> 
                        <span className="text-stone-300"> Real-time database for chat messaging</span>
                      </span>
                    </li>
                    <li className="flex items-start">

                      <span><span className="text-amber-300 font-semibold">JWT Auth + Mailgun:</span> 
                        <span className="text-stone-300"> Advanced email/token auth systems</span>
                      </span>
                    </li>
                    <li className="flex items-start">

                      <span><span className="text-amber-300 font-semibold">AWS Deployment:</span> 
                        <span className="text-stone-300"> Cloud scalability with Elastic Beanstalk</span>
                      </span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 bg-stone-800/50 p-4 rounded-lg border border-amber-500/10 text-center">
                    <p className="flex flex-col md:flex-row items-center gap-2 justify-center text-lg">

                      <span className="text-stone-200">
                        These tools gave the team real-world full stack experience across platforms, preparing them for industry roles.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Technical Approach & Supporting Diagrams */}
            <div className="section bg-stone-800 text-stone-100 flex items-center justify-center" data-anchor="approach">
              <div className="section-content max-w-4xl mx-auto px-4">
                <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                  <span className="text-amber-400 text-sm font-medium">Technical Approach & Diagrams</span>
                </div>
                <h2 className="text-4xl font-semibold mb-6 text-amber-400">Technical Approach & Diagrams</h2>
                <p className="mb-8">
                  The architecture follows an N-tier pattern: <span className="text-amber-300 font-semibold">UI → Business Logic → Data Access → Database</span>. A RESTful API serves as the unifying layer between web and mobile platforms.<br />
                  <span className="text-stone-100">SDLC phases were followed: requirements, design, implementation, testing, deployment.</span>
                </p>
                
                {/* Diagram Carousel with click-to-enlarge */}
                <div className="relative w-full h-[400px] mb-8">
                  {/* Left Arrow */}
                  <button 
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900/80 hover:bg-stone-900 text-amber-400 p-2 rounded-r-lg border-l-2 border-amber-500 transition-all" 
                    onClick={() => {
                      const currentIndex = activeIndex;
                      setActiveIndex(currentIndex === 0 ? diagrams.length - 1 : currentIndex - 1);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Diagram Display Area */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {diagrams.map((diagram, index) => (
                      <div 
                        key={index}
                        className={`absolute transition-all duration-500 ease-in-out bg-stone-900/80 border border-amber-400 rounded-lg p-4 flex flex-col items-center ${
                          index === activeIndex 
                            ? "z-30 scale-100 opacity-100" 
                            : index === (activeIndex - 1 + diagrams.length) % diagrams.length 
                              ? "z-20 -translate-x-[70%] scale-75 opacity-60 blur-[1px]" 
                              : index === (activeIndex + 1) % diagrams.length 
                                ? "z-20 translate-x-[70%] scale-75 opacity-60 blur-[1px]" 
                                : "z-10 opacity-0 scale-50"
                        }`}
                      >
                        <h3 className="text-amber-300 text-lg font-medium mb-2">{diagram.title}</h3>
                        <div className="relative group">
                          <img 
                            src={diagram.src} 
                            alt={diagram.title} 
                            className="w-full max-h-[280px] object-contain rounded cursor-pointer transition-transform group-hover:scale-[1.02]" 
                            onClick={() => {
                              console.log('Image clicked', diagram);
                              setExpandedImage(diagram);
                            }}
                          />
                          <div 
                            className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded"
                            onClick={() => {
                              console.log('Overlay clicked', diagram);
                              setExpandedImage(diagram);
                            }}
                          >
                            <div className="bg-amber-500/80 text-stone-900 px-3 py-1 rounded-full text-sm font-medium">
                              Click to expand
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Arrow */}
                  <button 
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900/80 hover:bg-stone-900 text-amber-400 p-2 rounded-l-lg border-r-2 border-amber-500 transition-all" 
                    onClick={() => {
                      const currentIndex = activeIndex;
                      setActiveIndex((currentIndex + 1) % diagrams.length);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="bg-stone-900/50 p-4 rounded-lg border border-amber-500/10 text-center">
                  <p className="text-stone-300">
                    <span className="text-amber-300 font-medium">Design Approach:</span> These diagrams illustrate our clean separation of concerns, security layers, and component relationships. The architecture enables independent scaling of services and cross-platform functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Risks & Challenges */}
            <div className="section bg-stone-700 text-stone-100 flex items-center justify-center" data-anchor="risks">
              <div className="section-content max-w-6xl mx-auto px-4">
                <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                  <span className="text-amber-400 text-sm font-medium">Risks & Challenges</span>
                </div>
                <h2 className="text-4xl font-semibold mb-10 text-amber-400">Overcoming Challenges</h2>

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

                  {/* Card 5 */}
                  <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-700/50 shadow-inner backdrop-blur-md md:col-span-2">
                    <h3 className="text-amber-300 font-semibold text-lg mb-2">UI Consistency Across Platforms</h3>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      Maintaining a unified design language between mobile and web required shared <strong>Figma files</strong> and consistent <strong>design tokens</strong> for spacing, color, and typography.
                    </p>
                  </div>
                </div>
              </div>
            </div>





            {/* 7. Outstanding Issues */}
            <div className="section bg-stone-800 text-stone-100 flex items-center justify-center" data-anchor="limitations">
              <div className="section-content max-w-5xl mx-auto px-4">
                <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                  <span className="text-amber-400 text-sm font-medium">Current Limitations</span>
                </div>
                <h2 className="text-4xl font-semibold mb-10 text-amber-400">Outstanding Issues & Final Touches</h2>

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

                <div className="mt-10 bg-stone-900/50 p-4 rounded-lg border border-amber-500/10 text-center">
                  <p className="text-stone-300 text-sm">
                    <strong className="text-amber-300">Next Steps:</strong> Finalize DNS setup, add analytics, and implement user notification features.
                  </p>
                </div>
              </div>
            </div>



                {/* 8. Compelling Showcase for Interview Use */}
                <div className="section bg-stone-800 text-stone-100 flex items-center justify-center" data-anchor="showcase">
                  <div className="section-content max-w-5xl mx-auto px-4">
                    <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                      <span className="text-amber-400 text-sm font-medium">Project Showcase</span>
                    </div>
                    <h2 className="text-4xl font-semibold mb-6 text-amber-400">UI Showcase & Demo</h2>

                    {/* Showcase Carousel (images + optional video) */}
                    <div className="relative w-full h-[400px] mb-8">
                      {/* Navigation Arrows */}
                      <button 
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900/80 hover:bg-stone-900 text-amber-400 p-2 rounded-r-lg border-l-2 border-amber-500 transition-all" 
                        onClick={() => setActiveIndex(activeIndex === 0 ? showcaseSlides.length - 1 : activeIndex - 1)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                    {/* Content Area */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      {showcaseSlides.map((item, index) => (
                        <div 
                          key={index}
                          className={`absolute transition-all duration-500 ease-in-out bg-stone-900/80 border border-amber-400 rounded-lg p-4 flex flex-col items-center ${
                            index === activeIndex 
                              ? "z-30 scale-100 opacity-100" 
                              : index === (activeIndex - 1 + showcaseSlides.length) % showcaseSlides.length 
                                ? "z-20 -translate-x-[70%] scale-75 opacity-60 blur-[1px]" 
                                : index === (activeIndex + 1) % showcaseSlides.length 
                                  ? "z-20 translate-x-[70%] scale-75 opacity-60 blur-[1px]" 
                                  : "z-10 opacity-0 scale-50"
                          }`}
                        >
                          <h3 className="text-amber-300 text-lg font-medium mb-2">{item.title}</h3>
                          <div className="relative group">
                            {item.type === "video" ? (
                              <video controls className="rounded max-h-[280px] max-w-full">
                                <source src={item.src} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <img 
                                src={item.src}
                                alt={item.title}
                                className="w-full max-h-[280px] object-contain rounded cursor-pointer transition-transform group-hover:scale-[1.02]"
                                onClick={() => setExpandedImage(item)}
                              />
                            )}
                            {item.type !== "video" && (
                              <div 
                                className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded"
                                onClick={() => setExpandedImage(item)}
                              >
                                <div className="bg-amber-500/80 text-stone-900 px-3 py-1 rounded-full text-sm font-medium">
                                  Click to expand
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button 
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900/80 hover:bg-stone-900 text-amber-400 p-2 rounded-l-lg border-r-2 border-amber-500 transition-all" 
                      onClick={() => setActiveIndex((activeIndex + 1) % showcaseSlides.length)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                    {/* Kai Card */}
                    <div className="bg-stone-900/60 backdrop-blur-md border border-amber-500/20 rounded-xl p-5 w-40 flex flex-col items-center shadow-inner shadow-black/10 transition-transform hover:scale-105">
                      <img
                        src="/images/KaiQR.png"
                        alt="Kai Hedrick QR"
                        className="w-24 h-24 object-contain"
                      />
                      <span className="mt-3 text-stone-300 text-sm font-medium tracking-wide">Kai Hedrick</span>
                    </div>

                    {/* Karsten Card */}
                    <div className="bg-stone-900/60 backdrop-blur-md border border-amber-500/20 rounded-xl p-5 w-40 flex flex-col items-center shadow-inner shadow-black/10 transition-transform hover:scale-105">
                      <img
                        src="/images/KarstenQR.png"
                        alt="Karsten Hedrick QR"
                        className="w-24 h-24 object-contain"
                      />
                      <span className="mt-3 text-stone-300 text-sm font-medium tracking-wide">Karsten Hedrick</span>
                    </div>
                  </div>



                </div>
              </div>
          </div>
        )}
      />
    </>
  );
}