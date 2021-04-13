import { connect } from 'react-redux';
import MyList from './my_list';
import { logout } from '../../actions/session_actions';
import { getMyList, deleteMovie } from '../../actions/my_list_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    myList: Object.values(state.myList)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getMyList: (userId) => dispatch(getMyList(userId)),
    deleteMovie: (id) => dispatch(deleteMovie(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList);