"use server";

import { prisma } from "@/db/utils/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CreateNotesSchema = z.object({
  content: z.string().min(6).max(12),
});

export async function CreateNotes(_: unknown, formData: FormData) {
  const content = formData.get("content");

  const { success } = CreateNotesSchema.safeParse({
    content,
  });

  if (!success) {
    return {
      message: "Input Tidak Valid",
      status: "error",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 300));
  await prisma.note.create({
    data: {
      content: content as string,
    },
  });

  revalidatePath("/");

  return {
    message: "Note Telah Berhasil Di Tambahkan",
    status: "success",
  };
}
