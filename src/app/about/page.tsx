import { Box, Heading, Paragraph } from "@/components";

import { getEntriesByType } from "@/services/contentful";
import { marked } from "marked";

export default async function AboutPage() {
  const aboutPageFields = await getEntriesByType("about");
  const { title, subTitle, content } = aboutPageFields[0].fields as {
    title: string;
    subTitle: string;
    content: string;
  };

  return (
    <>
      <Heading>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      <Box
        dangerouslySetInnerHTML={{
          __html: marked.parse(content),
        }}
      />
    </>
  );
}
