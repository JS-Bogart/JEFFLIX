import { RECEIVE_GENRE_MOVIES } from '../actions/genre_actions';

const genreMoviesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GENRE_MOVIES:
      return Object.assign({}, action.movies, state)
    default:
      return state;
  }
}

export default genreMoviesReducer;