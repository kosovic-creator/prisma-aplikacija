import { productById } from '@/lib/product.actions';

import ProductPage from '@/components/ProductPage';
import ToastHandler from '@/components/ToastHandler';

export default async function page({ params }: { params: { id: string } }) {
  const { id } =await params;

  try {
    const products = await productById(parseInt(id));
    if (!products) {
      return <ToastHandler message="Product not found" />;
    }
    return (
      <>
        <h1 className="text-3xl font-bold underline">Product Details</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">{products.name}</h2>
            <p className="text-gray-700">Price: ${products.price}</p>
            {/* Add more product details here */}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <ProductPage error="An error occurred while fetching the product." />;
  }
}
//
// export default async function page({ params }: { params: { id: string } }) {
