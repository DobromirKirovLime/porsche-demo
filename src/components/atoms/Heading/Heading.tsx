import React, { ComponentPropsWithRef } from "react";

interface HeadingProps
  extends ComponentPropsWithRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({ children, as = "h1", ...rest }: HeadingProps) => {
  const HeadingLevel = as;
  return <HeadingLevel {...rest}>{children}</HeadingLevel>;
};
