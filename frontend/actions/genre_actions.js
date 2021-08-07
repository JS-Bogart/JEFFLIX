import * as APIUtil from '../util/genres_api_util';

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
export const RECEIVE_GENRE_MOVIES = "RECEIVE_GENRE_MOVIES";

const receiveAllGenres = (genres) => ({
  type: RECEIVE_ALL_GENRES,
  genres
})

const receiveGenreMovies = (movies) => ({
  type: RECEIVE_GENRE_MOVIES,
  movies
})

export const requestAllGenres = () => dispatch => {
  return APIUtil.fetchAllGenres()
  .then(genres => dispatch(receiveAllGenres(genres)))
}

export const requestGenreMovies = genreId => dispatch => (
  APIUtil.fetchGenreMovies(genreId)
    .then(genreId => dispatch(receiveGenreMovies(genreId)))
);