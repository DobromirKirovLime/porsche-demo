import { Box, AddProduct, Product } from '@/components';
import { ProductType } from '@/types';

export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: ProductType[] = await res.json();

  return (
    <>
      <AddProduct />
      <Box wrapContent>
        {products.map((product) => (
          <Product key={product.id} {...product} withDetails={false} />
        ))}
      </Box>
    </>
  );
}
