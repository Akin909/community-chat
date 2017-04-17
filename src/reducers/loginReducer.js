export const LOGIN_DETAILS = 'LOGIN_DETAILS';

export function loginReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_DETAILS:
      return {
        ...state,
        submitted: action.payload.submitted,
        username: action.payload.username,
        password: action.payload.password,
        fromMe: action.payload.fromMe,
      };

    default:
      return state;
  }
}
