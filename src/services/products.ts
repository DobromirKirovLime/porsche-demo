import { ProductType } from '@/types';

const PRODUCTS_API = process.env.NEXT_PUBLIC_PRODUCTS_API;

export async function getProducts() {
  const res = await fetch(`${PRODUCTS_API}/products`, {
    next: { revalidate: 3600, tags: ['all-products'] }
  });
  const products: ProductType[] = await res.json();
  return products;
}

export async function getSingleProduct(id: string) {
  const res = await fetch(`${PRODUCTS_API}/products/${id}`, {
    next: { revalidate: 60, tags: ['single-product'] }
  });
  const singleProduct: ProductType = await res.json();
  return singleProduct;
}
