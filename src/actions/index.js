import * as types from "./actionTypes";

export function logUserIn(username, password) {
  return {
    type: types.LOG_USER_IN,
    username: username,
    password: password
  };
}

export function logUserOut() {
  return {
    type: types.LOG_USER_OUT,
    username: undefined,
    password: undefined
  };
}

export function isUserLoggedIn() {
  return {
    type: types.IS_USER_LOGGED_IN
  };
}
