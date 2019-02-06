import * as types from "../actions/actionTypes";

const initialState = {
  user: {
    username: undefined,
    password: undefined
  }
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOG_USER_IN:
      return (state = {
        ...state,
        username: action.username,
        password: action.password,
        userLoggedIn: true
      });

    case types.LOG_USER_OUT:
      return (state = {
        ...state,
        username: undefined,
        password: undefined,
        userLoggedIn: false
      });

    case types.IS_USER_LOGGED_IN:
      const { username } = state.user;
      return { ...state, userLoggedIn: username !== undefined };

    default:
      return state;
  }
}
