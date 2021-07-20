import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class MyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    };

    this.removeFromList = this.removeFromList.bind(this);
  }

  componentDidMount() {
    this.props.getMyList(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps) {
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
    // movies.splice(index, 1);
    movies[index] = null;
    this.setState({ movies: movies })
  }

  getList() {
    if (this.state.movies.length > 0) {
      return (
        <div className="my-list-list">
          {this.state.movies}
        </div>
      )
    } else {
      return (
        <p>You haven't added any titles to your list yet.</p>
      )
    }
  }

  render() {
    return (
      <div className="my-list">
        <Route component={NavbarContainer} />
        <div className="my-list-body">
          <h1>My List</h1>
          {this.getList()}
        </div>
      </div>
    );
  }
}

export default MyList;