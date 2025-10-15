import React from "react";
import TextType from "../components/TextType";
import Shuffle from "../components/Shuffle";
import LogoLoop from "../components/LogoLoop";
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

export default function HomePage() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
    { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiSpring />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
    { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
    { node: <SiSwift />, title: "Swift", href: "https://developer.apple.com/swift/" },
  ];
  return (
    <main className="min-h-screen px-4 md:px-6 lg:px-8 py-10 bg-black">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-16 text-center py-12">
        <div className="bg-red-500/10 p-2 px-4 rounded-full mb-4 inline-block border border-red-500/20">
          <span className="text-red-400 text-sm font-medium">Software Developer</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-center">
          <Shuffle
            text="Kai Hedrick"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            colorFrom="#ffffff"
            colorTo="#ffffff"
            className="text-white font-bold"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, Avenir, Helvetica, Arial, sans-serif' }}
          />
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed mx-auto">
          <TextType 
            text={[
              "Full-stack developer specializing in modern web applications",
              "Building responsive and user-friendly experiences",
              "Creating scalable solutions with cutting-edge tech"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <a
            href="/work"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-red-500/60"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-colors border border-white/10 focus-visible:ring-2 focus-visible:ring-red-500/60"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Apps Widget Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Featured Apps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a 
            href="/work/devhive" 
            className="group block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:border-amber-500/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <img 
                src="/images/DevHiveLogo (1).png"
                alt="DevHive Logo"
                className="h-12 w-12 rounded-xl flex-shrink-0 transition-transform group-hover:scale-110 object-contain p-1"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-500 transition-colors">
                  DevHive
                </h3>
                <p className="text-gray-400">
                  Agile workspace with boards & chat
                </p>
              </div>
            </div>
          </a>

          <a 
            href="/work/kaible" 
            className="group block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:border-red-500/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <img 
                src="/images/kAIble/kaible image.png"
                alt="kAIble Logo"
                className="h-12 w-12 rounded-xl flex-shrink-0 transition-transform group-hover:scale-110 object-contain p-1"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-red-500 transition-colors">
                  kAIble
                </h3>
                <p className="text-gray-400">
                  iOS Bible reader + AI commentary
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>


      {/* Technologies Loop */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Technologies
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8" style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#000000"
            ariaLabel="Main technologies I work with"
            className="text-white"
          />
        </div>
      </section>
    </main>
  );
}
