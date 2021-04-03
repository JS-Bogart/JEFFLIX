import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searching: true,
      movies: []
    }
    this.changeSearchStatus = this.changeSearchStatus.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.props.match.params;
    this.setState({
      searchTerm: searchTerm
    });
  }

  changeSearchStatus() {
    if (this.state.searching) {
      this.setState({searching: false})
    } else {
      this.setState({ searching: true })
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
      this.props.history.push(`/search/${e.currentTarget.value}`);
    }
  }

  getSearchBar() {
    if (this.state.searching) {
      return (
        <div className="search-bar">
          <p onClick={() => this.changeSearchStatus()}>&#128269;</p>
          <input 
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleInput('searchTerm')}
          />
        </div>
      )
    } else {
      return(
        <p onClick={() => this.changeSearchStatus()}>&#128269;</p>
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