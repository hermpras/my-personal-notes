import React from "react";
import { showFormattedDate } from "../utils";
import NoteActionButton from "./NoteActionButton";

function NoteItem({ note, onDelete, onArchive, searchKeyword }) {
  function highlightText(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(keyword, "i");
    const parts = text.split(regex);
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <mark>{keyword}</mark>}
      </React.Fragment>
    ));
  }

  return (
    <div className="note-item" data-testid="note-item" data-note-id={note?.id}>
      <div className="note-item__content" data-testid="note-item-content">
        {/* TODO [Advanced] sorot kata kunci pencarian dalam judul menggunakan elemen <mark>. */}
        <h3 className="note-item__title" data-testid="note-item-title">
          {highlightText(note.title, searchKeyword)}
        </h3>
        <p className="note-item__date" data-testid="note-item-date">
          {showFormattedDate(note.createdAt)}
        </p>
        {/* TODO [Advanced] sorot kata kunci pencarian dalam isi menggunakan elemen <mark>. */}
        <p className="note-item__body" data-testid="note-item-body">
          {highlightText(note.body, searchKeyword)}
        </p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        <NoteActionButton variant="delete" onClick={() => onDelete(note.id)} />
        <NoteActionButton
          variant="archive"
          onClick={() => onArchive(note.id)}
        />
      </div>
    </div>
  );
}

export default NoteItem;
