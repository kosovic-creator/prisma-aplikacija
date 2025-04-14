import { deleteUser } from '@/lib/user.actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

export default async function page({ params }: PageProps) {
  const { id } = params;
  const user = await deleteUser(parseInt(id));

  if (!user) {
    notFound();
  }

  return (
    <>
      <Link href="/user">User</Link>
    </>
  );
}
