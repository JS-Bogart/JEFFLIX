import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      previousTerm: '',
      searching: true,
      searched: false,
      movies: []
    }
    this.myRef = React.createRef();
    this.changeSearchStatus = this.changeSearchStatus.bind(this);
    this.debounce = this.debounce.bind(this);
    this.handleUpdate = this.debounce(this.handleUpdate.bind(this), 500);
    this.searchUpdate = this.debounce(this.searchUpdate.bind(this), 500);
  }

  componentDidMount() {
    const { searchTerm } = this.props.match.params;
    this.setState({
      searchTerm: searchTerm
    });
    this.myRef.current.focus();
    if (this.props.movies.length < 1) {
      this.props.requestAllMovies();
    }
    if (this.props.genres.length < 1) {
      this.props.requestAllGenres();
    }
    this.props.getMyList(this.props.currentUser.id);
    this.searchMovies();
  }

  componentDidUpdate(){
    if (this.state.movies.length < 1 && this.props.movies.length > 0 && 
      !this.state.searched) {
      this.searchMovies();
    } else if (this.state.previousTerm !== this.state.searchTerm 
      && this.state.previousTerm.length < 1) {
      this.setState({
        previousTerm: this.state.searchTerm
      });
      this.searchMovies();
    } else if (this.state.previousTerm !== this.state.searchTerm
      && this.state.previousTerm.length >= 1) {
      this.setState({
        previousTerm: this.state.searchTerm
      });
      this.searchUpdate();
    }
  }

  debounce(func, time) {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(func, time);
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {func.apply(this, args);}, time)
    }
  }

  handlePlayButton(movie) {
    this.props.history.push(`/watch/${movie}`);
  }

  changeSearchStatus() {
    if (this.state.searching) {
      this.setState({searching: false});
    } else {
      this.setState({ searching: true });
    }
  }

  searchUpdate(){
    this.searchMovies();
  }

  handleUpdate(value) {
    if (value) {
      this.props.history.push(`/search/${value}`);
    } else if (this.state.searchTerm === '') {
      this.props.history.push("/browse");
    }
  }

  handleInput(field) {
    return (e) => {
      const value = `${e.currentTarget.value}`;
      this.setState({ [field]: e.currentTarget.value, searched: false })
      if (value.length < 1) {
        this.props.history.push("/browse");
      } else {
        this.handleUpdate(value);
      }
    }
  }

  getSearchBar() {
    if (this.state.searching) {
      return (
        <div className="search-bar">
          <p onClick={() => this.changeSearchStatus()}>&#128269;</p>
          <input 
            ref={this.myRef}
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

  listButton(movie, index) {
    const myList = this.props.myList;
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
          onClick={() => this.removeFromList(movie, index)}
        >⊖</p>
      )
    } else {
      return (
        <p
          className="my-list-btn"
          onClick={() => this.addToList(movie, index)}
        >⊕</p>
      )
    }
  }

  addToList(movie, index) {
    this.props.addMovie({ my_list: { user_id: this.props.userId, movie_id: movie.id } })
    let movies = this.state.movies;
    movies[index] =
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
                onClick={() => this.removeFromList(movie, index)}
              >⊖</p>
              <div
                className="item-play-btn"
                onClick={() => this.handlePlayButton(movie.id)}
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
    this.setState({ movies: movies })
  }

  removeFromList(movie, index) {
    const userId = this.props.userId;
    const movieListId = { user_id: userId, movie_id: movie.id }
    this.props.deleteMovie(movieListId);
    let movies = this.state.movies;
    movies[index] =
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
                onClick={() => this.addToList(movie, index)}
              >⊕</p>
              <div
                className="item-play-btn"
                onClick={() => this.handlePlayButton(movie.id)}
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
    this.setState({ movies: movies })
  }

  searchMovies(){
    const searchResults = this.props.movies.filter(movie => 
      movie.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    const movies = [];

    searchResults.forEach((movie, index) => {
      movies.push(
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
                {this.listButton(movie, index)}
                <div
                  className="item-play-btn"
                  onClick={() => this.handlePlayButton(movie.id)}
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

    this.setState({ movies: movies, searched: true })
  }

  render(){
    let movies;
    if (this.state.movies.length > 0) {
      movies = this.state.movies;
    } else {
      movies = <p>No Results</p>
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
          <div className="search-list">
            {movies}
          </div>         
        </div>
      </div>
    );
  }
}

export default Search;