import { deleteProduct } from '@/lib/product.actions';
import Link from 'next/link';
import { notFound as nextNotFound } from 'next/navigation';

// Define the PageProps type
interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({ params }: PageProps) {
  const { id } = await params; 

  try {
    const prod = await deleteProduct(parseInt(id));
    if (!prod) {
      notFound();
    }

    // Preusmeravanje nakon uspešnog brisanja

  } catch (error) {
    console.error('Error deleting product:', error);
    notFound();
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Delete Product</h1>
        <p className="text-lg">Are you sure you want to delete this product?</p>
        <div className="flex gap-4">
          <Link href="/product/" className="btn btn-primary">
            Yes
          </Link>
          <Link href="/product" className="btn btn-secondary">
            No
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/product" className="btn btn-primary">Go Back</Link>
        </div>
      </div>
    </>
  );
}

function notFound() {
  nextNotFound();
}

