import { Box, AddProduct, Product } from '@/components';
import { getProducts } from '@/services/products';

export default async function Products() {
  const products = await getProducts();

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
