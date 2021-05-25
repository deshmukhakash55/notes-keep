import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Search from "../../components/Search/Search";
import NotesList from "../NotesList/NotesList";
import SearchList from "../SearchList/SearchList";
import NewNoteBuilder from "../../components/NewNoteBuilder/NewNoteBuilder";

import * as classes from "./Dashboard.module.css";
import { addNoteStart } from "../../store/actions/notes.actions";

const Dashboard = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchedNotes, setSearchedNotes] = useState([]);

  const handleSearchTextEntered = useCallback(
    (event) => {
      const newSearchText = event.target.value;
      setSearchText(newSearchText);
    },
    [setSearchText]
  );

  useEffect(() => {
    if (!searchText) {
      return;
    }
    const newSearchedNotes = props.notes.filter((note) => {
      if (note.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        return true;
      }
      if (note.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    });
    setSearchedNotes(newSearchedNotes);
  }, [searchText, props.notes]);

  const { addNoteStart, notes } = props;

  const addNewNote = useCallback(
    (rawNote) => {
      const id = notes.length + 1;
      const note = { ...rawNote, id };
      addNoteStart(note);
    },
    [addNoteStart, notes]
  );

  return (
    <div>
      <div className={classes.Nav}>
        <div className={classes.Logo}>Note-Keep</div>
        <div className={classes.SearchBlock}>
          <Search onSearchTextEnter={handleSearchTextEntered} />
        </div>
      </div>
      <div>
        <NewNoteBuilder addNewNote={addNewNote} />
      </div>
      {!searchText ? <NotesList /> : <SearchList notes={searchedNotes} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
});

const mapDispatchToProps = (dispatch) => ({
  addNoteStart: (note) => dispatch(addNoteStart(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
