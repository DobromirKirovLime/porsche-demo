import { ComponentPropsWithRef } from "react";

interface ParagraphProps extends ComponentPropsWithRef<"p"> {}

export const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return <p {...rest}>{children}</p>;
};
