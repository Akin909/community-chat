export const UPDATE_USERS = 'UPDATE_USERS';

export function userReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_USERS:
      return [...state, action.payload];

    default:
      return state;
  }
}
