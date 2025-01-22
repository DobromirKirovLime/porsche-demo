export type HomePageType = {
  title: string;
  subTitle: string;
  image: ContentfulImage;
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
