import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const handleAddNote = () => {
    if (noteInput.trim()) {
      setNotes([...notes, noteInput.trim()]);
      setNoteInput("");
    }
  };

  const handleDeleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="bg-white  rounded-xl shadow p-5 mt-6">
      <h2 className="text-xl font-semibold text-gray-800  mb-4">
        Personal Notes
      </h2>

      <textarea
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        placeholder="Write something important..."
        className="w-full h-24 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400   "
      />

      <button
        onClick={handleAddNote}
        className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Save Note
      </button>

      <div className="mt-4 space-y-3">
        {notes.map((note, index) => (
          <div key={index} className="bg-gray-100  p-3 rounded relative group">
            <p className="text-gray-700 ">{note}</p>
            <button
              onClick={() => handleDeleteNote(index)}
              className="absolute top-2 right-2 text-sm text-red-500 hover:text-red-700 hidden group-hover:block"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notes;
