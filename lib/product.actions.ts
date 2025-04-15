'use server'

import prisma from "@/lib/prisma";

export async function productsAll() {
  try {
    return await prisma.product.findMany({
        orderBy: {
            price: "desc",
        }
        });
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
export async function productById(id: number) {
  try {
    return await prisma.product.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
}
export async function productByName(name: string) {
  try {
    return await prisma.product.findFirst({
      where: { name },
    });
  } catch (error) {
    console.error("Error fetching product by name:", error);
    throw error;
  }
}

export async function updateProduct(id: number, data: { name?: string; price?: number }) {
  try {
    return await prisma.product.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}

const products = await prisma.product.findMany({
  orderBy: {
    price: "desc",
  },
  where: {
    price: {
      gt: 50,
    },
  },
});
console.log(products);
