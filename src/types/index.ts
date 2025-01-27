export type { TypeAbout, TypeAboutFields } from './TypeAbout.js';
export type { TypeHome, TypeHomeFields } from './TypeHome.js';

export type HomePageType = {
  title: string;
  subTitle: string;
  image: ContentfulImage;
  images: ContentfulImage[];
};

export type ContentfulImage = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
};

export type AboutPageType = {
  title: string;
  subTitle: string;
  content: string;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};
