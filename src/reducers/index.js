import { combineReducers } from 'redux';
import { inputReducer as input } from './inputReducer';

export default combineReducers({
  //All the reducers will be passed through here
  input,
});
