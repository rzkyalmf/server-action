"use server";

import { prisma } from "@/db/utils/prisma";
import { revalidatePath } from "next/cache";

export async function NotesAction(formData: FormData) {
  const content = formData.get("content");
  await prisma.note.create({
    data: {
      content: content as string,
    },
  });

  revalidatePath("/");
}
