import { updateGost } from "@/lib/gost.actions";
import Link from "next/link";
import UpdategostForm from "./UpdateGostForm";

export default async function page({
  params,
}: {
    params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the params to resolve

  // Ensure `id` is parsed correctly
  const gost = await updateGost({ id: parseInt(id, 10) });

  return (
    <div>
      <h1>Update gost</h1>
      <UpdategostForm id={id} gost={{ ...gost, email: gost.email ?? "" }} />
      <Link href={`/gost`}>Back to gost</Link>
      {/* <Link href={`/gost/${id}`}>Back to gost</Link> */}
    </div>
  );
}
