
import { gostById } from "@/lib/gost.actions";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page({

  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gost = await gostById(parseInt(id));

  if (!gost) {
    notFound();
  }

  return (
    <div>


    <li key={gost.id}>
        {gost.name} - {gost.email} - {gost.age}
        <Link href={`/gost/${gost.id}`}>View</Link>
        <Link href={`/gost/${gost.id}/update`}>Edit</Link>
        <Link href={`/gost/${gost.id}/delete`}>Delete</Link>
    </li>
    </div>
  );
}


