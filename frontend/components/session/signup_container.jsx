import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { signup, removeErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors,
    navLink: <Link to="/login">Sign In</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);