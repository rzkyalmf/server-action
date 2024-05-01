"use server";

import { prisma } from "@/db/utils/prisma";
import { redirect } from "next/navigation";

export async function UpdateNotes(formData: FormData) {
  const id = formData.get("id");
  const content = formData.get("content");

  await prisma.note.update({
    where: {
      id: id as string,
    },
    data: {
      content: content as string,
    },
  });

  redirect("/");
}
