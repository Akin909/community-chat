import { ADD_USER } from '../constants';

const userReducer = (state = [], action) => {
  // console.log('user reducer working');
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default userReducer;
