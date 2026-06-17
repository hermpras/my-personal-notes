import React from "react";

function NoteActionButton({ variant, onClick }) {
  return (
    <button
      className={
        variant === "delete"
          ? "note-item__delete-button"
          : "note-item__archive-button"
      }
      onClick={onClick}
    >
      {variant === "delete" ? "Delete" : "Archive"}
    </button>
  );
}

export default NoteActionButton;
