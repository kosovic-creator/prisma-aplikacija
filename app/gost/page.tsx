import React from 'react'
import { gostsAll } from "@/lib/gost.actions";
import Link from 'next/link';


async function page() {

    const gost = await gostsAll();

    return (
        <>

            <h2>gosts</h2>
            <ul>
                {gost.map((gost) => (
                    <li key={gost.id}>
                        {gost.name} - {gost.email}- {gost.age}
                        <Link href={`/gost/${gost.id}`}>View</Link>
                        <Link href={`/gost/${gost.id}/update`}>Edit</Link>
                        <Link href={`/gost/${gost.id}/delete`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link href="/gost/new">Create gost</Link>

        </>

    )
}

export default page