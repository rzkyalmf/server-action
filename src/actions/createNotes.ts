"use server";

import { prisma } from "@/db/utils/prisma";
import { revalidatePath } from "next/cache";

export async function CreateNotes(_: unknown, formData: FormData) {
  // await new Promise((resolve) => setTimeout(resolve, 500)); // simulate slow network, 0,5 second

  const content = formData.get("content");
  const data = await prisma.note.create({
    data: {
      content: content as string,
    },
  });

  revalidatePath("/");

  return { resetKey: data.id, message: "Note created successfully" };
}
