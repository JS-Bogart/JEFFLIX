import { RECEIVE_SPLASH_EMAIL } from '../actions/splash_actions';

const splashReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPLASH_EMAIL:
      return Object.assign({}, state, { splashEmail: action.splashEmail });
    default:
      return state;
  }
}

export default splashReducer;