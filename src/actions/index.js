import { ADD_MESSAGE } from '../constants';
import { ADD_USER } from '../constants';

export const addMessages = message => {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
};

export const updateUsers = user => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
