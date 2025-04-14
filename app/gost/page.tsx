import React from 'react'
import { gostsAll } from "@/lib/gost.actions";
import Link from 'next/link';
import { Button } from '@/components/ui/button';


async function page() {

    const gost = await gostsAll();

    return (
        <>

            <h2>Gosti</h2>
            <Link href="/gost/new">Dodaj Gosta</Link>
            <ul>
                {gost.map((gost) => (
                    <li key={gost.id}>
                        {gost.name} - {gost.email}- {gost.age}
                        {/* <Link href={`/gost/${gost.id}`}>View</Link> */}
                        <Button variant="link" className="text-blue-500 hover:underline"><Link href={`/gost/${gost.id}/update`}>Edit</Link></Button>
                        <Button variant="link" className="text-orange-700 hover:underline"><Link href={`/gost/${gost.id}/delete`}>Delete</Link></Button>
                        {/* <Link href={`/gost/${gost.id}/update`}>Edit</Link>
                        <Link href={`/gost/${gost.id}/delete`}>Delete</Link> */}
                    </li>
                ))}
            </ul>


        </>

    )
}

export default page