import React from "react";

export default function AboutSection() {
  return (
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
  );
}
