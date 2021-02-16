import React from 'react';

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
            <img src={window.profilepic} alt="profilepic" className="profilepic"/>
            <span>&#x25BE;</span>
            <div className="logout-dropdown">
              <span>&#x25B4;</span>
              <div>
                <a
                  onClick={this.props.logout}
                  href="/#/login"
                  className="logout-link"
                >
                  Sign out of Jefflix
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default Browse;