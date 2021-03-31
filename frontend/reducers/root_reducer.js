import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import movieReducer from './movies_reducer';
import genreReducer from './genres_reducer';
import myListReducer from './my_list_reducer';
import genreMoviesReducer from './genre_movies_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  movies: movieReducer,
  genres: genreReducer,
  myList: myListReducer,
  genreMovies: genreMoviesReducer
});