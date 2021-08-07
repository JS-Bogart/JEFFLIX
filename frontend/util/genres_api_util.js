export const fetchAllGenres = () => {
  return $.ajax({
    method: "GET",
    url: "/api/genres"
  })
};

export const fetchGenreMovies = genreId => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/genres/${genreId}/movies`
    })
  )
}