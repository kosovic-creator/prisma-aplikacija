import { updateUser } from "@/lib/user.actions";
import Link from "next/link";
import UpdateUserForm from "./UpdateUserForm";

export default async function page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const user = await updateUser({ id: parseInt(id) });

  return (
    <div>
      <h1>Update User</h1>
      <UpdateUserForm id={id} user={{ ...user, email: user.email ?? "" }} />
      <Link href={`/user/${id}`}>Back to User</Link>
    </div>
  );
}
