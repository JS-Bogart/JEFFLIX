import * as APIUtil from '../util/my_list_api_util';

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

const addMovieToList = movie => ({
  type: ADD_LIST_ITEM,
  movie
});

const deleteMovieFromList = () => ({
  type: REMOVE_LIST_ITEM
});

export const addMovie = movie => dispatch => (
  APIUtil.add(movie)
    .then(movie => (dispatch(addMovieToList(movie))))
);

export const deleteMovie = id => dispatch => (
  APIUtil.deleteMovieFromList(id)
    .then(() => dispatch(deleteMovieFromList()))
);