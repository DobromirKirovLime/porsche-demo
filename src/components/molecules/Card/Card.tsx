import Image, { ImageProps } from "next/image";
import { Box, Paragraph } from "@/components";

interface CardProps
  extends Pick<ImageProps, "src" | "width" | "height" | "priority"> {
  title: string;
  description: string;
  customStyles?: React.CSSProperties;
}

export const Card = ({
  customStyles,
  title,
  description,
  ...rest
}: CardProps) => {
  return (
    <Box style={{ textAlign: "center", ...customStyles }}>
      <Image alt={title} {...rest} />
      <Paragraph style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
        {title}
      </Paragraph>
      <Paragraph style={{ color: "#555", margin: "0.5rem 0" }}>
        {description}
      </Paragraph>
    </Box>
  );
};
