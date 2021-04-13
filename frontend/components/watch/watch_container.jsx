import { connect } from 'react-redux';
import Watch from './watch';
import { logout } from '../../actions/session_actions';
import { requestMovie } from '../../actions/movie_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    movies: Object.values(state.movies)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestMovie: (movieId) => dispatch(requestMovie(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch);