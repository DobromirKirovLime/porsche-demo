import Image, { ImageProps } from 'next/image';
import { Box, Paragraph } from '@/components';
import styles from './card.module.scss';

interface CardProps
  extends Pick<ImageProps, 'src' | 'width' | 'height' | 'priority'> {
  title: string;
  description: string;
}

export const Card = ({ title, description, ...rest }: CardProps) => {
  return (
    <Box className={styles.card}>
      <Image alt={title} {...rest} className={styles.img} />
      <Paragraph>{title}</Paragraph>
      <Paragraph>{description}</Paragraph>
    </Box>
  );
};
