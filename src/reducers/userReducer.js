export const UPDATE_USERS = 'UPDATE_USERS';
export const REMOVE_USER = 'REMOVE_USER';

export function userReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_USERS:
      return [...state, action.payload];

    case REMOVE_USER:
      console.log('user to be deleted, userReducer', action.payload);
      return state.filter(user => {
        return user.username !== action.payload;
      });

    default:
      return state;
  }
}
