import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash'

const mapStateToProps = state => {
  return {
    movies: Object.values(state.movies),
    genres: Object.values(state.genres)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllMovies: () => dispatch(requestAllMovies()),
    requestAllGenres: () => dispatch(requestAllGenres()),
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);