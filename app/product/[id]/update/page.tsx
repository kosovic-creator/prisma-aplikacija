/* eslint-disable @typescript-eslint/no-unused-vars */


'use client';
import { updateProduct } from '@/lib/product.actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
export const fetchCache = 'force-no-store';
// export const revalidate = 0;


export default function Page() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { id } = useParams(); // Dohvatanje ID-a iz URL-a

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (!id) {
        setMessage('Product ID is missing.');
        return;
      }

      const updatedProduct = await updateProduct(Number(id), {
        name: productName,
        price: parseFloat(productPrice),
      });

      setMessage('Product updated successfully!');
      router.push('/product'); // Preusmeravanje nakon uspešnog ažuriranja
    } catch (error) {
      setMessage('Failed to update product.');
    } finally {
      setLoading(false);
    }
  };

  return (

    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Product Price:</label>
          <input
            type="number"
            id="price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Product'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

