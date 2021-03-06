import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import Signup from './signup';
import { requestAllMovies } from '../../actions/movie_actions';
import { requestAllGenres } from '../../actions/genre_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors,
    movies: Object.values(state.movies),
    genres: Object.values(state.genres)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    requestAllMovies: () => dispatch(requestAllMovies()),
    requestAllGenres: () => dispatch(requestAllGenres())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);