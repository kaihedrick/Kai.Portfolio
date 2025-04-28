import { useEffect, useRef } from 'react';

export function useResizeObserver(ref, callback) {
  const resizeObserver = useRef(null);

  useEffect(() => {
    if (ref.current && callback) {
      // Create new observer
      resizeObserver.current = new ResizeObserver((entries) => {
        callback(entries);
      });
      
      // Start observing
      resizeObserver.current.observe(ref.current);
    }
    
    // Cleanup function
    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, [ref, callback]);
}