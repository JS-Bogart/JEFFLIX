import { $CombinedState } from "redux"

export const fetchAllMovies = () => {
  return $CombinedState.ajax({
    method: "GET",
    url: "/api/movies"
  })
}

export const fetchMovie = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/movies/${id}`
  })
}