import { useEffect, useCallback } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Trigger when user has scrolled to within 200px of the bottom
    if (windowHeight + scrollTop >= documentHeight - 200) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};

export default useInfiniteScroll;