import React from 'react';

class MyList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      searching: false,
      movies: []
    };

    this.removeFromList = this.removeFromList.bind(this);
  }

  componentDidMount(){
    this.props.getMyList(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps){
    if (prevProps.myList !== this.props.myList && this.state.movies.length < 1) {
      this.getMovies();
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }

  handlePlayButton(movie) {
    this.props.history.push(`/watch/${movie}`);
  }

  getMovies() {
    const movieList = this.shuffle(this.props.myList);
    const movies = [];

    movieList.forEach((movie, index) => {
      movies.push(
        <div className="my-list-item" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="my-list-video-wrap">
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
          <div className="my-list-item-info">
            <div className="item-title-play">
              <p>{movie.title}</p>
              <div className="item-buttons">
                <p className="my-list-btn" onClick={
                  () => this.removeFromList(movie, index)
                }>⊖</p>
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
    
    this.setState({ movies: movies })
  }

  removeFromList(movie, index) {
    const userId = this.props.currentUser.id;
    const movieListId = { user_id: userId, movie_id: movie.id }
    this.props.deleteMovie(movieListId);
    let movies = this.state.movies;
    movies.splice(index, 1);
    this.setState({ movies: movies })
  }

  getList() {
    if (this.state.movies.length > 0) {
      return(
        <div className="my-list-list">
          {this.state.movies}
        </div>
      )
    } else {
      return(
        <p>You haven't added any titles to your list yet.</p>
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
      return (
        <p onClick={() => this.changeSearchStatus()}>&#128269;</p>
      );
    }
  }

  render() {
    return (
      <div className="my-list">
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
        <div className="my-list-body">
          <h1>My List</h1>
          {this.getList()}
        </div>
      </div>
    );
  }
}

export default MyList;