import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);