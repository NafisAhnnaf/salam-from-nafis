"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSenior(formData: FormData) {
    const name = formData.get("name") as string;
    const gender = formData.get("gender") as "MALE" | "FEMALE";
    const message = formData.get("message") as string;

    // Generate a random 6-character slug or use a UUID
    const slug = Math.random().toString(36).substring(2, 8);

    await prisma.user.create({
        data: {
            name,
            gender,
            slug,
            senior: {
                create: {
                    message: message || "Eid Mubarak to you and your loved ones!"
                }
            }
        }
    });

    revalidatePath("/admin/dashboard");
}