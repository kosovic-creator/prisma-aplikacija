
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const users= await prisma.user.findMany()
  return (
  <>
{users.map((user) => (
    <div key={user.id}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </div>
  ))}

<Link href="/form">Create User</Link>

  </>
  );
}
