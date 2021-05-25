import React, { useCallback, useState } from "react";
import NoteActions from "../NoteActions/NoteActions";
import NoteEditColorModal from "../NoteEditColorModal/NoteEditColorModal";
import NoteEditModal from "../NoteEditModal/NoteEditModal";

import * as classes from "./Note.module.css";

const suppressEvent = (event) => {
  event.stopPropagation();
};

const Note = (props) => {
  const [shouldShowEditModal, setShouldShowEditModal] = useState(false);
  const [shouldShowEditColorModal, setShouldShowEditColorModal] =
    useState(false);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  const { onEdit, onDelete, note } = props;

  const handleNoteDelete = useCallback(() => {
    onDelete(note.id);
  }, [onDelete, note]);

  const closeEditModal = useCallback(() => {
    setShouldShowEditModal(false);
  }, [setShouldShowEditModal]);

  const handleEditNote = useCallback(
    (note) => {
      onEdit(note);
      closeEditModal();
    },
    [onEdit, closeEditModal]
  );

  const handleEditColorClick = useCallback(() => {
    setShouldShowEditColorModal(true);
  }, [setShouldShowEditColorModal]);

  const handleEditColorNote = useCallback(
    (note) => {
      onEdit(note);
    },
    [onEdit]
  );

  const closeEditColorModal = useCallback(() => {
    setShouldShowEditColorModal(false);
  }, [setShouldShowEditColorModal]);

  const handleEditClick = useCallback(() => {
    setShouldShowEditModal(true);
  }, [setShouldShowEditModal]);

  const handleNoteCardHover = useCallback(() => {
    setShouldShowActions(true);
  }, [setShouldShowActions]);

  const handleNoteCardHoverDone = useCallback(() => {
    setShouldShowActions(false);
  }, [setShouldShowActions]);

  return (
    <React.Fragment>
      <div
        onMouseOver={handleNoteCardHover}
        onMouseLeave={handleNoteCardHoverDone}
        className={classes.Note}
        style={{ backgroundColor: props.note.color }}
      >
        <div className={classes.NoteTitle}>{props.note.title}</div>
        <div className={classes.NoteText}>{props.note.text}</div>
        <div className={classes.NoteActionsHost}>
          {shouldShowActions ? (
            <NoteActions
              backgroundColor={props.note.color}
              deleteClick={handleNoteDelete}
              editClick={handleEditClick}
              editColorClick={handleEditColorClick}
            />
          ) : null}
        </div>
      </div>
      {shouldShowEditModal ? (
        <div className={classes.EditModal} onClick={closeEditModal}>
          <div className={classes.ModalContent} onClick={suppressEvent}>
            <NoteEditModal
              note={props.note}
              cancelEditNote={closeEditModal}
              editNote={handleEditNote}
            />
          </div>
        </div>
      ) : null}
      {shouldShowEditColorModal ? (
        <div className={classes.EditColorModal} onClick={closeEditColorModal}>
          <div className={classes.ModalContent} onClick={suppressEvent}>
            <NoteEditColorModal
              note={props.note}
              cancelEditColorNote={closeEditColorModal}
              editColorNote={handleEditColorNote}
            />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default React.memo(Note);
