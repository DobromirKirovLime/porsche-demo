import { ComponentPropsWithRef } from 'react';
import styles from './box.module.scss';

interface BoxProps extends ComponentPropsWithRef<'div'> {
  wrapContent?: boolean;
}

export const Box = ({ children, wrapContent, ...rest }: BoxProps) => {
  return (
    <div className={wrapContent ? styles.wrap : ''} {...rest}>
      {children}
    </div>
  );
};
