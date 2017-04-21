import { combineReducers } from 'redux';
import messages from './messageReducer';
import users from './userReducer';

export default combineReducers({
  messages,
  users,
});
