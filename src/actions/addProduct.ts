'use server';

import { asyncHandler } from '@/utils/asyncHandler';
import { revalidatePath } from 'next/cache';

export async function addProduct(formData: FormData) {
  const constructedData = {
    title: formData.get('title'),
    price: formData.get('price'),
    description: formData.get('desc'),
    image: formData.get('image'),
    category: formData.get('category')
  };

  const { data: res, error } = await asyncHandler(
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(constructedData)
    })
  );

  if (res) {
    const newProduct = await res.json();
    revalidatePath('/products');
    return newProduct;
  } else {
    return error;
  }
}
