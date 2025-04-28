import React, { useEffect, useState } from 'react';

export function useResponsive() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 800);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return { isDesktop };
}