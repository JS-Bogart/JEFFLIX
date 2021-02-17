export const fetchAllMovies = () => {
  return $.ajax({
    method: "GET",
    url: "/api/movies"
  })
}; //Might not use

export const fetchMovie = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/movies/${id}`
  })
};