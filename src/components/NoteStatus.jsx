import Message from "./Message";

function NoteStatus({ notes }) {
  // derived states
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const uncompletedNotes = notes.filter((note) => !note.completed).length;
  if (!allNotes)
    return (
      <Message text="No notes has already been added" icon="☹">
        <span>☹</span> <span>No notes has already been added</span>
      </Message>
    );

  return (
    <div className="note-status">
      <ul>
        <li>
          All <span>{allNotes}</span>
        </li>
        <li>
          Completed <span>{completedNotes}</span>
        </li>
        <li>
          Open <span>{uncompletedNotes}</span>
        </li>
      </ul>
    </div>
  );
}

export default NoteStatus;
