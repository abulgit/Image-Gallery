import { useState, useEffect, useCallback } from 'react';
import { fetchImages } from './utils/api';
import { FocusCards } from './components/FocusCards';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import { Photo } from './types';

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePhotos = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    const newImages = await fetchImages(page);
    
    if (newImages.length === 0) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }

    setPhotos(prevPhotos => {
      const existingIds = new Set(prevPhotos.map(photo => photo.id));
      const uniqueNewImages = newImages.filter((photo): photo is Photo => 
        !existingIds.has(photo.id)
      );
      return [...prevPhotos, ...uniqueNewImages];
    });

    setPage(prev => prev + 1);
    setIsLoading(false);
  }, [page, isLoading, hasMore]);

  useEffect(() => {
    loadMorePhotos();
  }, []);

  useInfiniteScroll(loadMorePhotos);

  return (
    <div className="min-h-screen bg-black p-4">
      <FocusCards photos={photos} />
      {isLoading && (
        <div className="text-center text-gray-600 mt-4 pb-4">
          Loading more images...
        </div>
      )}
      {!hasMore && (
        <div className="text-center text-gray-600 mt-4 pb-4">
          No more images to load
        </div>
      )}
    </div>
  );
}

export default App;