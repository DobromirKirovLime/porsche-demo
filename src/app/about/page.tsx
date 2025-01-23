import { Box, Heading, Paragraph } from '@/components';
import { getEntriesByType } from '@/services/contentful';
import { asyncHandler } from '@/utils/asyncHandler';
import { AboutPageType } from '@/types';
import { marked } from 'marked';

export default async function AboutPage() {
  const { data: aboutPageData, error: aboutPageError } = await asyncHandler(
    getEntriesByType('about')
  );

  if (aboutPageError || !aboutPageData) {
    return (
      <Box>
        <Heading>Error</Heading>
        <Paragraph>Unable to load content. Please try again later.</Paragraph>
        <Paragraph>{aboutPageError.message}</Paragraph>
      </Box>
    );
  }

  const { title, subTitle, content } = aboutPageData[0].fields as AboutPageType;

  return (
    <>
      <Heading>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      <Box
        dangerouslySetInnerHTML={{
          __html: marked.parse(content)
        }}
      />
    </>
  );
}
