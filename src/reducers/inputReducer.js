export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';

export function inputReducer(state = [], action) {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return [...state, action.payload];

    default:
      return state;
  }
}
