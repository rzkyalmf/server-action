import { Notes } from "@/components/notes";
import { prisma } from "@/db/utils/prisma";
import { DeleteNotes } from "@/actions/deleteNotes";

export default async function Home() {
  // GET Data
  const getDataNotes = await prisma.note.findMany();

  return (
    <main className="max-w-lg m-auto space-y-4 my-4">
      <h1 className="text-3xl font-bold"> Create Your Notes APP</h1>
      <Notes />
      <div>
        {getDataNotes.map((note: { id: string; content: string }) => {
          return (
            <div key={note.id}>
              <div>{note.content}</div>
              <form action={DeleteNotes}>
                <input name="id" value={note.id} hidden />
                <button className="bg-rose-100 text-rose-800 text-xs font-medium px-2 py-1 rounded-lg">
                  Delete
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </main>
  );
}
