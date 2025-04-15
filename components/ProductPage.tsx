'use client';

import { toast } from 'react-hot-toast';

interface Product {
  name: string;
  price: number;
  // Add more fields as needed
}

export default function ProductPage({ products, error }: { products?: Product; error?: string }) {
  if (error) {
    toast.error(error);
    return <div>{error}</div>;
  }

  if (!products) {
    toast.error("Product not found");
    return <div>Nije nađen proizvod</div>;
  }

  toast.success("Product found successfully!");

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
}