import React from "react";

function NoteSearch({ onSearch }) {
  return (
    <div data-testid="note-search" className="note-search">
      <input
        data-testid="note-search-input"
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Cari Catatan..."
      />
    </div>
  );
}

export default NoteSearch;
