import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import movieReducer from './movies_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  movies: movieReducer
});