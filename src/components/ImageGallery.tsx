import { ImageType } from '../types/images';

interface ImageGalleryProps {
  images: ImageType[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <p className="text-gray-600 text-sm">by {image.photographer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;