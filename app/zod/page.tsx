'use client'
import React from 'react'
import UserSchema from '@/types/index';
import { toast } from '@/hooks/use-toast';

export default function Zod() {
  const userData = { name: "Ana", age: 25, email: "anample.com" };

  const result = UserSchema.safeParse(userData);

  if (result.success) {
    console.log("Validni podaci:", result.data);
    toast({
      title: "Validacija uspešna",
      description: "Podaci su uspešno validirani.",
      variant: "default",
    });
  //  alert("Validni podaci: " + JSON.stringify(result.data));


  } else {
    console.error("Greške u validaciji:", result.error.format());
toast({
      title: "Greška u validaciji",
      description: "Podaci nisu validni.",
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
