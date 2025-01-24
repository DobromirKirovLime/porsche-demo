import { Product } from '@/components';
import { ProductType } from '@/types';

export default async function SingleProduct({
  params
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const singleProduct: ProductType = await res.json();

  return <Product {...singleProduct} withDetails />;
}
