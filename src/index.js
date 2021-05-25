import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { authReducer } from "./store/reducers/auth.reducer";
import authSaga from "./store/sagas/auth.sagas";
import { notesReducer } from "./store/reducers/notes.reducer";
import notesSaga from "./store/sagas/notes.sagas";

const reducers = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

sagaMiddleware.run(authSaga);
sagaMiddleware.run(notesSaga);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
