export type HomePageFields = {
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
