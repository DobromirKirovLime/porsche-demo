import { Box, AddProduct, Product } from '@/components';
import { ProductType } from '@/types';
import styles from './products.module.scss';

export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: ProductType[] = await res.json();

  return (
    <>
      <AddProduct />
      <Box className={styles.productsContainer}>
        {products.map((product) => (
          <Product key={product.id} {...product} withDetails={false} />
        ))}
      </Box>
    </>
  );
}
