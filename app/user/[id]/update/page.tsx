import { updateUser } from "@/lib/user.actions";
import Link from "next/link";
import UpdateUserForm from "./UpdateUserForm";

export default async function page({
  params,
}: {
    params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the params to resolve

  // Ensure `id` is parsed correctly
  const user = await updateUser({ id: parseInt(id, 10) });

  return (
    <div>
      <h1>Update User</h1>
      <UpdateUserForm id={id} user={{ ...user, email: user.email ?? "" }} />
      <Link href={`/user/${id}`}>Back to User</Link>
    </div>
  );
}
