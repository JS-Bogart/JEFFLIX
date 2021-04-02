import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searching: false,
      movies: []
    }
  }

  componentDidMount() {
    const { searchTerm } = this.props.match.params;
    this.setState({
      searchTerm: searchTerm
    });
  }

  getSearchBar() {
    if (this.state.searching) {
      return null;
    } else {
      return(
        <p>&#128269;</p>
      );
    }
  }

  render(){
    return (
      <div className="search">
        <header className="navbar">
          <a
            href="/#/browse"
            className="logo-browse-link"
          >
            <img src={window.browselogo} alt="browselogo" />
          </a>
          <div className="navbar-links">
            <a
              href="/#/browse"
              className="home-link"
            >
              Home
            </a>
            <a
              href="/#/browse/my-list"
              className="home-link"
            >
              My List
            </a>
          </div>
          <div className="search-box">
            {this.getSearchBar()}
          </div>
          <div className="browse-icon">
            <img src={window.profilepic} alt="profilepic" className="profilepic" />
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
        <div className="search-body">
          
        </div>
      </div>
    );
  }
}

export default Search;