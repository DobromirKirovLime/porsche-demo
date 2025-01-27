import { ErrorText, Heading, Paragraph, RichTextRenderer } from '@/components';
import { getEntriesByType } from '@/services/contentful';
import { asyncHandler } from '@/utils/asyncHandler';
import { AboutPageType } from '@/types';

export default async function AboutPage() {
  const { data: aboutPageData, error: aboutPageError } = await asyncHandler(
    getEntriesByType('about')
  );

  if (aboutPageError || !aboutPageData) {
    return <ErrorText message={aboutPageError.message} />;
  }

  const { title, subTitle, content } = aboutPageData[0].fields as AboutPageType;

  return (
    <>
      <Heading>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      <RichTextRenderer content={content} />
    </>
  );
}
