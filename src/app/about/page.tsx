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
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <section
        dangerouslySetInnerHTML={{
          __html: marked.parse(content),
        }}
      />
    </div>
  );
}
