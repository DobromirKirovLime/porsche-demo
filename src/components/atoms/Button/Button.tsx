'use client';

import { ComponentPropsWithRef } from 'react';
import { useFormStatus } from 'react-dom';

type ButtonProps = ComponentPropsWithRef<'button'>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} {...rest}>
      {pending ? 'Loading...' : children}
    </button>
  );
};
