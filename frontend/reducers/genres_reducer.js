import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from '../actions/genre_actions';

const genreReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_GENRES:
      return Object.assign({}, action.genres, state)
    default:
      return state;
  }
}

export default genreReducer;