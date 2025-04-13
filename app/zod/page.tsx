'use client'
import React from 'react'
import UserSchema, { User } from '@/types/index';
import { toast } from '../../hooks/use-toast';

export default function Zod() {
  const userData = { name: "Ana", age: 25, email: "anample.com" };

  const result = UserSchema.safeParse(userData);

  if (result.success) {
    const validUser:User = result.data;
    console.log("Validni podaci:", validUser);

    toast({
      title: "Validacija uspešna",
      description: "Podaci su uspešno validirani.",
      variant: "default",
    });



  } else {
    console.error("Greške u validaciji:", result.error.format());
    toast({
      title: "Validacija neuspješna",
      description: "Podaci nisu uspešno validirani.",
      variant: "destructive",
    });
  }
  return (
    <div>
      <h1>User Page</h1>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Email: {userData.email}</p>
    </div>
  )
}
