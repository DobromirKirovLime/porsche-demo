import { Box, Heading, Paragraph } from '@/components';
import { ProductType } from '@/types';
import Image from 'next/image';
import styles from './product.module.scss';
import Link from 'next/link';

interface ProductProps extends ProductType {
  withDetails: boolean;
  locale?: string;
}

export const Product = (props: ProductProps) => {
  const {
    id,
    title,
    price,
    image,
    rating,
    category,
    description,
    withDetails,
    locale
  } = props;

  return (
    <Link href={`/${locale}/products/${id}`}>
      <Box className={styles.product}>
        <Image
          className={styles.img}
          alt={title}
          src={image}
          width={200}
          height={200}
          priority={true}
        />
        <Heading className={styles.title} as="h2">
          {title}
        </Heading>
        <Paragraph>{price} €</Paragraph>
        <Paragraph>{rating.rate}</Paragraph>
        <Paragraph>from {rating.count} reviews</Paragraph>
        {withDetails && (
          <>
            <Paragraph>{category}</Paragraph>
            <Paragraph>{description}</Paragraph>
          </>
        )}
      </Box>
    </Link>
  );
};
