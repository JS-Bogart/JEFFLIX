const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

export const add = myList => {
  return(
    $.ajax({
      method: 'POST',
      url: '/api/my_lists',
      data: JSON.stringify(myList),
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json",
      },
    })
  )
}

export const remove = movie => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/my_lists/${movie.movie_id}`,
      data: JSON.stringify(movie),
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json",
      },
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