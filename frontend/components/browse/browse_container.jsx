import { connect } from 'react-redux';
import Browse from './browse';
import { logout } from '../../actions/session_actions';
import { requestAllMovies, requestMovie } from '../../actions/movie_actions';
import { requestAllGenres } from '../../actions/genre_actions';
import { getMyList, addMovie, deleteMovie } from '../../actions/my_list_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    movies: Object.values(state.movies),
    genres: Object.values(state.genres),
    myList: Object.values(state.myList)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestAllMovies: () => dispatch(requestAllMovies()),
    requestAllGenres: () => dispatch(requestAllGenres()),
    getMyList: (userId) => dispatch(getMyList(userId)),
    addMovie: (movie) => dispatch(addMovie(movie)),
    deleteMovie: (movieId) => dispatch(deleteMovie(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);