export const fetchAllGenres = () => {
  return $.ajax({
    method: "GET",
    url: "/api/genres"
  })
};

export const fetchGenre = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/movies/${id}`
  })
};