import { Heading, Paragraph, Card, Box } from '@/components';
import { getEntriesByType } from '@/services/contentful';
import { asyncHandler } from '@/utils/asyncHandler';
import { HomePageType } from '@/types';

export default async function Home() {
  const { data: homePageData, error: homePageError } = await asyncHandler(
    getEntriesByType('home')
  );

  if (homePageError || !homePageData) {
    return (
      <Box>
        <Heading>Error</Heading>
        <Paragraph>Unable to load content. Please try again later.</Paragraph>
        <Paragraph>{homePageError.message}</Paragraph>
      </Box>
    );
  }

  const {
    title: pageTitle,
    subTitle,
    image
  } = homePageData[0].fields as HomePageType;
  const { title: imageTitle, description, file } = image.fields;
  const { width, height } = file.details.image;

  return (
    <>
      <Heading>{pageTitle}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      <Card
        title={imageTitle}
        description={description}
        src={`https:${file.url}`}
        width={width}
        height={height}
        priority={true}
      />
    </>
  );
}
