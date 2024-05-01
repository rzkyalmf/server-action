import { prisma } from "@/db/utils/prisma";
import { UpdateNotes } from "@/actions/updateNotes";

interface PageProps {
  params: {
    noteId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { noteId } = params;

  const note = await prisma.note.findFirst({
    where: {
      id: noteId,
    },
  });

  console.log(note);

  return (
    <main className="max-w-lg m-auto my-12">
      <div>Page : {noteId}</div>
      <form action={UpdateNotes} className="space-y-2">
        <input name="id" value={note?.id} hidden />
        <textarea
          name="content"
          defaultValue={note?.content}
          placeholder="Edit Note"
          className="border w-full block p-4 rounded-lg"
        />
        <button className="bg-rose-100 text-rose-800 text-xs font-medium px-2 py-1 rounded-lg">
          Update Note
        </button>
      </form>
    </main>
  );
}
