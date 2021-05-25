import { takeEvery } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import * as notesActionTypes from "../actions/actionTypes/notes.actionTypes";
import {
  addNoteEnd,
  addNoteFailed,
  addNoteProgress,
  addNoteSuccess,
  deleteNoteEnd,
  deleteNoteFailed,
  deleteNoteProgress,
  deleteNoteSuccess,
  editNoteEnd,
  editNoteFailed,
  editNoteProgress,
  editNoteSuccess,
} from "../actions/notes.actions";

function* addNoteStart(action) {
  const { note } = action.payload;
  yield put(addNoteProgress());
  try {
    //  Send the note to backend
    yield put(addNoteSuccess(note));
  } catch (error) {
    yield put(addNoteFailed(error.message));
  }
  yield put(addNoteEnd());
}

function* deleteNoteStart(action) {
  const { noteId } = action.payload;
  yield put(deleteNoteProgress());
  try {
    //  Delete the note from backend
    yield put(deleteNoteSuccess(noteId));
  } catch (error) {
    yield put(deleteNoteFailed(error.message));
  }
  yield put(deleteNoteEnd());
}

function* editNoteStart(action) {
  const { note } = action.payload;
  yield put(editNoteProgress());
  try {
    //  Delete the note from backend
    yield put(editNoteSuccess(note));
  } catch (error) {
    yield put(editNoteFailed(error.message));
  }
  yield put(editNoteEnd());
}

function* notesSaga() {
  yield takeEvery(notesActionTypes.ADD_NOTE_START, addNoteStart);
  yield takeEvery(notesActionTypes.DELETE_NOTE_START, deleteNoteStart);
  yield takeEvery(notesActionTypes.EDIT_NOTE_START, editNoteStart);
}

export default notesSaga;
