import React from 'react';

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      searching: false
    };
    
    this.debounce = this.debounce.bind(this);
    this.handleUpdate = this.debounce(this.handleUpdate.bind(this), 500);
  }

  changeSearchStatus() {
    if (this.state.searching) {
      this.setState({ searching: false })
    } else {
      this.setState({ searching: true })
    }
  }

  handleUpdate(value) {
    if (value) {
      this.props.history.push(`/search/${value}`)
    }
  }

  handleInput(field) {
    return (e) => {
      const value = `${e.currentTarget.value}`;
      this.setState({ [field]: e.currentTarget.value })
      this.handleUpdate(value);
    }
  }

  debounce(func, time) {
    let urlTimeout;
    clearTimeout(urlTimeout);
    urlTimeout = setTimeout(func, time);
    return (...args) => {
      clearTimeout(urlTimeout);
      urlTimeout = setTimeout(() => { func.apply(this, args); }, time)
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
      return (
        <p onClick={() => this.changeSearchStatus()}>&#128269;</p>
      );
    }
  }

  render() {
    return(
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
            <div className="dropdown-list">
              <a href="https://github.com/JS-Bogart/JEFFLIX">GitHub</a>
              <a href="https://www.linkedin.com/in/jeffrey-bogart-7874121a5/">
                LinkedIn
              </a>
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
    )
  }
}

export default Navbar;