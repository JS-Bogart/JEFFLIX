import { GET_USER_LIST, REMOVE_LIST_ITEM } from '../actions/my_list_actions';

const myListReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case GET_USER_LIST:
      return Object.assign({}, action.movies, state)
    case REMOVE_LIST_ITEM:
      delete nextState[action.movie.movie_id];
      return nextState;
    default:
      return state;
  }
}

export default myListReducer;