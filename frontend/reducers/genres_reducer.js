import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from '../actions/genre_actions';

const genreReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type){
    case RECEIVE_ALL_GENRES:
      return Object.assign({}, action.genres, state)
    case RECEIVE_GENRE:
      nextState[action.genre.id] = action.genre;
      return nextState;
    default:
      return state;
  }
}

export default genreReducer;