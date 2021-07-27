import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Carousel from './carousels/carousel';
import Billboard from './billboard';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genresLoaded: false,
      genres: []
    };
    this.getGenreList = this.getGenreList.bind(this);
    this.handlePlayButton = this.handlePlayButton.bind(this);
  }

  componentDidMount() {
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

  getGenreList() {
    const genres = this.state.genres;
    if (this.state.genres.length) {
      return (
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

  render() {
    return (
      <div className="browse">
        <Route component={NavbarContainer} />
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
          <Billboard />
          {this.getGenres()}
          <footer></footer>
        </div>
      </div>
    );
  }
};

export default Browse;