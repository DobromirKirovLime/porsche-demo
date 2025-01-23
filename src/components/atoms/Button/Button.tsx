import { ComponentPropsWithRef } from 'react';

type ButtonProps = ComponentPropsWithRef<'button'>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
