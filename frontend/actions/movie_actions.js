import * as APIUtil from '../util/movies_api_util';

export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
})

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
})

export const requestAllMovies = () => dispatch => {
  return APIUtil.fetchAllMovies()
  .then(movies => dispatch(receiveAllMovies(movies)))
}

export const requestMovie = id => dispatch => {
  return APIUtil.fetchMovie(id)
  .then(movie => dispatch(receiveMovie(movie)))
}