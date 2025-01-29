import { Product } from '@/components';
import { getSingleProduct } from '@/services/products';

export default async function SingleProduct({
  params
}: {
  params: { id: string };
}) {
  const singleProduct = await getSingleProduct(params.id);

  return <Product {...singleProduct} withDetails />;
}
