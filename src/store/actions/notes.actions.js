import * as notesActionTypes from "../actions/actionTypes/notes.actionTypes";

export const addNoteStart = (note) => ({
  type: notesActionTypes.ADD_NOTE_START,
  payload: { note },
});

export const addNoteProgress = () => ({
  type: notesActionTypes.ADD_NOTE_PROGRESS,
});

export const addNoteEnd = () => ({
  type: notesActionTypes.ADD_NOTE_END,
});

export const addNoteFailed = (reason) => ({
  type: notesActionTypes.ADD_NOTE_FAILED,
  payload: { reason },
});

export const addNoteSuccess = (note) => ({
  type: notesActionTypes.ADD_NOTE_SUCCESS,
  payload: { note },
});

export const editNoteStart = (note) => ({
  type: notesActionTypes.EDIT_NOTE_START,
  payload: { note },
});

export const editNoteProgress = () => ({
  type: notesActionTypes.EDIT_NOTE_PROGRESS,
});

export const editNoteEnd = () => ({
  type: notesActionTypes.EDIT_NOTE_END,
});

export const editNoteFailed = (reason) => ({
  type: notesActionTypes.EDIT_NOTE_FAILED,
  payload: { reason },
});

export const editNoteSuccess = (note) => ({
  type: notesActionTypes.EDIT_NOTE_SUCCESS,
  payload: { note },
});

export const deleteNoteStart = (noteId) => ({
  type: notesActionTypes.DELETE_NOTE_START,
  payload: { noteId },
});

export const deleteNoteProgress = () => ({
  type: notesActionTypes.DELETE_NOTE_PROGRESS,
});

export const deleteNoteEnd = () => ({
  type: notesActionTypes.DELETE_NOTE_END,
});

export const deleteNoteFailed = (reason) => ({
  type: notesActionTypes.DELETE_NOTE_FAILED,
  payload: { reason },
});

export const deleteNoteSuccess = (noteId) => ({
  type: notesActionTypes.DELETE_NOTE_SUCCESS,
  payload: { noteId },
});
