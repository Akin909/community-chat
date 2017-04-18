import { SUBMIT_MESSAGE } from '../reducers/inputReducer';
import { LOGIN_DETAILS } from '../reducers/loginReducer';
import { UPDATE_USERS } from '../reducers/userReducer';
import { REMOVE_USER } from '../reducers/userReducer.js';
import { socket } from '../App';

export function handleChatSubmit(chat) {
  return {
    type: SUBMIT_MESSAGE,
    payload: chat,
  };
}
export function updateUserList(user) {
  return {
    type: UPDATE_USERS,
    payload: user,
  };
}
export function removeUser(user) {
  return {
    type: REMOVE_USER,
    payload: user,
  };
}

// export function getLoginDetails(details) {
//   socket.emit('user:login', details);
//   return {
//     type: LOGIN_DETAILS,
//     payload: details,
//   };
// }
