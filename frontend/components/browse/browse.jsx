import React from 'react';
import Carousel from './carousels/carousel';
import Billboard from './billboard';

class Browse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genresLoaded: false,
      searchTerm: '',
      searching: false,
      genres: []
    };
    this.getGenreList = this.getGenreList.bind(this);
    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.debounce = this.debounce.bind(this);
    this.handleUpdate = this.debounce(this.handleUpdate.bind(this), 500);
  }

  componentDidMount(){
    if (this.props.movies.length < 2) {
      this.props.requestAllMovies();
    }
    if (this.props.genres.length < 1) {
      this.props.requestAllGenres();
    }
    this.props.getMyList(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.genres !== this.props.genres || prevProps.movies !== this.props.movies) {
      this.setState({
        genresLoaded: false
      });
      this.loadGenres();
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }

  loadGenres() {
    if (!this.state.genresLoaded && this.props.movies.length > 1) {
      const genres = this.shuffle(this.props.genres);
      this.setState({ 
        genresLoaded: true, 
        genres: genres
      });
    }
  }

  handlePlayButton(movie) {
    this.props.history.push(`/watch/${movie}`);
  }

  getGenres() {
    const genres = this.state.genres;
    if (this.props.movies.length > 0) {
      return (
        <div className="browse-genre-rows">
          {genres.map((genre, index) => (
            <div className="browse-row" key={index}>
              <h2>{genre.genre}</h2>
              <Carousel
                movies={this.props.movies}
                genre={genre}
                addMovie={this.props.addMovie}
                userId={this.props.currentUser.id}
                myList={this.props.myList}
                deleteMovie={this.props.deleteMovie}
                handlePlayButton={this.handlePlayButton}
              />
            </div>
          ))}
        </div>
      )
    }
  }

  getGenreList(){
    const genres = this.state.genres;
    if (this.state.genres.length) {
      return(
        <ul className="browse-genre-list">
          {genres.map((genre, index) => (
            <a href={`/#/browse/genre/${genre.genre}+${genre.id}`} key={index}>
              {genre.genre}
            </a>
          ))}
        </ul>
      )
    }
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
      this.setState({ [field]: e.currentTarget.value})
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
    return (
      <div className="browse">
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
        <div className="browse-body">
          <div className="browse-title">
            <h1>Movies</h1>
            <div className="genre-menu">
              <div className="genre-menu-title">
                <p>Genres</p>
                <p>&#x25BE;</p>
              </div>
              <div className="genre-dropdown">
                {this.getGenreList()}
              </div>
            </div>
          </div>
          <Billboard/>
          {this.getGenres()}
          <footer></footer>
        </div>
      </div>
    );
  }
};

export default Browse;