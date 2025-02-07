import { useEffect, useCallback } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Trigger when user has scrolled past 50% of the page
    const triggerThreshold = 0.5;
    if (windowHeight + scrollTop >= documentHeight * triggerThreshold) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};

export default useInfiniteScroll;