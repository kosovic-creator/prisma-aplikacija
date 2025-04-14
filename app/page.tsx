
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const gosts= await prisma.gost.findMany()
  return (
  <>
{gosts.map((gost) => (
    <div key={gost.id}>
      <h2>{gost.name}</h2>
      <p>{gost.email}</p>
      <p>{gost.age}</p>
    </div>
  ))}

<Link href="/gost/new">Create gost</Link>

  </>
  );
}
