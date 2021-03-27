import { connect } from 'react-redux';
import MyList from './my_list';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    movies: Object.values(state.movies)
  }
}

export default connect(mapStateToProps, null)(MyList);