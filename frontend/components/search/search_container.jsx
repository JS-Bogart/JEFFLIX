import { connect } from 'react-redux';
import Search from './search';
import { requestAllMovies } from '../../actions/movie_actions';
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
    requestAllMovies: () => dispatch(requestAllMovies()),
    requestAllGenres: () => dispatch(requestAllGenres()),
    getMyList: (userId) => dispatch(getMyList(userId)),
    addMovie: (movie) => dispatch(addMovie(movie)),
    deleteMovie: (movieId) => dispatch(deleteMovie(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);