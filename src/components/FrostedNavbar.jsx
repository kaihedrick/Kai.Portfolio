"use client";

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from '../utils/cn';
import { Home } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", sectionId: 0, path: "#home", isSection: true },
  { name: "About", sectionId: 1, path: "#about", isSection: true },
  { name: "Projects", sectionId: 2, path: "#projects", isSection: true },
  { name: "DevHive", sectionId: 3, path: "#devhive", isSection: true },
  { name: "Contact", sectionId: 4, path: "#contact", isSection: true },
];

export default function FrostedNavbar({ isHome = false, onNavClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSectionBgColor, setCurrentSectionBgColor] = useState("stone-900");
  
  // Detect active section and background color - only when on home page
  useEffect(() => {
    if (!isHome) return;
    
    // Check if there's an initial section to navigate to from state
    if (location.state?.scrollToSection !== undefined && onNavClick) {
      onNavClick(location.state.scrollToSection);
      setActiveIndex(location.state.scrollToSection);
      // Clear the state to prevent repeated scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
    
    const handleScroll = () => {
      // First check if we're in fullpage mode
      const isFullPageActive = document.querySelector('.fp-enabled');
      
      // Only hide navbar on scroll in non-fullpage mode
      if (!isFullPageActive) {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      } else {
        // In fullpage mode, always keep navbar visible
        setIsVisible(true);
      }
      
      // Rest of your section detection code remains unchanged
      // Find which section is in view...
      const sections = document.querySelectorAll('.fp-section');
      if (!sections.length) return;
      
      // Use fullpage.js's active section if available
      const activeSection = document.querySelector('.fp-section.active');
      if (activeSection) {
        const index = Array.from(sections).indexOf(activeSection);
        if (index !== -1) {
          setActiveIndex(index);
          
          // Extract background color from section classes
          const classes = activeSection.className.split(' ');
          const bgClass = classes.find(cls => cls.startsWith('bg-'));
          if (bgClass) {
            setCurrentSectionBgColor(bgClass.replace('bg-', ''));
          }
        }
        return;
      }
      
      // Fallback to calculating based on scroll position
      const windowHeight = window.innerHeight;
      let currentSectionIndex = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight/2 && rect.bottom >= windowHeight/2) {
          currentSectionIndex = index;
          
          // Extract background color from section classes
          const classes = section.className.split(' ');
          const bgClass = classes.find(cls => cls.startsWith('bg-'));
          if (bgClass) {
            setCurrentSectionBgColor(bgClass.replace('bg-', ''));
          }
        }
      });
      
      setActiveIndex(currentSectionIndex);
    };
    
    // Initial call to set the right section on load
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome, location, navigate, onNavClick]);
  
  // Handle click navigation - support both section and page navigation
  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    if (item.isSection) {
      if (isHome && onNavClick) {
        onNavClick(item.sectionId);
        setActiveIndex(item.sectionId);
      } else {
        // When navigating from a non-home page to a specific section
        navigate('/', { state: { scrollToSection: item.sectionId } });
      }
    } else {
      navigate(item.path);
    }
  };
  
  // Use existing getNavbarStyle logic
  const getNavbarStyle = () => {
    let textBaseClass = "text-white";
    let textHoverClass = "hover:text-amber-400";
  
    if (['stone-100', 'stone-200', 'stone-300', 'amber-100', 'stone-800'].some(c => currentSectionBgColor.includes(c))) {
      textBaseClass = "text-white"; // force white to show up on dark bg like stone-800
      textHoverClass = "hover:text-amber-300";
    }
  
    return {
      navBgClass: "bg-white/30 dark:bg-stone-900/50", // universal frosted glass
      textBaseClass,
      textHoverClass
    };
  };
  
  
  const { navBgClass, textBaseClass, textHoverClass } = getNavbarStyle();
  
  // Determine active item based on location
  const getIsActive = (item) => {
    if (isHome && item.isSection) {
      return activeIndex === item.sectionId;
    }
    return location.pathname === item.path;
  };
  
  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-auto max-w-[95%]",
        isVisible ? "opacity-100" : "opacity-0 -translate-y-10"
      )}
    >
      <div className={cn(
        "backdrop-blur-md backdrop-saturate-150 border border-white/30 shadow-lg rounded-full px-3 md:px-6 py-2 md:py-3 flex items-center justify-center space-x-2 md:space-x-6 overflow-x-auto styled-scrollbar",
        // Replace existing opacity values with consistent 50% transparency
        navBgClass.replace(/\/[0-9]+/, "/50")  // Replace any existing opacity with /50
      )}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.path}
            href={item.path}
            onClick={(e) => handleNavClick(e, item)}
            className={cn(
              "text-base whitespace-nowrap font-medium tracking-wide transition-colors relative flex items-center gap-2",
              textBaseClass === "text-white" ? "text-shadow-dark" : "",
              getIsActive(item)
                ? "text-amber-400 font-semibold"
                : [textBaseClass, textHoverClass]
            )}
          >
            {item.name === "Home" ? (
              <span className="flex items-center gap-1">
                <Home className="h-4 w-4" strokeWidth={2} />
                {item.name}
              </span>
            ) : (
              item.name
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
