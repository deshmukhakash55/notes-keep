import { put, takeEvery } from "redux-saga/effects";
import * as authActionTypes from "../actions/actionTypes/auth.actionsTypes";
import {
  loginEnd,
  loginFailed,
  loginProgress,
  loginSuccess,
} from "../actions/auth.actions";

const expectedEmail = "abc@xyz.com";
const expectedPassword = "abc";

function* loginStart(action) {
  yield put(loginProgress());
  const { email, password } = action.payload;
  if (email === expectedEmail && password === expectedPassword) {
    yield put(loginSuccess(email));
  } else {
    yield put(loginFailed({ reason: "Invalid email or password" }));
  }
  yield put(loginEnd());
}

function* authSagas() {
  yield takeEvery(authActionTypes.LOGIN_START, loginStart);
}

export default authSagas;
