/* eslint-disable @typescript-eslint/no-unused-vars */

"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

import { z } from "zod";
import { toast } from "@/hooks/use-toast";

export async function gostsAll() {
  try {
    return await prisma.gost.findMany();
  } catch (error) {
    console.error("Error fetching gosts:", error);
    throw error;
  }
}
export async function createGostAction(
  formState: { message: string },
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const age = Number(formData.get("age") as string);
    const email = formData.get("email") as string;
    if (!name || !email) {
      return { message: "All fields are required" };
    }
    await prisma.gost.create({ data: { name, email,age } });
  } catch {
    // toast({
    //   title: "Error",
    //   description: "Unknown Error Occured!",
    //   variant: "destructive",
    // });

    return {
      message: "Unknown Error Occured!"
    };
  }
  console.log("gost created");
  redirect("/gost");
}


export async function deleteGost(id: number) {
  try {
    return await prisma.gost.delete({
      where: { id },
    });
  } catch {
    return {
      message: "Unknown Error Occured!",
    };
  }
  console.log("gost created");
  redirect("/gost");
}
export async function updateGost({ id, name, email, age }: { id: number; name?: string; email?: string; age?: number | null }) {
  try {
    return await prisma.gost.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(age !== undefined && { age }),
      },
    });
  } catch (error) {
    console.error("Error updating gost:", error);
    throw error;
  }
}
export async function gostById(id: number) {
  try {
    return await prisma.gost.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching gost by ID:", error);
    throw error;
  }
}

// export async function getgostCount() {
//   try {
//     return await prisma.gost.count();
//   } catch (error) {
//     console.error("Error fetching gost count:", error);
//     throw error;
//   }
// }
// export async function getgostByEmail(email: string) {
//   try {
//     return await prisma.gost.findUnique({
//       where: { email },
//     });
//   } catch (error) {
//     console.error("Error fetching gost by email:", error);
//     throw error;
//   }
// }
// export async function getgostByName(name: string) {
//   try {
//     return await prisma.gost.findFirst({
//       where: { name },
//     });
//   } catch (error) {
//     console.error("Error fetching gost by name:", error);
//     throw error;
//   }
// }
// export async function getgostById(id: number) {
//   try {
//     return await prisma.gost.findUnique({
//       where: { id },
//     });
//   } catch (error) {
//     console.error("Error fetching gost by ID:", error);
//     throw error;
//   }
// }
// export async function getgostByAge(age: number) {
//   try {
//     return await prisma.gost.findMany({
//       where: { age },
//     });
//   } catch (error) {
//     console.error("Error fetching gosts by age:", error);
//     throw error;
//   }
// }
// export async function deleteAllgosts() {
//   try {
//     return await prisma.gost.deleteMany();
//   } catch (error) {
//     console.error("Error deleting all gosts:", error);
//     throw error;
//   }
// }
