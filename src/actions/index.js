import { SUBMIT_MESSAGE } from '../reducers/inputReducer';
import { LOGIN_DETAILS } from '../reducers/loginReducer';
import { UPDATE_USERS } from '../reducers/userReducer';

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

export function getLoginDetails(details) {
  return {
    type: LOGIN_DETAILS,
    payload: details,
  };
}
