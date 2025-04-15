import { productById } from '@/lib/product.actions';

import ProductPage from '@/components/ProductPage';

export default async function page({ params }: { params: { id: string } }) {
  const { id } =await params;

  try {
    const products = await productById(parseInt(id));
    if (!products) {
      return <ProductPage error="Product not found" />;
    }
    return <ProductPage products={products} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return <ProductPage error="Error fetching product" />;
  }
}
