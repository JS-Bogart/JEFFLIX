import React, { useState, useEffect, useRef } from 'react';
import useDebounce from '../../util/debounce_util';

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [previousTerm, setPreviousTerm] = useState(null);
  const [searchbarOpen, setSearchbarOpen] = useState(true);
  const [searched, setSearched] = useState(false);
  const [newSearch, setNewSearch] = useState(false);
  const [movies, setMovies] = useState(<p>No Results</p>);
  const myRef = React.createRef();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const movieRef = useRef();
  movieRef.current = movies;

  useEffect(async () => {
    if (props.movies.length < 1) {
      await props.requestAllMovies();
    } else if (props.genres.length < 1) {
      await props.requestAllGenres();
    } else if (searchTerm === '') {
      const { newSearchTerm } = props.match.params;
      setSearchTerm(newSearchTerm);
      myRef.current.focus();
      await props.getMyList(props.currentUser.id);
      searchMovies()
    }
    if (movies.length < 1 && props.movies.length > 0 &&
      !searched) {
      searchMovies();
    } else if (debouncedSearchTerm && newSearch) {
      handleUpdate(debouncedSearchTerm);
    }

  }, [searchTerm, debouncedSearchTerm])

  const handlePlayButton = (movie) => {
    props.history.push(`/watch/${movie}`);
  }

  const changeSearchStatus = () => {
    if (searchbarOpen) {
      setSearchbarOpen(false);
    } else {
      setSearchbarOpen(true);
    }
  }

  const searchUpdate = () => {
    searchMovies();
  }

  const handleUpdate = (value) => {
    if (value) {
      props.history.push(`/search/${value}`);
    } else if (searchTerm === '') {
      props.history.push("/browse");
    }
  }

  const handleInput = () => {
    return (e) => {
      const value = `${e.currentTarget.value}`;
      setSearchTerm(e.currentTarget.value);
      // setSearched(false);
      setNewSearch(true);
      if (value.length < 1) {
        props.history.push("/browse");
      }
      // } else {
      //   handleUpdate(value);
      // }
    }
  }

  const getSearchBar = () => {
    if (searchbarOpen) {
      return (
        <div className="search-bar">
          <p onClick={() => changeSearchStatus()}>&#128269;</p>
          <input 
            ref={myRef}
            type="text"
            value={searchTerm}
            onChange={handleInput()}
          />
        </div>
      )
    } else {
      return(
        <p onClick={() => changeSearchStatus()}>&#128269;</p>
      );
    }
  }

  const listButton = (movie, index) => {
    const myList = props.myList;
    const movieId = movie.id;
    let check = false;
    myList.forEach(movie => {
      if (movie.id === movieId) {
        check = true;
      }
    })
    if (check) {
      return (
        <p
          className="my-list-btn"
          onClick={() => removeFromList(movie, index)}
        >⊖</p>
      )
    } else {
      return (
        <p
          className="my-list-btn"
          onClick={() => addToList(movie, index)}
        >⊕</p>
      )
    }
  }

  const addToList = (movie, index) => {
    props.addMovie({ my_list: { user_id: props.userId, movie_id: movie.id } })
    const newMovies = movieRef.current.map(movie => movie);
    newMovies[index] =
      <div className="genre-item" key={index}>
        <img src={movie.imageUrl} alt={movie.title} />
        <div className="genre-video-wrap">
          <video
            id="slider-video"
            preload="metadata"
            src={movie.videoUrl}
            type="video/mp4"
            autoPlay={true}
            loop={true}
            muted={true}
          />
        </div>
        <div className="genre-item-info">
          <div className="item-title-play">
            <p>{movie.title}</p>
            <div className="item-buttons">
              <p
                className="my-list-btn"
                onClick={() => removeFromList(movie, index)}
              >⊖</p>
              <div
                className="item-play-btn"
                onClick={() => handlePlayButton(movie.id)}
              >
                <p className="play-circle">&#11044;</p>
                <p className="play-arrow">▶</p>
              </div>
            </div>
          </div>
          <div className="item-details">
            <div className="item-rating">
              <p>{movie.rating}</p>
            </div>
            <ul className="item-genre">
              {movie.genres.map((movieGenre, index) => (
                <li key={index}>{movieGenre.genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    setMovies(newMovies);
  }

  const removeFromList = (movie, index) => {
    const userId = props.userId;
    const movieListId = { user_id: userId, movie_id: movie.id }
    props.deleteMovie(movieListId);
    const newMovies = movieRef.current.map(movie => movie);
    newMovies[index] =
      <div className="genre-item" key={index}>
        <img src={movie.imageUrl} alt={movie.title} />
        <div className="genre-video-wrap">
          <video
            id="slider-video"
            preload="metadata"
            src={movie.videoUrl}
            type="video/mp4"
            autoPlay={true}
            loop={true}
            muted={true}
          />
        </div>
        <div className="genre-item-info">
          <div className="item-title-play">
            <p>{movie.title}</p>
            <div className="item-buttons">
              <p
                className="my-list-btn"
                onClick={() => addToList(movie, index)}
              >⊕</p>
              <div
                className="item-play-btn"
                onClick={() => handlePlayButton(movie.id)}
              >
                <p className="play-circle">&#11044;</p>
                <p className="play-arrow">▶</p>
              </div>
            </div>
          </div>
          <div className="item-details">
            <div className="item-rating">
              <p>{movie.rating}</p>
            </div>
            <ul className="item-genre">
              {movie.genres.map((movieGenre, index) => (
                <li key={index}>{movieGenre.genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    setMovies(newMovies);
  }

  const searchMovies = () => {
    const searchResults = props.movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const newMovies = [];

    searchResults.forEach((movie, index) => {
      newMovies.push(
        <div className="genre-item" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="genre-video-wrap">
            <video
              id="slider-video"
              preload="metadata"
              src={movie.videoUrl}
              type="video/mp4"
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="genre-item-info">
            <div className="item-title-play">
              <p>{movie.title}</p>
              <div className="item-buttons">
                {listButton(movie, index)}
                <div
                  className="item-play-btn"
                  onClick={() => handlePlayButton(movie.id)}
                >
                  <p className="play-circle">&#11044;</p>
                  <p className="play-arrow">▶</p>
                </div>
              </div>
            </div>
            <div className="item-details">
              <div className="item-rating">
                <p>{movie.rating}</p>
              </div>
              <ul className="item-genre">
                {movie.genres.map((movieGenre, index) => (
                  <li key={index}>{movieGenre.genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    })

    if (newMovies.length > 0) {
      setMovies(newMovies);
    }
    setSearched(true);
  }

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
          {getSearchBar()}
        </div>
        <div className="browse-icon">
          <img src={window.profilepic} alt="profilepic" className="profilepic" />
          <span>&#x25BE;</span>
          <div className="logout-dropdown">
            <span>&#x25B4;</span>
            <div>
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
      <div className="search-body"> 
        <div className="search-list">
          {movies}
        </div>         
      </div>
    </div>
  );
}

export default Search;