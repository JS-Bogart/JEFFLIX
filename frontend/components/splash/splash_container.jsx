import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash'

const mapDispatchToProps = dispatch => {
  return {
    requestAllMovies: () => dispatch(requestAllMovies()),
    requestAllGenres: () => dispatch(requestAllGenres()),
    login: user => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(Splash);