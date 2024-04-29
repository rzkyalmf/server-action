"use client";

import { NotesAction } from "@/actions/notesAction";
import { useRef } from "react";

export const CreateNote = () => {
  //ketika submit, notes yang ada ditextarea akan direset
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div>
      <form
        ref={formRef}
        action={async (formData) => {
          NotesAction(formData);
          formRef.current?.reset();
        }}
        className="space-y-2"
      >
        <textarea
          name="content"
          placeholder="Type something..."
          className="border w-full block p-4 rounded-lg"
        />
        <button className="px-4 py-2 bg-indigo-400 text-white font-medium rounded-lg">
          Create Note
        </button>
      </form>
    </div>
  );
};
