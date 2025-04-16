import { deleteProduct } from '@/lib/product.actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  const prod = await deleteProduct(parseInt(id));

  if (!prod) {
    notFound();
  }
    return (
      <>
        <h1>Delete Product</h1>
        <p>Product with ID {id} has been deleted.</p>
        <Link href="/product">Go back to product list</Link>
        <Link href={`/product/${id}/update`}>Update Product</Link>
        <Link href={`/product/${id}/delete`}>Delete Product</Link>
      </>
    );
  }



