import Image from "next/image";
import { getEntriesByType } from "@/services/contentful";
import { HomePageFields } from "@/types";

export default async function Home() {
  const homePageRes = await getEntriesByType("home");
  const { title, subTitle, image } = homePageRes[0].fields as HomePageFields;
  console.log("image", image.fields.file);
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div>
        <Image
          alt={image.fields.title}
          src={`https://${image.fields.file.url}`}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          priority={true}
        />
        <p>{image.fields.title}</p>
        <p>{image.fields.description}</p>
      </div>
    </div>
  );
}
