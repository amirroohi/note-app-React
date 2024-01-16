import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // console.log(id);
    const filteredNotes = notes.filter((n) => n.id !== id);
    setNotes(filteredNotes);
  };
  const handleCompletedNote = (e) => {
    const noteId = Number(e.target.value);
    // 1#when dont need prev state
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);
    // 2#when need prev state (sometimes this way is prefer)
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onCompleted={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
