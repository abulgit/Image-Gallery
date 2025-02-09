import { useState } from 'react';
import { Card } from './Card';
import { Skeleton } from './Skeleton';

interface Photo {
  id: string;
  src: string;
  alt: string;
  photographer: string;
}

interface FocusCardsProps {
  photos: Photo[];
  isLoading?: boolean;
}

export function FocusCards({ photos, isLoading = false }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 md:px-8 w-full">
      {photos.map((photo, index) => (
        <Card
          key={photo.id}
          photo={photo}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
      
      {isLoading && Array.from({ length: 15 }).map((_, index) => (
        <Skeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
} 