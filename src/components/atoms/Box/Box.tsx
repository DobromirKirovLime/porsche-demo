import { ComponentPropsWithRef } from 'react';

type BoxProps = ComponentPropsWithRef<'div'>;

export const Box = ({ children, ...rest }: BoxProps) => {
  return <div {...rest}>{children}</div>;
};
