import { userById } from "@/lib/user.actions";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({

  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await userById(parseInt(id));

  if (!user) {
    notFound();
  }

  return (
    <div>


    <li key={user.id}>
        {user.name} - {user.email} - {user.age}
        <Link href={`/user/${user.id}`}>View</Link>
        <Link href={`/user/${user.id}/edit`}>Edit</Link>
        <Link href={`/user/${user.id}/delete`}>Delete</Link>
    </li>
    </div>
  );
}


