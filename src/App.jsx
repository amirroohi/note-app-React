import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

// global varaible
// const INITIAL_NOTES = [];

function App() {
  // states
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // handlers
  // const handleAddNote = (newNote) => {
  //   dispatch({ type: "add", payload: newNote });
  // };

  // const handleDeleteNote = (id) => {
  //   dispatch({ type: "delete", payload: id });
  // };

  // const handleCompletedNote = (e) => {
  //   const noteId = Number(e.target.value);
  //   dispatch({ type: "completed", payload: noteId });
  // };

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList
              sortBy={sortBy}

            />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
