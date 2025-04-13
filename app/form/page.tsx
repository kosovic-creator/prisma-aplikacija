'use client';

import { Button } from '@/components/ui/button';

import { createUserAction } from '@/lib/user.actions';
import { useFormState } from 'react-dom';

// Definišite server-side funkciju za obradu podataka


// Komponenta forme
const MyForm: React.FC = () => {
  const [state, formAction] = useFormState(createUserAction, { message: '' });

  return (
    <form action={formAction}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <input type="text" id="email" name="email" required />
      <input type="text" id="age" name="age" required />
      <Button type="submit">Submit</Button>
      <p>{state.message}</p>
    </form>
  );
};

export default MyForm;
