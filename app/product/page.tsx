import React from 'react'

import { productsAll } from '@/lib/product.actions';
import { redirect } from 'next/navigation';


export default async function Product() {

    const products = await productsAll();
    console.log(products);
    if (!products) {

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
