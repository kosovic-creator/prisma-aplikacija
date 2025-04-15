import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <span>This field is required</span>}

      <label>Last Name</label>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
