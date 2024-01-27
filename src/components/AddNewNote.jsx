import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!noteTitle || !noteDesc) {
      return alert("Title/Description is empty!");
    }

    const newNote = {
      title: noteTitle,
      description: noteDesc,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "add", payload: newNote });

    setNoteTitle("");
    setNoteDesc("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Title ..."
        />
        <input
          value={noteDesc}
          onChange={(e) => setNoteDesc(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Description ..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
