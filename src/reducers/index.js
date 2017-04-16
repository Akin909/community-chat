import { combineReducers } from 'redux';
import { inputReducer as input } from './inputReducer';
import { loginReducer as login } from './loginReducer';


export default combineReducers({
  //All the reducers will be passed through here
  input,
  login,
});
