import { ADD_MESSAGE } from '../constants';
export const addMessages = message => {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
};
