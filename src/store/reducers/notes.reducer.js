import * as notesActionTypes from "../actions/actionTypes/notes.actionTypes";

const dummyNotes = [
  {
    id: 1,
    title: "React Topics",
    text: "Hooks, Routing, JSX, CSS Modules",
    color: "#698cc7",
  },
  {
    id: 2,
    title: "Angular Topics",
    text: "Dependency Injection, Content Projection, Directives & Pipes",
    color: "#ad605a",
  },
  {
    id: 3,
    title: "Grocery",
    text: "Rice, Wheat, Soap, Dry fruits, Turmeric, Vicks",
    color: "#5b8234",
  },
  {
    id: 4,
    title: "Lens",
    text: "Shop name - MyLens, Price: Rs. 800",
    color: "#ac80c4",
  },
  {
    id: 5,
    title: "Bills",
    text: "Electricity - 800 Rs, Phone - 700 Rs,  Wifi - 800 Rs.",
    color: "#a8c480",
  },
  {
    id: 6,
    title: "Rohit Email",
    text: "rohit@gmail.com",
    color: "#f7f7f7",
  },
  {
    id: 7,
    title: "Amazon Shopping List",
    text: "Router, Headphones",
    color: "#ad9e4e",
  },
];

const initialNotesState = {
  notes: dummyNotes,
  isAddNoteProgress: false,
  isAddNoteEnd: false,
  isAddNoteFailed: false,
  isAddNoteSuccess: false,
  addNoteFailureReason: "",
  isDeleteNoteProgress: false,
  isDeleteNoteEnd: false,
  isDeleteNoteFailed: false,
  isDeleteNoteSuccess: false,
  deleteNoteFailureReason: "",
  isEditNoteProgress: false,
  isEditNoteEnd: false,
  isEditNoteFailed: false,
  isEditNoteSuccess: false,
  editNoteFailureReason: "",
};

export const notesReducer = (state = initialNotesState, action) => {
  switch (action.type) {
    case notesActionTypes.ADD_NOTE_PROGRESS:
      return {
        ...state,
        isAddNoteProgress: true,
        isAddNoteFailed: false,
        isAddNoteSuccess: false,
        addNoteFailureReason: "",
      };
    case notesActionTypes.ADD_NOTE_END:
      return {
        ...state,
        isAddNoteProgress: false,
      };
    case notesActionTypes.ADD_NOTE_SUCCESS:
      const notes = [...state.notes, action.payload.note];
      return {
        ...state,
        notes,
        isAddNoteFailed: false,
        isAddNoteSuccess: true,
        addNoteFailureReason: "",
      };
    case notesActionTypes.ADD_NOTE_FAILED:
      return {
        ...state,
        isAddNoteFailed: true,
        isAddNoteSuccess: false,
        addNoteFailureReason: action.payload.reason,
      };
    case notesActionTypes.DELETE_NOTE_PROGRESS:
      return {
        ...state,
        isDeleteNoteProgress: true,
        isDeleteNoteFailed: false,
        isDeleteNoteSuccess: false,
        deleteNoteFailureReason: "",
      };
    case notesActionTypes.DELETE_NOTE_END:
      return {
        ...state,
        isDeleteNoteProgress: false,
      };
    case notesActionTypes.DELETE_NOTE_SUCCESS:
      const updatedNotesAfterDelete = state.notes.filter(
        (note) => note.id !== action.payload.noteId
      );
      return {
        ...state,
        notes: updatedNotesAfterDelete,
        isDeleteNoteFailed: false,
        isDeleteNoteSuccess: true,
        deleteNoteFailureReason: "",
      };
    case notesActionTypes.DELETE_NOTE_FAILED:
      return {
        ...state,
        isDeleteNoteFailed: true,
        isDeleteNoteSuccess: false,
        deleteNoteFailureReason: action.payload.reason,
      };
    case notesActionTypes.EDIT_NOTE_PROGRESS:
      return {
        ...state,
        isEditNoteProgress: true,
        isEditNoteFailed: false,
        isEditNoteSuccess: false,
        editNoteFailureReason: "",
      };
    case notesActionTypes.EDIT_NOTE_END:
      return {
        ...state,
        isEditNoteProgress: false,
      };
    case notesActionTypes.EDIT_NOTE_SUCCESS:
      const noteToEditIndex = state.notes.findIndex(
        (note) => note.id === action.payload.note.id
      );
      const updatedNotesAfterEdit = [...state.notes];
      updatedNotesAfterEdit[noteToEditIndex] = { ...action.payload.note };
      return {
        ...state,
        notes: updatedNotesAfterEdit,
        isEditNoteFailed: false,
        isEditNoteSuccess: true,
        editNoteFailureReason: "",
      };
    case notesActionTypes.EDIT_NOTE_FAILED:
      return {
        ...state,
        isEditNoteFailed: true,
        isEditNoteSuccess: false,
        editNoteFailureReason: action.payload.reason,
      };
    default:
      return { ...state };
  }
};
