import { ComponentPropsWithRef } from "react";

interface BoxProps extends ComponentPropsWithRef<"div"> {}

export const Box = ({ children, ...rest }: BoxProps) => {
  return <div {...rest}>{children}</div>;
};
