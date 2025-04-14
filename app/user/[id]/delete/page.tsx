import { deleteUser } from '@/lib/user.actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';


export default async function page({
      params,
    }: {
      params: { id: string };
    }) {
      const { id } = await params;
      const user = await deleteUser(parseInt(id));

      if (!user) {
        notFound();
      }
  return (
    <>
            <Link href="/user"> User</Link>

    </>
  )
}
