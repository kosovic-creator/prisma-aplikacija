import { deleteGost } from '@/lib/gost.actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params; // Await the params object
  const gost = await deleteGost(parseInt(id));

  if (!gost) {
    notFound();
  }

  return (
    <>

      <h1 className="text-3xl font-bold">Delete gost</h1>
      <p className="text-lg">Are you sure you want to delete this gost?</p>
      <div className="flex gap-4">
        <Link href="/gost/" className="btn btn-primary">
          Yes
        </Link>
        <Link href="/gost" className="btn btn-secondary">
          No
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/gost" className="btn btn-primary">Go Back</Link>
      </div>
    </>
  );
}
