import { Box, Product, AddProduct } from '@/components';
import { getProducts } from '@/services/products';

type Props = {
  params: { locale: string };
};

export default async function Products({ params }: Props) {
  const products = await getProducts();

  return (
    <>
      <AddProduct />
      <Box wrapContent>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            locale={params.locale}
            withDetails={false}
          />
        ))}
      </Box>
    </>
  );
}
