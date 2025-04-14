"use client";

import { updateGost } from "@/lib/gost.actions";
import { useRouter } from "next/navigation";

export default function UpdateGostForm({ id, gost }: { id: string; gost: { name: string; email: string; age: number | null } }) {
  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const age = formData.get("age") ? parseInt(formData.get("age") as string) : null;

        await updateGost({ id: parseInt(id), name, email, age });
        router.push(`/gost`);
      }}
    >
      <input type="text" name="name" defaultValue={gost.name} />
      <input type="text" name="email" defaultValue={gost.email} />
      <input type="number" name="age" defaultValue={gost.age || ""} />
      <button type="submit">Update</button>
    </form>
  );
}