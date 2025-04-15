/* eslint-disable @typescript-eslint/no-unused-vars */
import { updateGost } from "@/lib/gost.actions";
import Link from "next/link";
import GostForm from "./GostForm";

export default async function page({
  params,
}: {
    params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Await the params to resolve
  const gost = await updateGost({ id: parseInt(id, 10), name: "", email: "", age: null })


  return (
    <>

<div>
      <h1 className="text-2xl font-bold">Izmjeni</h1>
      <GostForm id={id} gost={{ ...gost, email: gost.email ?? "" }} type={"Update"} />
      <Link href={`/gost`}>Nazad</Link>
      {/* <Link href={`/gost/${id}`}>Back to gost</Link> */}
    </div>
     <div>
     <h1 className="text-2xl font-bold">Dodaj</h1>
     <GostForm id={id} gost={{ ...gost, email: gost.email ?? "" }} type={"Create"} />
     <Link href={`/gost`}>Nazad</Link>
     {/* <Link href={`/gost/${id}`}>Back to gost</Link> */}
   </div>





    </>

  );
}
