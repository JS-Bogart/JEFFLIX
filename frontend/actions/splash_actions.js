export const RECEIVE_SPLASH_EMAIL = 'RECEIVE_SPLASH_EMAIL';

const receiveSplashEmail = splashEmail => {
  return {
    type: RECEIVE_SPLASH_EMAIL,
    splashEmail
  }
};

export const autofillEmail = splashEmail => dispatch => {
  return (dispatch(receiveSplashEmail(splashEmail)))
}