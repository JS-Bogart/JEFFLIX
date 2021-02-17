import * as APIUtil from '../util/genres_api_util';

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveAllGenres = (genres) => ({
  type: RECEIVE_ALL_GENRES,
  genres
})

const receiveGenre = (genre) => ({
  type: RECEIVE_GENRE,
  genre
})