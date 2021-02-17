import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';

const movieReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type){
    case RECEIVE_ALL_MOVIES:
      return Object.assign({}, action.movies, state)
    case RECEIVE_MOVIE:
      nextState[action.movie.id] = action.movie;
      return nextState;
    default:
      return state;
  }
}

export default movieReducer;