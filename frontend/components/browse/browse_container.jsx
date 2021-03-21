import { connect } from 'react-redux';
import Browse from './browse';
import { logout } from '../../actions/session_actions';
import { requestAllMovies, requestMovie } from '../../actions/movie_actions';
import { requestAllGenres } from '../../actions/genre_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    movies: Object.values(state.movies),
    genres: Object.values(state.genres)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestAllMovies: () => dispatch(requestAllMovies()),
    requestMovie: (movieId) => dispatch(requestMovie(movieId)),
    requestAllGenres: () => dispatch(requestAllGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);