/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import prisma from "@/lib/prisma";

import { z } from "zod";
export async function usersAll() {
    try {
        return await prisma.user.findMany();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
export async function userById(id: number) {
    try {
        return await prisma.user.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
}
export async function createUser(name: string, email: string) {
    try {
        return await prisma.user.create({
            data: { name, email },
        });
    } catch (error) {
        console.error('Error creating user:', error);
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
        console.error('Error updating user:', error);
        throw error;
    }
}
export async function deleteUser(id: number) {
    try {
        return await prisma.user.delete({
            where: { id },
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
export async function deleteAllUsers() {
    try {
        return await prisma.user.deleteMany();
    } catch (error) {
        console.error('Error deleting all users:', error);
        throw error;
    }
}
export async function getUserCount() {
    try {
        return await prisma.user.count();
    } catch (error) {
        console.error('Error getting user count:', error);
        throw error;
    }
}
export async function getUserByEmail(email: string) {
    try {
        return await prisma.user.findUnique({
            where: { email },
        });
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
}

export async function handleFormSubmit(
    previousState: { message: string },
    formData: FormData
): Promise<{ message: string }> {
    const name = formData.get('name')?.toString();
    return { message: `Hello, ${name || 'Guest'}!` };
}

