import React, { useCallback } from "react";
import { connect } from "react-redux";
import Note from "../../components/Note/Note";
import {
  deleteNoteStart,
  editNoteStart,
} from "../../store/actions/notes.actions";

import * as classes from "./SearchList.module.css";

const SearchList = (props) => {
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

  const columnContent = [];
  for (let index = 0; index < props.notes.length; index += 1) {
    columnContent.push(
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
      <div className={classes.NotesColumn}>{columnContent}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteNoteStart: (noteId) => dispatch(deleteNoteStart(noteId)),
  editNoteStart: (note) => dispatch(editNoteStart(note)),
});

export default connect(null, mapDispatchToProps)(SearchList);
