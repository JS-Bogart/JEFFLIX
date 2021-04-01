import React from 'react';

class Genre extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      genreId: null,
      movies: []
    };
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    const genreId = parseInt(id);
    this.setState({ genreId: genreId})
    this.props.getMyList(this.props.userId);
    this.props.requestGenreMovies(genreId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.genreMovies !== this.props.genreMovies && this.state.movies.length < 1) {
      this.getMovies();
    } else if (prevProps.genreId !== this.props.genreId) {
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
        <div className="genre-item-info">
          <div className="item-title-play">
            <p>{movie.title}</p>
            <div className="item-buttons">
              <p
                className="my-list-btn"
                onClick={() => this.removeFromList(movie, index)}
              >⊖</p>
              <div className="item-play-btn">
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
        <div className="genre-item-info">
          <div className="item-title-play">
            <p>{movie.title}</p>
            <div className="item-buttons">
              <p
                className="my-list-btn"
                onClick={() => this.addToList(movie, index)}
              >⊕</p>
              <div className="item-play-btn">
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

  getMovies() {
    const movieList = this.shuffle(this.props.genreMovies);
    const movies = [];

    movieList.forEach((movie, index) => {
      movies.push(
        <div className="genre-item" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="genre-item-info">
            <div className="item-title-play">
              <p>{movie.title}</p>
              <div className="item-buttons">
                {this.listButton(movie, index)}
                <div className="item-play-btn">
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

  render(){
    return (
      <div className="genre-page">
        <header>
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
        <div className="genre-body">
          <div className="genre-list">
            {this.state.movies}
          </div>
        </div>
      </div>
    );
  }
}

export default Genre;