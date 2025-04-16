/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { updateGost } from "@/lib/gost.actions";
import { useRouter } from "next/navigation";

export default function GostForm({ id, gost }: { id: string; gost: { name: string; email: string; age: number | null } ,type:'Create' | 'Update'}) {
  const router = useRouter();
  const { toast } = useToast();

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
      <Input type="text" name="name" defaultValue={gost.name} />
      <Input type="text" name="email" defaultValue={gost.email} />
      <Input type="number" name="age" defaultValue={gost.age || ""} />
      <Button className="bg-emerald-950 text-amber-50" type="submit">Izmjeni</Button>
    </form>
  );
}