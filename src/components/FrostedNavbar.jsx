"use client";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { Home } from "lucide-react";

// Define navigation items
const HOME_NAV_ITEMS = [
  { name: "Home", sectionId: 0, path: "#home", isSection: true },
  { name: "About", sectionId: 1, path: "#about", isSection: true },
  { name: "Projects", sectionId: 2, path: "#projects", isSection: true },
  { name: "DevHive", sectionId: 3, path: "#devhive", isSection: true },
  { name: "Contact", sectionId: 4, path: "#contact", isSection: true },
];

const DEVHIVE_NAV_ITEMS = [
  { name: "Home", sectionId: null, path: "/", isSection: false },
];

export default function FrostedNavbar({ isHome = false, onNavClick, activeIndex: externalActiveIndex, className }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const lastScrollYRef = useRef(0);
  const [currentSectionBgColor, setCurrentSectionBgColor] = useState("stone-900");

  const navItems = isHome ? HOME_NAV_ITEMS : DEVHIVE_NAV_ITEMS;
  
  // Use the external activeIndex if provided, or fall back to internal state
  // This way the parent component can control the active state
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex;

  const isFullPageActive = () => document.querySelector('.fp-enabled') !== null;

  useEffect(() => {
    if (!isHome) return;

    if (location.state?.scrollToSection !== undefined && onNavClick) {
      onNavClick(location.state.scrollToSection);
      setInternalActiveIndex(location.state.scrollToSection);
      navigate(location.pathname, { replace: true, state: {} });
    }

    const handleScroll = () => {
      const fullPageActive = isFullPageActive();

      if (!fullPageActive) {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollYRef.current || currentScrollY < 10);
        lastScrollYRef.current = currentScrollY;
      } else {
        setIsVisible(true);
      }

      // Only update internal active index when an external one isn't provided
      if (externalActiveIndex === undefined) {
        const sections = document.querySelectorAll('.fp-section, .section');
        if (!sections.length) return;

        if (fullPageActive) {
          const activeSection = document.querySelector('.fp-section.active');
          if (activeSection) {
            const index = Array.from(sections).indexOf(activeSection);
            if (index !== -1) {
              setInternalActiveIndex(index);

              const classes = activeSection.className.split(' ');
              const bgClass = classes.find(cls => cls.startsWith('bg-'));
              if (bgClass) {
                setCurrentSectionBgColor(bgClass.replace('bg-', ''));
              }
            }
            return;
          }
        }

        const windowHeight = window.innerHeight;
        let detectedIndex = 0;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            detectedIndex = index;

            const classes = section.className.split(' ');
            const bgClass = classes.find(cls => cls.startsWith('bg-'));
            if (bgClass) {
              setCurrentSectionBgColor(bgClass.replace('bg-', ''));
            }
          }
        });

        setInternalActiveIndex(detectedIndex);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class' && (
          mutation.target.classList.contains('fp-enabled') || 
          mutation.target.classList.contains('fp-responsive'))) {
          handleScroll();
          break;
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isHome, location.pathname, location.state, navigate, onNavClick, externalActiveIndex]);

  // Update section background color when activeIndex changes
  useEffect(() => {
    if (isHome && externalActiveIndex !== undefined) {
      const sections = document.querySelectorAll('.fp-section, .section');
      if (externalActiveIndex >= 0 && externalActiveIndex < sections.length) {
        const section = sections[externalActiveIndex];
        const classes = section.className.split(' ');
        const bgClass = classes.find(cls => cls.startsWith('bg-'));
        if (bgClass) {
          setCurrentSectionBgColor(bgClass.replace('bg-', ''));
        }
      }
    }
  }, [externalActiveIndex, isHome]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item.isSection) {
      if (onNavClick) {
        onNavClick(item.sectionId);
      }
    } else {
      navigate(item.path, { state: { scrollToSection: 0 } });
    }
  };

  const getNavbarStyle = () => {
    let textBaseClass = "text-white";
    let textHoverClass = "hover:text-amber-400";

    if (['stone-100', 'stone-200', 'stone-300', 'amber-100', 'stone-800'].some(c => currentSectionBgColor.includes(c))) {
      textBaseClass = "text-white";
      textHoverClass = "hover:text-amber-300";
    }

    return { navBgClass: "bg-white/30 dark:bg-stone-900/50", textBaseClass, textHoverClass };
  };

  const { navBgClass, textBaseClass, textHoverClass } = getNavbarStyle();

  const getIsActive = (item) => {
    if (isHome && item.isSection) {
      return activeIndex === item.sectionId;
    }
    return location.pathname === item.path;
  };

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-auto max-w-[95%]",
      isVisible ? "opacity-100" : "opacity-0 -translate-y-10",
    )}>
      <div className={cn(
        "backdrop-blur-md backdrop-saturate-150 border border-white/30 shadow-lg rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-center space-x-2 md:space-x-6 overflow-x-auto styled-scrollbar",
        navBgClass.replace(/\/[0-9]+/, "/50")
      )}>
        {navItems.map((item) => (
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
