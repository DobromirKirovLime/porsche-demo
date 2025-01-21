import { getEntriesByType } from "@/services/contentful";
import { HomePageFields } from "@/types";
import { Heading, Paragraph, Card } from "@/components";

export default async function Home() {
  const homePageRes = await getEntriesByType("home");
  const { title, subTitle, image } = homePageRes[0].fields as HomePageFields;

  return (
    <>
      <Heading>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      <Card
        title={image.fields.title}
        description={image.fields.description}
        src={`https:${image.fields.file.url}`}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
        priority={true}
      />
    </>
  );
}
