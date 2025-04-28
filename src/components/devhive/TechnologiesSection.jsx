import React from "react";
import reactLogo from "../../assets/react.svg";
import netLogo from "../../assets/logo_net.svg";
import flutterLogo from "../../assets/flutter_logo.svg";
import mysqlLogo from "../../assets/mysql.svg";
import firebaseLogo from "../../assets/firebase.svg";
import awsLogo from "../../assets/aws.svg";

export default function TechnologiesSection() {
  return (
    <div
      className="section bg-stone-700 text-stone-100 flex items-center justify-center"
      data-anchor="technologies"
    >
      <div className="section-content max-w-5xl mx-auto px-4 flex flex-col items-center justify-center h-full">
        <div className="w-full">
          {/* Tagline */}
          <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
            <span className="text-amber-400 text-sm font-medium">
              Technologies & Architecture
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-semibold mb-6 text-amber-400">
            Tech Stack & Architecture
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Card */}
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
                  <span><span className="text-amber-200 font-medium">React 18.x:</span> Desktop Web</span>
                </li>
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">Flutter 3.24:</span> Mobile + Desktop + Web UI</span>
                </li>
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">UI Libraries:</span> Bootstrap, FontAwesome, TailwindCSS</span>
                </li>
              </ul>
            </div>

            {/* Backend Card */}
            <div className="bg-stone-800/70 p-6 rounded-lg border border-amber-500/20">
              <div className="flex items-center gap-3 mb-4">
                <img src={netLogo} alt=".NET" className="h-6 w-6" />
                <h3 className="text-amber-300 text-xl font-medium">Backend</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">ASP.NET Core 8:</span> REST API</span>
                </li>
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">Authentication:</span> JWT-based</span>
                </li>
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">Email Service:</span> Mailgun for reset tokens</span>
                </li>
              </ul>
            </div>

            {/* Databases Card */}
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
                  <span><span className="text-amber-200 font-medium">MySQL:</span> Users, Projects, Sprints, Tasks</span>
                </li>
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">Firebase Firestore:</span> Chat messaging</span>
                </li>
              </ul>
            </div>

            {/* Cloud & DevOps Card */}
            <div className="bg-stone-800/70 p-6 rounded-lg border border-amber-500/20">
              <div className="flex items-center gap-3 mb-4">
                <img src={awsLogo} alt="AWS" className="h-6 w-6" />
                <h3 className="text-amber-300 text-xl font-medium">Cloud & DevOps</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">AWS:</span> Elastic Beanstalk Deployment</span>
                </li>
                <li className="flex items-start">
                  <span><span className="text-amber-200 font-medium">CI/CD:</span> GitHub Actions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Architecture Summary */}
          <div className="mt-8 bg-stone-900/50 p-4 rounded-lg border border-amber-500/10 text-center">
            <p className="text-stone-300">
              <strong className="text-amber-300">Architecture:</strong> N-tier design with separate presentation, business logic, and data layers.
              <br />Cross-platform support via a unified API layer.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
