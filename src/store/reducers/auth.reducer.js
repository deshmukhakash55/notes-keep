import * as authActionTypes from "../actions/actionTypes/auth.actionsTypes";

const initialAuthState = {
  loggedInUserEmail: null,
  isLoginProgress: false,
  isLoginSuccess: false,
  isLoginFailed: false,
  loginFailedReason: "",
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_PROGRESS:
      return {
        ...state,
        isLoginProgress: true,
        isLoginSuccess: false,
        isLoginFailed: false,
        loginFailedReason: "",
      };
    case authActionTypes.LOGIN_END:
      return {
        ...state,
        isLoginProgress: false,
      };
    case authActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoginSuccess: false,
        isLoginFailed: true,
        loginFailedReason: action.payload.reason,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUserEmail: action.payload.email,
        isLoginSuccess: true,
        isLoginFailed: false,
        loginFailedReason: "",
      };
    default:
      return { ...state };
  }
};
