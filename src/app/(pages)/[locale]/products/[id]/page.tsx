import { Product } from '@/components';
import { getSingleProduct } from '@/services/products';
import { Metadata } from 'next';

type SingleProduct = { params: { id: string } };

export async function generateMetadata({
  params
}: SingleProduct): Promise<Metadata> {
  const singleProduct = await getSingleProduct(params.id);

  return {
    title: singleProduct.title,
    category: singleProduct.category,
    description: singleProduct.description,
    assets: singleProduct.image,
    keywords: singleProduct.description.split(' ')
  };
}

export default async function SingleProduct({ params }: SingleProduct) {
  const singleProduct = await getSingleProduct(params.id);

  return <Product {...singleProduct} withDetails />;
}
