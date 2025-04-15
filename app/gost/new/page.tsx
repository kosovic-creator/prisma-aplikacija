'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createGostAction } from '@/lib/gost.actions';
import { useActionState } from 'react'
import { z } from 'zod';

// Definicija zod sheme
const gostSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    age: z.number().min(18, 'Age must be at least 18').max(100, 'Age must be less than 100'),
});

const Page: React.FC = () => {
    const [state, formAction] = useActionState(async (state: { message: string }, formData: FormData): Promise<{ message: string }> => {
        // Pretvaranje FormData u objekt
        const data = Object.fromEntries(formData.entries());

        // Validacija podataka
        const parsedData = gostSchema.safeParse({
            name: data.name,
            email: data.email,
            age: Number(data.age),
        });

        if (!parsedData.success) {
            // Ako validacija ne uspije, vratite greške
            return { message: parsedData.error.errors.map(err => err.message).join(', ') };
        }

        // Ako validacija uspije, pozovite createGostAction
        return createGostAction(state, formData);
    }, { message: '' });

    return (
        <form action={formAction}>
            <Input type="text" name="name" />
            <Input type="text" name="email" />
            <Input type="number" name="age" />
            <Button className="bg-emerald-950 text-amber-50" type="submit">Izmjeni</Button>
            <Button type="submit">Submit</Button>
            <p>{state.message}</p>
        </form>
    );
};

export default Page;
