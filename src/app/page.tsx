import { Notes } from "@/components/notes";
import { prisma } from "@/db/utils/prisma";

export default async function Home() {
  // GET Data
  const getDataNotes = await prisma.note.findMany();

  return (
    <main className="max-w-lg m-auto space-y-4 my-4">
      <h1 className="text-3xl font-bold"> Create Your Notes APP</h1>
      <Notes notes={getDataNotes} />
    </main>
  );
}
