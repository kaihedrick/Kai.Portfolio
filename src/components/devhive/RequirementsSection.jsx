import React from "react";

export default function RequirementsSection() {
  return (
    <div className="section bg-stone-800 text-stone-100 flex items-center justify-center" data-anchor="requirements">
      <div className="section-content max-w-5xl mx-auto px-4 devhive-section-padding flex flex-col items-center justify-center h-full">
        <div className="w-full">
          {/* Tagline */}
          <div className="bg-amber-500/10 p-2 px-4 rounded-full mb-4 inline-block">
            <span className="text-amber-400 text-sm font-medium">Requirements</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-semibold mb-6 text-amber-400">Functional & Non-Functional Requirements</h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Functional Requirements */}
            <div>
              <h3 className="text-amber-300 text-xl font-medium mb-3 border-b border-stone-700 pb-2">Functional Requirements</h3>
              <div className="h-[300px] overflow-y-auto pr-2 styled-scrollbar">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      ['Auth', 'Register, Login, JWT-secured sessions'],
                      ['Forgot Password', 'Reset Flow (via Mailgun)'],
                      ['Project Management', 'CRUD, Invite, Ownership, Member Roles'],
                      ['Sprint Management', 'Start/Stop, Date validation, Statuses'],
                      ['Task Management', 'CRUD, Assignment, Drag-and-drop Kanban'],
                      ['Backlog View', 'Filter by sprint, inline editing'],
                      ['Messaging', 'Firebase-powered real-time chat (Direct + Group)'],
                      ['Member Management', 'Kick, Assign, Role-labeling']
                    ].map(([feature, description], idx) => (
                      <tr key={idx} className="border-b border-stone-700/50">
                        <td className="py-2 pr-3 font-medium text-amber-200 w-1/3">{feature}</td>
                        <td className="py-2 text-stone-300">{description}</td>
                      </tr>
                    ))}
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
                    {[
                      ['AWS Deployment', 'Elastic Beanstalk Configuration'],
                      ['Security', 'JWT Authentication, Hashed Passwords, Email Validation'],
                      ['Real-time Updates', 'Firebase Firestore Integration'],
                      ['Portability', 'Responsive Design (React + Flutter)'],
                      ['Error Handling', 'Comprehensive logging + Modal Confirmations']
                    ].map(([feature, description], idx) => (
                      <tr key={idx} className="border-b border-stone-700/50">
                        <td className="py-2 pr-3 font-medium text-amber-200 w-1/3">{feature}</td>
                        <td className="py-2 text-stone-300">{description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Use Case Box */}
          <div className="mt-6 bg-stone-900/50 p-3 rounded-lg border border-amber-500/10 text-center">
            <strong className="text-amber-300">Example Use Case:</strong>
            <p className="text-stone-300 mt-1">
              As a product owner, I can create sprints, assign tasks to team members, and track progress across both web and mobile interfaces.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
