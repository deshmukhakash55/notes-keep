import * as classes from "./NoteEditModal.module.css";
import React, { useCallback, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const NoteEditModal = (props) => {
  const [title, setTitle] = useState(props.note.title);
  const [text, setText] = useState(props.note.text);

  const { note, editNote } = props;

  const handleEditClick = useCallback(() => {
    const updatedNote = { ...note, title, text };
    editNote(updatedNote);
  }, [note, editNote, title, text]);

  const updateTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const updateText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  return (
    <div className={classes.NoteEditModal}>
      <div className={classes.NoteEditModalTitle}>Edit Note</div>
      <div className={classes.NoteEditInput}>
        <Input
          label="Title"
          value={title}
          type="textarea"
          handleChange={updateTitle}
          className={classes.Input}
          inputBlockClassName={classes.InputBlockClass}
          inputClassName={classes.InputClassName}
        />
      </div>
      <div className={classes.NoteEditInput}>
        <Input
          label="Text"
          value={text}
          type="textarea"
          handleChange={updateText}
          className={classes.Input}
          inputBlockClassName={classes.InputBlockClass}
          inputClassName={classes.InputClassName}
        />
      </div>
      <div className={classes.EditNoteButtons}>
        <Button
          text="SAVE"
          onClick={handleEditClick}
          className={classes.SaveButton}
        />
        <Button
          text="CANCEL"
          onClick={props.cancelEditNote}
          className={classes.CancelButton}
        />
      </div>
    </div>
  );
};

export default React.memo(NoteEditModal);
