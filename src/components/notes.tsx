"use client";

import { CreateNotes } from "@/actions/createNotes";
import { useFormStatus, useFormState } from "react-dom";

export const Notes = () => {
  //ketika submit, notes yang ada ditextarea akan direset
  const [state, formActions] = useFormState(CreateNotes, {
    resetKey: "",
    message: "",
  });

  return (
    <div>
      <form key={state.resetKey} action={formActions} className="space-y-2">
        <textarea
          name="content"
          placeholder="Type something..."
          className="border w-full block p-4 rounded-lg"
        />
        <SubmitButtonNotes />
        {state.message !== "" ? <div>{state.message}</div> : null}
      </form>
    </div>
  );
};

// membuat button pending ketika form sedang di submit
const SubmitButtonNotes = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="disabled:opacity-50 px-4 py-2 bg-indigo-400 text-white font-medium rounded-lg"
    >
      CreateNote
    </button>
  );
};
