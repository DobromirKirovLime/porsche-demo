import { Metadata } from 'next';
import { Heading, Paragraph, Card, Box, ErrorText } from '@/components';
import { getEntriesByType } from '@/services/contentful';
import { asyncHandler } from '@/utils/asyncHandler';
import { HomePageType, TypeHomeFields } from '@/types';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: aboutPageData, error: aboutPageError } = await asyncHandler(
    getEntriesByType('home', params.locale)
  );

  if (aboutPageError || !aboutPageData) {
    return {};
  }
  const { metadata } = aboutPageData[0].fields as HomePageType;

  return metadata;
}

export default async function Home({ params }: Props) {
  const { data: homePageData, error: homePageError } = await asyncHandler(
    getEntriesByType<TypeHomeFields>('home', params.locale)
  );

  if (homePageError || !homePageData) {
    return <ErrorText message={homePageError.message} />;
  }

  const { title: pageTitle, subTitle, image, images } = homePageData[0].fields;
  const { title: imageTitle, description, file } = image?.fields || {};
  const { width, height } = file?.details.image || {};

  return (
    <>
      <Heading>{pageTitle}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      {imageTitle && description && file && (
        <Card
          title={imageTitle}
          description={description}
          src={`https:${file.url}`}
          width={width}
          height={height}
          priority={true}
        />
      )}

      <Box wrapContent>
        {images?.map((img) => {
          const { title: imageTitle, description, file } = img.fields;
          const { width, height } = file.details.image!;
          return (
            <Card
              key={img.sys.id}
              title={imageTitle}
              description={description}
              src={`https:${file.url}`}
              width={width}
              height={height}
              priority={true}
            />
          );
        })}
      </Box>
    </>
  );
}
