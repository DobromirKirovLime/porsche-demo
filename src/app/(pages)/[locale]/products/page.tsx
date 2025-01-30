import { Metadata } from 'next';
import { Box, Product, AddProduct } from '@/components';
import { getProducts } from '@/services/products';

type Props = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'Products'
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
