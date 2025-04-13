'use client';

import { useFormState } from 'react-dom';

// Definišite server-side funkciju za obradu podataka
export async function handleFormSubmit(
  previousState: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  const name = formData.get('name')?.toString();
  return { message: `Hello, ${name || 'Guest'}!` };
}

// Komponenta forme
const MyForm: React.FC = () => {
  const [state, formAction] = useFormState(handleFormSubmit, { message: '' });

  return (
    <form action={formAction}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <button type="submit">Submit</button>
      <p>{state.message}</p>
    </form>
  );
};

export default MyForm;
