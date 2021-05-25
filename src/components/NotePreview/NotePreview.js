import React from "react";
import NoteActions from "../NoteActions/NoteActions";

import * as classes from "./NotePreview.module.css";

const NotePreview = (props) => {
  const noop = () => {};
  return (
    <React.Fragment>
      <div
        className={classes.Note}
        style={{ backgroundColor: props.note.color }}
      >
        <div className={classes.NoteTitle}>{props.note.title}</div>
        <div className={classes.NoteText}>{props.note.text}</div>
        <div className={classes.NoteActionsHost}>
          <NoteActions
            backgroundColor={props.note.color}
            deleteClick={noop}
            editClick={noop}
            editColorClick={noop}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(NotePreview);
