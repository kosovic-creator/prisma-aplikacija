import React from 'react'
import { usersAll } from "@/lib/user.actions";
import Link from 'next/link';


async function page() {

    const user = await usersAll();

    return (
        <>

            <h2>Users</h2>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}- {user.age}
                        <Link href={`/user/${user.id}`}>View</Link>
                        <Link href={`/user/${user.id}/edit`}>Edit</Link>
                        <Link href={`/user/${user.id}/delete`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link href="/form">Create User</Link>

        </>

    )
}

export default page