import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

// global varaible
const INITIAL_NOTES = [];

function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "add": {
      return [...notes, payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== payload);
    }
    case "completed": {
      return notes.map((note) =>
        note.id == payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("unknown error" + type);
  }
}

function App() {
  // states
  const [notes, dispatch] = useReducer(notesReducer, INITIAL_NOTES);
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // handlers
  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
    // setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", payload: id });
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes);
  };

  const handleCompletedNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "completed", payload: noteId });

    // 1#when dont need prev state

    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);

    // 2#when need prev state (sometimes this way is prefer)

    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onCompleted={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
