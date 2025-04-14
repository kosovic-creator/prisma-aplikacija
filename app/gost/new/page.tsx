'use client';

import { Button } from '@/components/ui/button';
import { creategostAction } from '@/lib/gost.actions';
import { useFormState } from 'react-dom';

const Page: React.FC = () => {
    const [state, formAction] = useFormState(creategostAction, { message: '' });

    return (
        <form action={formAction}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" required />
            <Button type="submit">Submit</Button>
            <p>{state.message}</p>
        </form>
    );
};

export default Page;
