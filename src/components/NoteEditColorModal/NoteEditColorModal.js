import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button/Button";
import NotePreview from "../NotePreview/NotePreview";

import * as classes from "./NoteEditColorModal.module.css";

const colors = [
  "#f7f7f7",
  "#ad605a",
  "#5b8234",
  "#ad9e4e",
  "#698cc7",
  "#ac80c4",
  "#a8c480",
];

export const NoteEditColorModal = (props) => {
  const [previewNote, setPreviewNote] = useState(props.note);

  useEffect(() => {
    setPreviewNote(props.note);
  }, [props.note]);

  const { editColorNote } = props;

  const changeColorTo = useCallback(
    (color) => {
      setPreviewNote({ ...previewNote, color });
      editColorNote({ ...previewNote, color });
    },
    [editColorNote, previewNote, setPreviewNote]
  );

  return (
    <div className={classes.NoteEditColorModal}>
      <div className={classes.NoteEditColorModalTitle}>Edit Color</div>
      <div className={classes.Note}>
        <NotePreview note={previewNote} />
      </div>
      <div className={classes.ColorButtons}>
        {colors.map((color) => (
          <button
            className={classes.Color}
            key={color}
            onClick={() => changeColorTo(color)}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
      <div className={classes.Close}>
        <Button
          text="CLOSE"
          className={classes.CloseButton}
          onClick={props.cancelEditColorNote}
        />
      </div>
    </div>
  );
};

export default React.memo(NoteEditColorModal);
