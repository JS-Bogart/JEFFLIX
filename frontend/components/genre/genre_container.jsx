import { connect } from 'react-redux';
import Genre from './genre';
import { requestGenreMovies } from '../../actions/genre_actions';
import { getMyList, addMovie, deleteMovie } from '../../actions/my_list_actions';

const mapStateToProps = state => {
  return{
    currentUser: state.session.currentUser,
    genreMovies: Object.values(state.genreMovies),
    myList: Object.values(state.myList)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestGenreMovies: (genreId) => dispatch(requestGenreMovies(genreId)),
    getMyList: (userId) => dispatch(getMyList(userId)),
    addMovie: (movie) => dispatch(addMovie(movie)),
    deleteMovie: (movieId) => dispatch(deleteMovie(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);