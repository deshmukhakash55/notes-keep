import React from "react";
import IconButton from "../IconButton/IconButton";
import * as classes from "./NoteActions.module.css";

const NoteActions = (props) => {
  return (
    <div className={classes.NoteActions}>
      <IconButton
        onClick={props.deleteClick}
        className={classes.NoteActionsButton}
        backgroundColor={props.backgroundColor}
        icon="delete"
      ></IconButton>
      <IconButton
        onClick={props.editClick}
        className={classes.NoteActionsButton}
        backgroundColor={props.backgroundColor}
        icon="edit"
      ></IconButton>
      <IconButton
        onClick={props.editColorClick}
        className={classes.NoteActionsButton}
        backgroundColor={props.backgroundColor}
        icon="color"
      ></IconButton>
    </div>
  );
};

export default React.memo(NoteActions);
