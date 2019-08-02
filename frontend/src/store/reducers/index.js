import { combineReducers } from 'redux';

import person from './person';
import todo from './todo';

export default combineReducers({
  person,
  todo
});