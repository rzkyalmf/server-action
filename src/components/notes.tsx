"use client";

import { CreateNotes } from "@/actions/createNotes";
import { useFormState } from "react-dom";
import { DeleteNotes } from "@/actions/deleteNotes";

import Link from "next/link";

interface Note {
  notes: { id: string; content: string }[];
}

export const Notes = ({ notes }: Note) => {
  //ketika submit, notes yang ada ditextarea akan direset
  const [state, formActions] = useFormState(CreateNotes, {
    resetKey: "",
    message: "",
  });

  return (
    <>
      <form key={state.resetKey} action={formActions} className="space-y-2">
        <textarea
          name="content"
          placeholder="Type something..."
          className="border w-full block p-4 rounded-lg"
        />
        <SubmitButtonNotes />
        {/* {state.message !== "" ? <div>{state.message}</div> : null} */}
      </form>
      <div>
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <div>{note.content}</div>
              <div className="flex gap-2">
                <form action={DeleteNotes}>
                  <input name="id" value={note.id} hidden />
                  <button className="bg-rose-100 text-rose-800 text-xs font-medium px-2 py-1 rounded-lg">
                    Delete
                  </button>
                </form>
                <Link href={`/${note.id}`}>
                  <button className="bg-slate-100 text-slate-800 text-xs font-medium px-2 py-1 rounded-lg">
                    Edit Note
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// membuat button pending ketika form sedang di submit
const SubmitButtonNotes = () => {
  // const { pending } = useFormStatus();
  return (
    <button
      // disabled={pending}
      className="disabled:opacity-50 px-4 py-2 bg-indigo-400 text-white font-medium rounded-lg"
    >
      CreateNote
    </button>
  );
};
