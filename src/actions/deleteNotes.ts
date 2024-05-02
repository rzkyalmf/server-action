"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/db/utils/prisma";

export async function DeleteNotes(formData: FormData) {
  const id = formData.get("id");

  await prisma.note.delete({
    where: {
      id: id as string,
    },
  });

  revalidatePath("/");
}
