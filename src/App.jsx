import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import FrostedNavbar from './components/FrostedNavbar';
import LoadingOverlay from './components/LoadingOverlay';
import HomeSection from './components/portfolio/HomeSection';
import AboutSection from './components/portfolio/AboutSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import DevHiveTeaser from './components/portfolio/DevHiveTeaser';
import ContactSection from './components/portfolio/ContactSection';
import DevHiveShowcase from './pages/DevHiveShowcase';
import KaiblePrivacyPolicy from './pages/KaiblePrivacyPolicy';

import './App.css';

const anchors = ['home', 'about', 'projects', 'devhive', 'contact'];
let globalFullpageApi = null;

// Home Page Component
function Home({ setActiveIndex }) {
  const [fullpageApi, setFullpageApi] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToSection !== undefined && fullpageApi) {
      setTimeout(() => {
        fullpageApi.moveTo(location.state.scrollToSection + 1);
        setActiveIndex(location.state.scrollToSection); // Update active index here
        navigate(location.pathname, { replace: true, state: {} });
      }, 300);
    }
  }, [fullpageApi, location.state, navigate, setActiveIndex]);

  useEffect(() => {
    return () => {
      if (fullpageApi?.destroy) {
        try {
          fullpageApi.destroy('all');
          globalFullpageApi = null;
        } catch (e) {
          console.error('Error cleaning up fullpage.js:', e);
        }
      }
    };
  }, [fullpageApi]);

  return (
    <ReactFullpage
      credits={{ enabled: true, label: 'Made with fullPage.js', position: 'right' }}
      anchors={anchors}
      navigation
      navigationTooltips={['Home', 'About', 'Projects', 'DevHive', 'Contact']}
      scrollingSpeed={700}
      scrollOverflow
      scrollOverflowReset
      responsiveWidth={800}
      responsiveHeight={600}
      responsiveSlides
      bigSectionsDestination="top"
      fixedElements=".fixed, .nav-fixed"
      normalScrollElements=".scrollable-content"
      easing="easeInOutCubic"
      afterRender={({ fullpageApi }) => {
        setFullpageApi(fullpageApi);
        globalFullpageApi = fullpageApi;
      }}
      afterLoad={(origin, destination) => {
        // Update active index when section changes
        setActiveIndex(destination.index);
      }}
      render={() => (
        <div id="fullpage">
          <HomeSection fullpageApi={fullpageApi} />
          <AboutSection />
          <ProjectsSection navigate={navigate} />
          <DevHiveTeaser navigate={navigate} />
          <ContactSection />
        </div>
      )}
    />
  );
}

// App Content Wrapper
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDevHivePage = location.pathname === "/devhive-showcase";

  // Update activeIndex when location changes
  useEffect(() => {
    if (!isDevHivePage && location.hash) {
      const sectionName = location.hash.replace('#', '');
      const index = anchors.indexOf(sectionName);
      if (index !== -1) {
        setActiveIndex(index);
      }
    }
  }, [location.hash, isDevHivePage]);

  const handleNavClick = (sectionId) => {
    if (isDevHivePage) {
      if (sectionId === null) {
        setIsLoading(true);
        navigate('/');
        setTimeout(() => setIsLoading(false), 500);
      }
    } else {
      // Update active index immediately for better UI feedback
      setActiveIndex(sectionId);
      
      if (sectionId === 3) {
        navigate('/devhive-showcase');
      } else if (globalFullpageApi?.moveTo) {
        globalFullpageApi.moveTo(sectionId + 1);
      } else {
        window.location.hash = anchors[sectionId];
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <FrostedNavbar
        isHome={!isDevHivePage}
        onNavClick={handleNavClick}
        activeIndex={activeIndex}
        className={!isDevHivePage ? "fixed nav-fixed" : ""}
      />
      <Routes>
        <Route path="/" element={<Home setActiveIndex={setActiveIndex} />} />
        <Route path="/devhive-showcase" element={<DevHiveShowcase />} />
        <Route path="/kaible/privacy-policy" element={<KaiblePrivacyPolicy />} />
      </Routes>
    </>
  );
}

// Final App
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
