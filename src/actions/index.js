import { SUBMIT_MESSAGE } from '../reducers/inputReducer';

export function handleChatSubmit(chat) {
  return {
    type: SUBMIT_MESSAGE,
    payload: chat,
  };
}
