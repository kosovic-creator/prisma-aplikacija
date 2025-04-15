import { deleteProduct } from '@/lib/product.actions'
import React from 'react'
import { notFound as nextNotFound } from 'next/navigation';

// Define the PageProps type
interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({ params }: PageProps) {
  const { id } = await params; // Await the params object
 const prod= await deleteProduct(parseInt(id));
 if (!prod) {
    notFound();
  }
  return (
    <div>
      <div></div>
      <h1>Product Deleted</h1>
    </div>
  )
}
function notFound() {
  nextNotFound();
}

