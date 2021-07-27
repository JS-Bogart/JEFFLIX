import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Carousel from './carousels/carousel';
import Billboard from './billboard';

const Browse = (props) => {qqq

  const [genres, setGenres] = useState([]);
  const [genresLoaded, setGenresLoaded] = useState(false);
  const [listLoaded, setListLoaded] = useState(false);

  // componentDidMount(){
  //   if (this.props.movies.length < 2) {
  //     this.props.requestAllMovies();
  //   }
  //   if (this.props.genres.length < 1) {
  //     this.props.requestAllGenres();
  //   }
  //   this.props.getMyList(this.props.currentUser.id);
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.genres !== this.props.genres || prevProps.movies !== this.props.movies) {
  //     this.setState({
  //       genresLoaded: false
  //     });
  //     this.loadGenres();
  //   }
  // }

  useEffect(() => {
    const moviesPresent = props.movies.length > 1;
    const genresPresent = props.genres.length > 0;
    if (props.movies.length < 2) {
      props.requestAllMovies();
    }
    if (props.genres.length < 1) {
      props.requestAllGenres();
    }
    if (!listLoaded) {
      props.getMyList(props.currentUser.id);
      setListLoaded(true);
    }
    if (moviesPresent && genresPresent) {
      setGenresLoaded(false);
      loadGenres();
    }
  }, [props.movies, props.genres])

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }

  const loadGenres = () => {
    if (!genresLoaded && props.movies.length > 1) {
      const shuffledGenres = shuffle(props.genres);
      setGenres(shuffledGenres);
      setGenresLoaded(true);
    }
  }

  const handlePlayButton = (movie) => {
    props.history.push(`/watch/${movie}`);
  }

  const getGenres = () => {
    if (props.movies.length > 0) {
      return (
        <div className="browse-genre-rows">
          {genres.map((genre, index) => (
            <div className="browse-row" key={index}>
              <h2>{genre.genre}</h2>
              <Carousel
                movies={props.movies}
                genre={genre}
                addMovie={props.addMovie}
                userId={props.currentUser.id}
                myList={props.myList}
                deleteMovie={props.deleteMovie}
                handlePlayButton={handlePlayButton}
              />
            </div>
          ))}
        </div>
      )
    }
  }

  const getGenreList = () => {
    if (genres.length) {
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
              {getGenreList()}
            </div>
          </div>
        </div>
        <Billboard/>
        {getGenres()}
        <footer></footer>
      </div>
    </div>
  );
};

export default Browse;