import React, { useCallback, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import * as classes from "./NewNoteBuilder.module.css";

const colors = [
  "#f7f7f7",
  "#ad605a",
  "#5b8234",
  "#ad9e4e",
  "#698cc7",
  "#ac80c4",
  "#a8c480",
];

export const NewNoteBuilder = (props) => {
  const [newNote, setNewNote] = useState({
    title: "",
    text: "",
    color: colors[0],
  });

  const [shouldShowInputBlock, setShouldShowInputBlock] = useState(false);

  const handleNewNoteNotifierClick = useCallback(() => {
    setShouldShowInputBlock(true);
  }, [setShouldShowInputBlock]);

  const changeColorTo = useCallback(
    (color) => {
      setNewNote({ ...newNote, color });
    },
    [setNewNote, newNote]
  );

  const handleCancelNewNoteClick = useCallback(
    () => {
      setShouldShowInputBlock(false);
      setNewNote({
        title: "",
        text: "",
        color: colors[0],
      });
    },
    [setShouldShowInputBlock],
    setNewNote
  );

  const { addNewNote } = props;

  const handleCreateNewNoteClick = useCallback(() => {
    setShouldShowInputBlock(false);
    addNewNote({ ...newNote });
  }, [setShouldShowInputBlock, addNewNote, newNote]);

  const handleTextChange = useCallback(
    (event) => {
      const text = event.target.value;
      setNewNote({ ...newNote, text });
    },
    [setNewNote, newNote]
  );

  const handleTitleChange = useCallback(
    (event) => {
      const title = event.target.value;
      setNewNote({ ...newNote, title });
    },
    [setNewNote, newNote]
  );

  return (
    <div className={classes.NewNoteBuilder}>
      {!shouldShowInputBlock ? (
        <div
          className={classes.NewNoteNotifier}
          onClick={handleNewNoteNotifierClick}
        >
          Take a note...
        </div>
      ) : (
        <div
          className={classes.NewNoteInputBlock}
          style={{ backgroundColor: newNote.color }}
        >
          <Input
            type="textarea"
            placeholder="Title"
            rows={1}
            inputClassName={classes.Input}
            className={classes.InputBlock}
            inputBlockClassName={classes.InputBlockClass}
            handleChange={handleTitleChange}
          />
          <Input
            type="textarea"
            placeholder="Text"
            rows={2}
            inputClassName={classes.Input}
            className={classes.InputBlock}
            inputBlockClassName={classes.InputBlockClass}
            handleChange={handleTextChange}
          />
          <div className={classes.ColorPickerBlock}>
            <div>Color : </div>
            <div className={classes.ColorPickerButtons}>
              {colors.map((color) => (
                <button
                  className={classes.Color}
                  key={color}
                  onClick={() => changeColorTo(color)}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
          <div className={classes.NewNoteActions}>
            <Button
              text="CANCEL"
              className={classes.NewNoteActionButton}
              onClick={handleCancelNewNoteClick}
            />
            <Button
              text="CREATE"
              className={classes.NewNoteActionButton}
              onClick={handleCreateNewNoteClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(NewNoteBuilder);
