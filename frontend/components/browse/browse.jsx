import React from 'react';
import { Link } from 'react-router-dom';

class Browse extends React.Component {

  render() {
    return (
      <div className="browse">
        <header>
          <a
            href="/#/browse"
            className="logo-browse-link"
          >
            <img src={window.browselogo} alt="browselogo" />
          </a>
          <div className="browse-icon">
            <img src={window.profilepic} alt="profilepic" />
            <div className="logout-dropdown">
              <a
                onClick={this.props.logout}
                href="/#/login"
                className="logout-link"
              >
                Sign out of Jefflix
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default Browse;