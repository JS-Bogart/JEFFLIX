import { connect } from 'react-redux';
import Genre from './genre';
import { logout } from '../../actions/session_actions';
import { requestGenreMovies } from '../../actions/genre_actions';
import { getMyList, addMovie, deleteMovie } from '../../actions/my_list_actions';

const mapStateToProps = state => {
  return{
    userId: state.session.currentUser.id,
    genreMovies: Object.values(state.genreMovies),
    myList: Object.values(state.myList),
    genres: Object.values(state.genres)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestGenreMovies: (genreId) => dispatch(requestGenreMovies(genreId)),
    getMyList: (userId) => dispatch(getMyList(userId)),
    addMovie: (movie) => dispatch(addMovie(movie)),
    deleteMovie: (movieId) => dispatch(deleteMovie(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);