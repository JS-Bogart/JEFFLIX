import { connect } from 'react-redux';
import MyList from './my_list';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, null)(MyList);