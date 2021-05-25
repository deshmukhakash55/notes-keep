import React, { useCallback } from "react";
import { connect } from "react-redux";
import Note from "../../components/Note/Note";
import {
  deleteNoteStart,
  editNoteStart,
} from "../../store/actions/notes.actions";

import * as classes from "./NotesList.module.css";

const NotesList = (props) => {
  const { deleteNoteStart } = props;
  const deleteNote = useCallback(
    (noteId) => {
      deleteNoteStart(noteId);
    },
    [deleteNoteStart]
  );

  const { editNoteStart } = props;
  const editNote = useCallback(
    (note) => {
      editNoteStart(note);
    },
    [editNoteStart]
  );

  const firstColumnContent = [];
  for (let index = 0; index < props.notes.length; index += 3) {
    firstColumnContent.push(
      <Note
        key={index}
        note={props.notes[index]}
        onDelete={deleteNote}
        onEdit={editNote}
      ></Note>
    );
  }

  const secondColumnContent = [];
  for (let index = 1; index < props.notes.length; index += 3) {
    secondColumnContent.push(
      <Note
        key={index}
        note={props.notes[index]}
        onDelete={deleteNote}
        onEdit={editNote}
      ></Note>
    );
  }

  const thirdColumnContent = [];
  for (let index = 2; index < props.notes.length; index += 3) {
    thirdColumnContent.push(
      <Note
        key={index}
        note={props.notes[index]}
        onDelete={deleteNote}
        onEdit={editNote}
      ></Note>
    );
  }

  return (
    <div className={classes.NotesList}>
      <div className={classes.NotesColumn}>{firstColumnContent}</div>
      <div className={classes.NotesColumn}>{secondColumnContent}</div>
      <div className={classes.NotesColumn}>{thirdColumnContent}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
});

const mapDispatchToProps = (dispatch) => ({
  deleteNoteStart: (noteId) => dispatch(deleteNoteStart(noteId)),
  editNoteStart: (note) => dispatch(editNoteStart(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
