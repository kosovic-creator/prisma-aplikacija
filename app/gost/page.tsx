import React from 'react'
import { gostsAll } from "@/lib/gost.actions";
import Link from 'next/link';
import { Button } from '@/components/ui/button';


async function page() {

    const gost = await gostsAll();

    return (
        <>

            {/* <Link href="/gost/new">Dodaj Gosta</Link> */}
            <Button className="btn btn-primary bg-blue-900 text-amber-50  " > <Link href="/gost/new">Dodaj Gosta</Link></Button>
            <table className='w-full mt-4 '>
                <caption className='text-2xl font-bold'>Gosti</caption>

                <thead>
                    <tr className='bg-gray-200'>


                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gost.map((gost) => (
                        <tr key={gost.id}>
                            <td>{gost.id}</td>
                            <td>{gost.name}</td>
                            <td>{gost.email}</td>
                            <td>{gost.age}</td>
                            <td>
                                {/* Add your action buttons here */}
                                <Link className='text-emerald-600' href={`/gost/${gost.id}/update`}>Edit</Link>
                                <Link className='text-amber-700' href={`/gost/${gost.id}/delete`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>

    )
}

export default page