import axios from 'axios';
import { Photo } from '../types';

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1/curated';

// Helper function to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const fetchImages = async (page: number, perPage: number = 15): Promise<Photo[]> => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: API_KEY },
      params: { 
        page, 
        per_page: perPage * 2, // Fetch more images to increase randomness
        // Generate a random seed for each request
        seed: Math.random().toString(36).substring(7)
      },
    });

    if (!response.data.photos) {
      return [];
    }

    const photos = response.data.photos.map((photo: any) => ({
      id: photo.id.toString(),
      src: photo.src.large,
      alt: photo.alt || photo.photographer,
      photographer: photo.photographer,
    }));

    // Shuffle the array and take only the required number of items
    return shuffleArray(photos).slice(0, perPage) as Photo[];

  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};