import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import Login from './login';
import { requestAllMovies } from '../../actions/movie_actions';
import { requestAllGenres } from '../../actions/genre_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    requestAllMovies: () => dispatch(requestAllMovies()),
    requestAllGenres: () => dispatch(requestAllGenres())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);