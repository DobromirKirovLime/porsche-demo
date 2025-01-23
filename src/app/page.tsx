import { Heading, Paragraph, Card, Box } from '@/components';
import { getEntriesByType } from '@/services/contentful';
import { asyncHandler } from '@/utils/asyncHandler';
import { TypeHomeFields } from '../../types/contentful';
import styles from './page.module.scss';

export default async function Home() {
  const { data: homePageData, error: homePageError } = await asyncHandler(
    getEntriesByType<TypeHomeFields>('home')
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

  const { title: pageTitle, subTitle, image, images } = homePageData[0].fields;
  const { title: imageTitle, description, file } = image?.fields!;
  const { width, height } = file.details.image!;

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

      <Box className={styles.imgGrid}>
        {images?.map((img, idx) => {
          const { title: imageTitle, description, file } = img.fields;
          const { width, height } = file.details.image!;
          return (
            <Card
              key={idx}
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
