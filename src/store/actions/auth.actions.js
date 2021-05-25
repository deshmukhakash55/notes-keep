import * as authActionTypes from "./actionTypes/auth.actionsTypes";

export const loginStart = ({ email, password }) => ({
  type: authActionTypes.LOGIN_START,
  payload: { email, password },
});

export const loginProgress = () => ({
  type: authActionTypes.LOGIN_PROGRESS,
});

export const loginEnd = () => ({
  type: authActionTypes.LOGIN_END,
});

export const loginFailed = ({ reason }) => ({
  type: authActionTypes.LOGIN_FAILED,
  payload: { reason },
});

export const loginSuccess = (email) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: { email },
});
