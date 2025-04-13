'use client';

import { Button } from '@/components/ui/button';
import { handleFormSubmit } from '@/lib/actions';
import { useFormState } from 'react-dom';

// Definišite server-side funkciju za obradu podataka


// Komponenta forme
const MyForm: React.FC = () => {
  const [state, formAction] = useFormState(handleFormSubmit, { message: '' });

  return (
    <form action={formAction}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <Button type="submit">Submit</Button>
      <p>{state.message}</p>
    </form>
  );
};

export default MyForm;
