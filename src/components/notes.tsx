"use client";

import { CreateNotes } from "@/actions/createNotes";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { DeleteNotes } from "@/actions/deleteNotes";
import { toast } from "sonner";
import { Note } from "@prisma/client";

import Link from "next/link";

interface NotesProps {
  notes: Note[];
}

export const Notes: React.FC<NotesProps> = ({ notes }) => {
  const [state, formActions] = useFormState(CreateNotes, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.status === "success") {
      toast(state?.message);
      formRef.current?.reset();
    } else {
      toast(state?.message);
    }
  }, [state]);

  return (
    <>
      <form ref={formRef} action={formActions} className="space-y-2">
        <textarea
          name="content"
          placeholder="Type something..."
          className="border w-full block p-4 rounded-lg"
        />
        <SubmitButtonNotes />
      </form>
      <div>
        {notes.map(({ id, content }) => {
          return (
            <div key={id}>
              <div>{content}</div>
              <div className="flex gap-2">
                <form action={DeleteNotes}>
                  <input name="id" value={id} hidden />
                  <button className="bg-rose-100 text-rose-800 text-xs font-medium px-2 py-1 rounded-lg">
                    Delete
                  </button>
                </form>
                <Link href={`/${id}`}>
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
