import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Genre extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      genreId: null,
      genre: null,
      searchTerm: '',
      searching: false,
      movies: []
    };
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    const paramsArray = id.split("+");
    const genreId = parseInt(paramsArray[1]);
    const genre = paramsArray[0];
    this.setState({ 
      genreId: genreId,
      genre: genre
    });
    this.props.requestGenreMovies(genreId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.genreMovies !== this.props.genreMovies 
      && this.state.movies.length < 1){
      this.getMovies();
      this.props.getMyList(this.props.userId);
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

  getMovies() {
    const movieList = this.shuffle(this.props.genreMovies);
    const movies = [];

    movieList.forEach((movie, index) => {
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

    this.setState({ movies: movies })
  }

  render(){
    return (
      <div className="genre-page">
        <Route component={NavbarContainer} />
        <div className="genre-body">
          <div className="genre-title-box">
            <p>Movies</p>
            <p>{">"}</p>
            <h1 className="genre-title">{this.state.genre}</h1>
          </div>
          <div className="genre-list">
            {this.state.movies}
          </div>
        </div>
      </div>
    );
  }
}

export default Genre;