"use client";

import { updateUser } from "@/lib/user.actions";
import { useRouter } from "next/navigation";

export default function UpdateUserForm({ id, user }: { id: string; user: { name: string; email: string; age: number | null } }) {
  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const age = formData.get("age") ? parseInt(formData.get("age") as string) : null;

        await updateUser({ id: parseInt(id), name, email, age });
        router.push(`/user/${id}`);
      }}
    >
      <input type="text" name="name" defaultValue={user.name} />
      <input type="text" name="email" defaultValue={user.email} />
      <input type="number" name="age" defaultValue={user.age || ""} />
      <button type="submit">Update</button>
    </form>
  );
}