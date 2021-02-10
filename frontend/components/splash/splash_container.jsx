import React from 'react';
import { connect } from 'react-redux';
import { autofillEmail } from '../../actions/splash_actions';
import Splash from './splash'

const mapDispatchToProps = dispatch => {
  return {
    autofillEmail: splashEmail => dispatch(autofillEmail(splashEmail))
  };
};

export default connect(null, mapDispatchToProps)(Splash);