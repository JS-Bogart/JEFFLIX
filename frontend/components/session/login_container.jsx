import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors,
    navLink: <Link to="/signup">Sign up now</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);