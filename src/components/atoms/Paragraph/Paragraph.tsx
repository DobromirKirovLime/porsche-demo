import { ComponentPropsWithRef } from "react";

type ParagraphProps = ComponentPropsWithRef<"p">;

export const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return <p {...rest}>{children}</p>;
};
