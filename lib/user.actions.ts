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
  redirect("/user");
}

export async function deleteAllUsers() {
  try {
    return await prisma.user.deleteMany();
  } catch (error) {
    console.error("Error deleting all users:", error);
    throw error;
  }
}
export async function deleteUser(id: number) {
  try {
    return await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
export async function updateUser(id: number, name: string) {
  try {
    return await prisma.user.update({
      where: { id },
      data: { name },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
export async function userById(id: number) {
  try {
    return await prisma.user.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
}
export async function usersAll() {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
export async function getUserCount() {
  try {
    return await prisma.user.count();
  } catch (error) {
    console.error("Error fetching user count:", error);
    throw error;
  }
}
export async function getUserByEmail(email: string) {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
}
export async function getUserByName(name: string) {
  try {
    return await prisma.user.findFirst({
      where: { name },
    });
  } catch (error) {
    console.error("Error fetching user by name:", error);
    throw error;
  }
}
export async function getUserById(id: number) {
  try {
    return await prisma.user.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
}
export async function getUserByAge(age: number) {
  try {
    return await prisma.user.findMany({
      where: { age },
    });
  } catch (error) {
    console.error("Error fetching users by age:", error);
    throw error;
  }
}
