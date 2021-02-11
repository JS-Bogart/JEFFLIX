import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import splashReducer from './splash_reducer';

export default combineReducers({
  session: sessionReducer,
  splash: splashReducer
});