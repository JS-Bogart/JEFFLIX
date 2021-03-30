export const add = myList => {
  return(
    $.ajax({
      method: 'POST',
      url: '/api/my_lists',
      data: myList
    })
  )
}

export const remove = movie => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/my_lists/${movie.movie_id}`,
      data: movie
    })
  )
}

export const getMyList = userId => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/movies`
    })
  )
}