import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { GlitchCard } from './components/GlitchCard';
import CentralShowcase from './components/VideoShowcase';
import FrostedNavbar from './components/FrostedNavbar';
import DevHiveShowcase from './pages/DevHiveShowcase';
import './App.css';

const anchors = ['home', 'about', 'projects', 'devhive', 'contact'];

function Home() {
  const [fullpageApi, setFullpageApi] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to handle navigation when returning from other pages
  useEffect(() => {
    if (location.state?.scrollToSection !== undefined && fullpageApi) {
      // Add a small delay to ensure fullpageApi is initialized
      setTimeout(() => {
        if (fullpageApi && typeof fullpageApi.moveTo === 'function') {
          fullpageApi.moveTo(location.state.scrollToSection + 1);
          // Clear the state to prevent repeated scrolling
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 300); // Increased delay to ensure API is ready
    }
  }, [fullpageApi, location.state, navigate]);

  const handleNavClick = (sectionId) => {
    if (fullpageApi && typeof fullpageApi.moveTo === 'function') {
      fullpageApi.moveTo(sectionId + 1);
    } else {
      console.warn("fullpageApi is not initialized properly");
      // Fallback to regular anchor navigation
      const anchor = anchors[sectionId];
      if (anchor) {
        window.location.hash = anchor;
      }
    }
  };

  return (
    <ReactFullpage
      // Either remove the licenseKey property completely (for open source usage)
      // licenseKey={'YOUR_KEY_HERE'} 
      // Or provide a valid license key if you have purchased one
      
      credits={{
        enabled: true,
        label: 'Made with fullPage.js',
        position: 'right'
      }}
      
      anchors={anchors}
      navigation={true}
      navigationTooltips={['Home', 'About', 'Projects', 'DevHive', 'Contact']}
      scrollingSpeed={700}
      scrollOverflow={true}
      scrollOverflowReset={true}
      
      // Mobile responsiveness settings
      responsiveWidth={800}      // Switch to normal scrolling below this width
      responsiveHeight={600}     // Switch to normal scrolling below this height
      responsiveSlides={true}    // Make slides responsive
      bigSectionsDestination={'top'} // Control how fullpage behaves when visiting big sections
      
      // These settings help with mobile display
      paddingTop={'80px'}
      paddingBottom={'0px'}
      fixedElements={'.fixed, .nav-fixed'}
      normalScrollElements={'.scrollable-content'}
      
      // This helps with smooth transitions
      easing={'easeInOutCubic'}
      
      onLeave={(origin, destination) => {
        console.log(`Moving from ${origin.index} to ${destination.index}`);
      }}
      afterRender={({ fullpageApi }) => {
        console.log("FullPage API initialized:", fullpageApi);
        setFullpageApi(fullpageApi);
      }}
      afterResponsive={(isResponsive) => {
        console.log(`Is responsive: ${isResponsive}`);
        // You could update state here if needed
      }}
      render={({ state, fullpageApi }) => (
        <>
          <FrostedNavbar 
            isHome={true} 
            onNavClick={handleNavClick}
            className="fixed nav-fixed"
          />

          <div id="fullpage">
            {/* Section 1: Home */}
            <div className="section bg-stone-900 text-stone-50" data-anchor="home">
              <div className="section-content min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-0">
                <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4">
                  <span className="text-amber-400 text-sm font-medium">Software Developer</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-400">
                  Kai <span className="text-amber-500">Hedrick</span>
                </h1>
                <p className="text-xl text-stone-200 max-w-2xl mb-8">
                  Full-stack developer specializing in creating modern, responsive, and user-friendly applications.
                </p>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  <button 
                    onClick={() => fullpageApi.moveTo(anchors.indexOf('projects') + 1)} 
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium rounded-lg transition-colors"
                  >
                    View Projects
                  </button>
                  <button 
                    onClick={() => fullpageApi.moveTo(anchors.indexOf('contact') + 1)} 
                    className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-stone-100 font-medium rounded-lg transition-colors border border-stone-600"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>

            {/* Section 2: About */}
            <div className="section fp-auto-height-responsive bg-stone-800 text-stone-100" data-anchor="about">
              <div className="section-content max-w-4xl mx-auto flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-2 inline-block">
                    <span className="text-amber-400 text-sm font-medium">About Me</span>
                  </div>
                  <h2 className="text-4xl font-semibold text-amber-400">
                    Building solutions with passion & precision
                  </h2>
                  <p className="text-lg text-stone-300">
                    I'm a software developer with expertise in project management and full-stack development. 
                    Through hands-on experience in Agile workflows, IT support, and real-time communication systems, 
                    I aim to deliver high-quality solutions.
                  </p>
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-medium text-stone-200">Core Skills</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-stone-900/70 p-4 rounded-lg shadow-md border border-amber-500/20">
                        <h4 className="font-medium text-amber-300">Frontend</h4>
                        <p className="text-stone-300 text-sm">React, Angular, HTML, CSS, JavaScript</p>
                      </div>
                      <div className="bg-stone-900/70 p-4 rounded-lg shadow-md border border-amber-500/20">
                        <h4 className="font-medium text-amber-300">Backend</h4>
                        <p className="text-stone-300 text-sm">.NET, Spring Boot, Node.js, Java</p>
                      </div>
                      <div className="bg-stone-900/70 p-4 rounded-lg shadow-md border border-amber-500/20">
                        <h4 className="font-medium text-amber-300">Database</h4>
                        <p className="text-stone-300 text-sm">MySQL, MongoDB, Firebase</p>
                      </div>
                      <div className="bg-stone-900/70 p-4 rounded-lg shadow-md border border-amber-500/20">
                        <h4 className="font-medium text-amber-300">Tools</h4>
                        <p className="text-stone-300 text-sm">GitHub, VS Code, Postman, Swagger</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Projects */}
            <div className="section bg-stone-700 text-stone-100" data-anchor="projects">
              <div className="section-content pt-36 pb-24 px-6">
                <div className="text-center mb-16">
                  <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-2 inline-block">
                    <span className="text-amber-400 text-sm font-medium">Portfolio</span>
                  </div>
                  <h1 className="text-5xl font-bold mb-4 text-amber-400">My Projects</h1>
                  <p className="text-xl text-stone-200 max-w-2xl mx-auto">
                    A showcase of my work across various technologies and domains
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                  {/* Featured Project: DevHive */}
                  <div className="relative col-span-1 md:col-span-1">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <div className="inline-block py-1 px-4 bg-amber-500/30 rounded-full border border-amber-500/50">
                        <span className="text-amber-400 font-medium text-sm">⭐ Featured Project</span>
                      </div>
                    </div>
                    <GlitchCard
                      title="DevHive"
                      description="For my capstone project, I completed the entire SDLC, including Proposal, Requirements, Design, Planning, and Risk Management"
                      fullDescription="For my capstone project, I completed the entire SDLC, including Proposal, Requirements, Design, Planning, and Risk Management. I developed the React frontend, adhering to MVC principles, and integrated a RESTful API built with ASP.NET within an N-Tier architecture for seamless CRUD operations. Utilizing Postman for testing and Swagger for documentation, I ensured efficient API communication. My work included interactive interfaces for task management, sprint tracking, and real-time messaging, leveraging MySQL and Firebase. By following agile principles, I delivered a scalable and efficient solution."
                      color={[
                        [245, 158, 11], // amber-500
                        [251, 191, 36], // amber-400
                        [217, 119, 6]   // amber-600
                      ]}
                      isFeature={true}  // Add this prop to mark as featured
                      variant="amber"
                      onViewProject={() => navigate('/devhive-showcase')} // Add this new prop
                    >
                      <div className="w-20 h-20 bg-amber-500 rounded-full mx-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </GlitchCard>
                  </div>

                  {/* Update the Bermuda Stock Portfolio card */}
                  <GlitchCard
                    title="Bermuda Stock Portfolio"
                    description="Lead Developer for a full-stack web application enabling portfolio management and stock tracking"
                    fullDescription="Lead Developer for a full-stack web application enabling portfolio management and stock tracking. Built a .NET Core and MySQL backend with N-Layer architecture and MVC design, ensuring scalability and modularity. Developed and tested RESTful APIs with Postman, employing DAO for secure data abstraction. Delivered secure authentication, optimized performance, and ensured version control with GitHub. Agile methodologies were used to deliver a high quality product to meet client needs."
                    color={[[87, 83, 78]]} // Default color (stone-600)
                    variant="amber" // This will be used for the hover effect
                  >
                    <div className="w-20 h-20 bg-stone-600 rounded-full mx-auto flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </GlitchCard>

                  {/* Update the CarMaxxing card */}
                  <GlitchCard
                    title="CarMaxxing"
                    description="Lead Project Developer for a Spring Boot-based microservices car listings app, contributing over 2,000 lines of code"
                    fullDescription="Lead Project Developer for a Spring Boot-based microservices car listings app, contributing over 2,000 lines of code. Designed MongoDB databases to enhance CRUD operations and scalability. Developed secure RESTful APIs, rigorously tested via Postman, and implemented Spring Security for authentication and secure endpoints. Applied all four OOP principles—encapsulation, abstraction, inheritance, and polymorphism—to ensure clean, modular, and maintainable code. Created formal design specs with ER diagrams and showcased results via a GitHub repository."
                    color={[[68, 64, 60]]} // Default color (stone-700)
                    variant="amber" // This will be used for the hover effect
                  >
                    <div className="w-20 h-20 bg-stone-700 rounded-full mx-auto flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </GlitchCard>
                </div>
              </div>
            </div>

            {/* Section 4: DevHive */}
            <div className="section fp-auto-height-responsive bg-stone-300" data-anchor="devhive">
              <div className="main-content-wrapper flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-24 pb-16">
                <div className="text-content relative z-10 w-full lg:w-2/5 text-center lg:text-left flex flex-col justify-center">
                  <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                    <span className="text-amber-600 text-sm font-medium">Featured Project</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">DevHive - Senior Project</h1>
                  <p className="text-xl mb-8 text-stone-700">
                    DevHive is a collaborative platform designed to connect developers and enable seamless project management. It provides tools for team collaboration and code sharing - all within a user-friendly interface that promotes developer productivity.
                  </p>
                  <div className="flex flex-row gap-4 mt-8 lg:justify-start justify-center">
                    <a 
                      href="https://github.com/kaihedrick/DevHive.ReactFrontend" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors text-stone-100"
                    >
                      View Code
                    </a>
                    <button 
                      onClick={() => navigate('/devhive-showcase')} 
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors text-stone-900 shadow-md hover:shadow-amber-500/20 font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Update the showcase wrapper */}
                <div className="showcase-wrapper w-full lg:w-3/5 relative">
                  <CentralShowcase />
                </div>
              </div>
            </div>

            {/* Section 5: Contact */}
            <div className="section bg-stone-900 text-stone-50" data-anchor="contact">
              <div className="section-content max-w-5xl mx-auto flex flex-col items-center justify-center px-6">
                <div className="w-full">
                  <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
                    <span className="text-amber-400 text-sm font-medium">Get in touch</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Contact Me</h1>
                  
                  <div className="mt-8 max-w-3xl mx-auto">
                    {/* Introduction */}
                    <p className="text-lg text-stone-300 text-center mb-10">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    
                    {/* Email card - centered and more prominent */}
                    <div className="bg-stone-800/60 backdrop-blur-sm rounded-xl p-6 border border-stone-700 transition-all hover:border-amber-500/30 group mb-12 max-w-xl mx-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-amber-400 font-medium mb-1">Email</h3>
                          <p className="text-stone-200 text-xl">kaihedrick@icloud.com</p>
                        </div>
                        <button
                          className="bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-stone-900 rounded-lg p-3 transition-colors group-hover:bg-amber-500 group-hover:text-stone-900"
                          onClick={() => {
                            navigator.clipboard.writeText("kaihedrick@icloud.com");
                          }}
                          aria-label="Copy email to clipboard"
                          title="Copy to clipboard"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Social links - improved layout */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-medium text-amber-300 text-center">Connect with me</h3>
                      
                      <div className="flex flex-wrap justify-center gap-4">
                        {/* GitHub */}
                        <a
                          href="https://github.com/kaihedrick"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 rounded-xl p-5 flex items-center gap-3 transition-all flex-1 min-w-[170px] max-w-[220px]"
                        >
                          <div className="bg-stone-700/80 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2.2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.2-3.13-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.2 1.2a11.1 11.1 0 015.8 0c2.22-1.52 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.81 1.2 1.85 1.2 3.13 0 4.51-2.75 5.49-5.37 5.79.43.37.81 1.1.81 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                            </svg>
                          </div>
                          <span className="text-stone-200">GitHub</span>
                        </a>
                        
                        {/* LinkedIn */}
                        <a
                          href="https://www.linkedin.com/in/kai-hedrick"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 rounded-xl p-5 flex items-center gap-3 transition-all flex-1 min-w-[170px] max-w-[220px]"
                        >
                          <div className="bg-stone-700/80 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667h-3.554v-11.5h3.413v1.571h.048c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.451v6.33zm-14.701-13.4c-1.144 0-2.067-.926-2.067-2.067 0-1.144.923-2.067 2.067-2.067 1.143 0 2.067.923 2.067 2.067 0 1.141-.924 2.067-2.067 2.067zm1.777 13.4h-3.554v-11.5h3.554v11.5z"/>
                            </svg>
                          </div>
                          <span className="text-stone-200">LinkedIn</span>
                        </a>
                        
                        {/* Instagram */}
                        <a
                          href="https://www.instagram.com/kaihedri/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 rounded-xl p-5 flex items-center gap-3 transition-all flex-1 min-w-[170px] max-w-[220px]"
                        >
                          <div className="bg-stone-700/80 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <span className="text-stone-200">@kaihedri</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Section 5 */}
          </div>
        </>
      )}
    />
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devhive-showcase" element={<DevHiveShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;
