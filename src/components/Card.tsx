import React from 'react';

interface CardProps {
  photo: {
    id: string;
    src: string;
    alt: string;
    photographer: string;
  };
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Card = React.memo(({ photo, index, hovered, setHovered }: CardProps) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`rounded-lg relative bg-gray-100 overflow-hidden h-[400px] w-full transition-all duration-300 ease-out
        ${hovered !== null && hovered !== index ? 'blur-sm scale-[0.98]' : ''}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="object-cover absolute inset-0 w-full h-full"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/fallback-image.jpg';
        }}
      />
      {hovered === index && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="text-white text-sm md:text-lg font-medium">
            {photo.photographer}
          </div>
        </div>
      )}
    </div>
  );
});

Card.displayName = 'Card'; 