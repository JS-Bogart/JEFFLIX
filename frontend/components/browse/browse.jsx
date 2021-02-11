import React from 'react';
import { Link } from 'react-router-dom';

class Browse extends React.Component {

  render() {
    return (
      <div>
        <header>
          <Link
            to="/browse"
            className="logo-browse-link"
          >
            JEFFLIX
          </Link>
          <Link
            onClick={this.props.logout}
            to="/login"
            className="logout-link"
          >
            Sign out of Jefflix
          </Link>
        </header>
      </div>
    );
  }
};

export default Browse;