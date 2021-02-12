import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
})

export const signup = user => dispatch => {
  return (
    APIUtil.signup(user)
      .then(user => (dispatch(receiveCurrentUser(user))))
      .fail(error => (dispatch(receiveErrors(error.responseJSON))))
  );
}

export const login = user => dispatch => {
  return (
    APIUtil.login(user)
      .then(user => (dispatch(receiveCurrentUser(user))))
      .fail(error => (dispatch(receiveErrors(error.responseJSON))))
  );
}

export const logout = () => dispatch => (APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))
);