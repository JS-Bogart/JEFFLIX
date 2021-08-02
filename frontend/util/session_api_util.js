const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

export const signup = user => {
  return(
    $.ajax({
      method: 'POST',
      url: '/api/user',
      data: JSON.stringify({ user }),
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json",
      }
    })
  )
};

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: JSON.stringify({ user }),
    headers: {
      "X-CSRF-Token": csrfToken,
      "Content-Type": "application/json",
    }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    headers: {
      "X-CSRF-Token": csrfToken,
      "Content-Type": "application/json",
    }
  })
);