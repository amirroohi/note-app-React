function NoteStatus({ notes }) {
  // derived states
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const uncompletedNotes = notes.filter((note) => !note.completed).length;
  if (!allNotes) {
    return <h2>You dont have any Note(s) here yet... </h2>;
  }
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
