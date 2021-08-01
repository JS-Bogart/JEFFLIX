import React, { useState, useEffect } from 'react';
import useDebounce from '../../util/debounce_util';

const Navbar = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const changeSearchStatus = () => {
    if (searchbarOpen) {
      setSearchbarOpen(false);
    } else {
      setSearchbarOpen(true);
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleUpdate(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const handleUpdate = (value) => {
    if (value) {
      props.history.push(`/search/${value}`)
    }
  }

  const handleInput = () => {
    return (e) => {
      setSearchTerm(e.currentTarget.value);
    }
  }

  const getSearchBar = () => {
    if (searchbarOpen) {
      return (
        <div className="search-bar">
          <p onClick={() => changeSearchStatus()}>&#128269;</p>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInput()}
          />
        </div>
      )
    } else {
      return (
        <p onClick={() => changeSearchStatus()}>&#128269;</p>
      );
    }
  }

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
        {getSearchBar()}
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
              onClick={props.logout}
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

export default Navbar;