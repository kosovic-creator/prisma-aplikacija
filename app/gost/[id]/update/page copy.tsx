/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useActionState } from 'react'
import GostSchema from '@/types/index';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';
import { updateGost } from "@/lib/gost.actions";


//Definicija zod sheme
const gostSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    age: z.number().min(18, 'Age must be at least 18').max(100, 'Age must be less than 100'),
});

const Page: React.FC = () => {
    const [state, formAction] = useActionState(async (state: { message: string }, formData: updateGost): Promise<{ message: string }> => {
        const data = Object.fromEntries(formData.entries());

        // Validacija podataka
        const parsedData = gostSchema.safeParse({
            name: data.name,
            email: data.email,
            age: Number(data.age),
        });

        if (!parsedData.success) {
            // Ako validacija ne uspe, vratite greške
            return { message: parsedData.error.errors.map(err => err.message).join(', ') };
        }

        // Ako validacija uspe, pozovite updateGost
        await updateGost({
            id: parseInt(id, 10),
            name: parsedData.data.name,
            email: parsedData.data.email,
            age: parsedData.data.age,
        });

        return { message: 'Gost successfully updated!' };
    });

    return (
        <form action={formAction}>
            <Input type="text" name="name" />
            <Input type="text" name="email" />
            <Input type="number" name="age" />
            <Button type="submit">Submit</Button>
            <p>{state.message}</p>
        </form>
    );
};

export default Page;
