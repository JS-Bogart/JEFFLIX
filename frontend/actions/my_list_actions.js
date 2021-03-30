import * as APIUtil from '../util/my_list_api_util';

export const GET_USER_LIST = 'GET_USER_LIST';
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

const receiveUserList = movies => ({
  type: GET_USER_LIST,
  movies
})

const addMovieToList = movie => ({
  type: ADD_LIST_ITEM,
  movie
});

const deleteMovieFromList = () => ({
  type: REMOVE_LIST_ITEM
});

export const getMyList = userId => dispatch => (
  APIUtil.getMyList(userId)
    .then(movies => dispatch(receiveUserList(movies)))
)

export const addMovie = movie => dispatch => (
  APIUtil.add(movie)
    .then(movie => (dispatch(addMovieToList(movie))))
);

export const deleteMovie = id => dispatch => (
  APIUtil.remove(id)
    .then(id => dispatch(deleteMovieFromList(id)))
);