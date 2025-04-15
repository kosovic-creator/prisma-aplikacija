import React from 'react'
import { PrismaClient } from '@prisma/client';
import { productsAll } from '@/lib/product.actions';
import { redirect } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

export default async function Product() {
    const prisma=new PrismaClient();
    const products = await productsAll();
    console.log(products);
    if (!products) {
        toast({
            title: "Error",
            description: "Unknown Error Occured!",
            variant: "destructive",
        });
        redirect("/product");
    }
    console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
