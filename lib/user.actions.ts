/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function createUserAction(
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



    await prisma.user.create({ data: { name, email,age } });
  } catch (err: unknown) {
    return {
      message: "Unknown Error Occured!",
    };
  }
  redirect("/");
}
export async function updateUserAction(
  formState: { message: string },
  formData: FormData
) {
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    let password = formData.get("password") as string;
    const email = formData.get("email") as string;
    if (!name || !username || !password || !email) {
      return { message: "All fields are required" };
    }

    const duplicate = await db.user.findUnique({
      where: {
        username: username,
      },
    });

    if (duplicate) {
      return { message: "That username already exists." };
    }

    if (password.length < 5) {
      return { message: "Password is too short." };
    }

    password = await bcrypt.hash(password, 10);

    await db.user.update({
      where: { id },
      data: { name, username,email, password },
    });
  } catch (err: unknown) {
    return {
      message: "Unknown Error Occured!",
    };
  }
  redirect("/");
}