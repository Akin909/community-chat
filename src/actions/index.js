import { SUBMIT_MESSAGE } from '../reducers/inputReducer';
import { LOGIN_DETAILS } from '../reducers/loginReducer';

export function handleChatSubmit(chat) {
  return {
    type: SUBMIT_MESSAGE,
    payload: chat,
  };
}

export function getLoginDetails(details) {
  return {
    type: LOGIN_DETAILS,
    payload: details,
  };
}
