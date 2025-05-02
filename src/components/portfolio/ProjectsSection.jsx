import React from "react";
import { GlitchCard } from "../../components/GlitchCard";

export default function ProjectsSection({ navigate }) {


  return (
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
              color={[[245, 158, 11], [251, 191, 36], [217, 119, 6]]}
              isFeature={true}
              variant="amber"
              onViewProject={() => navigate("/devhive-showcase#intro")}
            >
              <div className="w-20 h-20 bg-amber-500 rounded-full mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </GlitchCard>
          </div>

          {/* Bermuda Stock Portfolio */}
          <GlitchCard
            title="Bermuda Stock Portfolio"
            description="Lead Developer for a full-stack web application enabling portfolio management and stock tracking"
            fullDescription="Lead Developer for a full-stack web application enabling portfolio management and stock tracking. Built a .NET Core and MySQL backend with N-Layer architecture and MVC design, ensuring scalability and modularity. Developed and tested RESTful APIs with Postman, employing DAO for secure data abstraction. Delivered secure authentication, optimized performance, and ensured version control with GitHub. Agile methodologies were used to deliver a high quality product to meet client needs."
            color={[[87, 83, 78]]}
            variant="amber"
          >
            <div className="w-20 h-20 bg-stone-600 rounded-full mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </GlitchCard>

          {/* CarMaxxing */}
          <GlitchCard
            title="CarMaxxing"
            description="Lead Project Developer for a Spring Boot-based microservices car listings app, contributing over 2,000 lines of code"
            fullDescription="Lead Project Developer for a Spring Boot-based microservices car listings app, contributing over 2,000 lines of code. Designed MongoDB databases to enhance CRUD operations and scalability. Developed secure RESTful APIs, rigorously tested via Postman, and implemented Spring Security for authentication and secure endpoints. Applied all four OOP principles—encapsulation, abstraction, inheritance, and polymorphism—to ensure clean, modular, and maintainable code. Created formal design specs with ER diagrams and showcased results via a GitHub repository."
            color={[[68, 64, 60]]}
            variant="amber"
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
  );
}
