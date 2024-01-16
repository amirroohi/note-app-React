function NoteList({ notes, onDelete, onCompleted }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed?"completed":""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="description">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={onCompleted}
          />
        </div>
      </div>
      <div className="note-item__footer">
        <span>
          {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </span>
        <span>
          {" // " + new Date(note.createdAt).toLocaleTimeString("ar-EG", {})}
        </span>
      </div>
    </div>
  );
}
