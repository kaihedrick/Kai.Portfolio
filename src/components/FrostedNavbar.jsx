import React, { useState, useEffect } from "react";
import khLogo from "../assets/KH.png";

export default function FrostedNavbar() {
  const [open, setOpen] = useState(false);
  const [showAppsDropdown, setShowAppsDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const toggle = () => setOpen(v => !v);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Only apply scroll behavior on mobile (screen width < 768px)
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past 100px - hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
      } else {
        // On desktop, always show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 bg-black pt-4 px-4 md:px-6 lg:px-8 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav aria-label="Primary" className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg">
          <div className="flex items-center justify-between px-4 md:px-6 py-2">
            {/* Logo/Brand */}
            <a 
              href="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src={khLogo} 
                alt="KH" 
                className="h-8 w-auto"
              />
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden px-3 py-2 rounded-full text-sm border border-white/10 text-white hover:bg-white/10 transition-colors" 
              onClick={toggle} 
              aria-expanded={open} 
              aria-controls="nav-menu"
            >
              {open ? 'Close' : 'Menu'}
            </button>
            
            {/* Desktop menu */}
            <ul id="nav-menu" className="hidden md:flex items-center gap-6 text-sm font-medium">
              <li>
                <a href="/work" className="text-white hover:text-red-400 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-red-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-red-400 transition-colors">
                  Contact
                </a>
              </li>
              
              {/* Apps dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setShowAppsDropdown(true)}
                onMouseLeave={() => setShowAppsDropdown(false)}
              >
                <button className="px-3 py-1 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
                  Apps
                </button>
                {showAppsDropdown && (
                  <div className="absolute right-0 top-full pt-2">
                    <div className="min-w-[12rem] rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl p-2 shadow-lg">
                      <a 
                        className="block rounded-xl px-3 py-2 text-white hover:bg-white/10 hover:text-amber-400 transition-colors" 
                        href="/work/devhive"
                      >
                        DevHive
                      </a>
                      <a 
                        className="block rounded-xl px-3 py-2 text-white hover:bg-white/10 hover:text-red-400 transition-colors" 
                        href="/work/kaible"
                      >
                        kAIble
                      </a>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          
          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-2">
              <a className="block py-2 text-white hover:text-red-400 transition-colors" href="/work">
                Work
              </a>
              <a className="block py-2 text-white hover:text-red-400 transition-colors" href="/about">
                About
              </a>
              <a className="block py-2 text-white hover:text-red-400 transition-colors" href="/contact">
                Contact
              </a>
              
              <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-2">
                <div className="text-xs uppercase tracking-wide opacity-70 mb-1 px-2 text-white">
                  Apps
                </div>
                <a className="block py-1 px-2 text-white hover:text-amber-400 transition-colors" href="/work/devhive">
                  DevHive
                </a>
                <a className="block py-1 px-2 text-white hover:text-red-400 transition-colors" href="/work/kaible">
                  kAIble
                </a>
              </div>
            </div>
          )}
      </div>
    </nav>
    </header>
  );
}
