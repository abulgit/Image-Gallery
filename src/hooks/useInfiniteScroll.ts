import { useEffect, useCallback } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const triggerThreshold = 0.6;
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