export const add = movie => {
  return(
    $.ajax({
      method: 'POST',
      url: '/api/my_lists',
      data: { movie }
    })
  )
}

export const remove = id => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/my_lists/${id}`
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