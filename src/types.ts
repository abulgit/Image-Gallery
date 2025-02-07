export interface ImageData {
    id: string;
    alt_description: string;
    urls: {
      regular: string;
    };
    user: {
      name: string;
    };
  }
  
  export interface Card {
    title: string;
    src: string;
  }

export interface Photo {
  id: string;
  src: string;
  alt: string;
  photographer: string;
}