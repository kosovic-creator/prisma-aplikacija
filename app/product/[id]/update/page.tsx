'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updateProduct, productById } from '@/lib/product.actions';

export default function UpdateProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Dohvati trenutne podatke o proizvodu
    const fetchProduct = async () => {
      try {
        const product = await productById(Number(id));
        if (product) {
          setName(product.name);
          setPrice(product.price.toString());
        } else {
          setMessage('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setMessage('Failed to fetch product.');
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const priceNumber = parseFloat(price);
      if (isNaN(priceNumber)) {
        setMessage('Price must be a valid number.');
        return;
      }

      await updateProduct(Number(id), { name, price: priceNumber });
      setMessage('Product updated successfully!');
      router.push(`/product/`);
    } catch (error) {
      console.error('Error updating product:', error);
      setMessage('Failed to update product.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Update Product</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
}
