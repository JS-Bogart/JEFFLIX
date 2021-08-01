import React, { useState, useEffect, useRef } from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

const Genre = (props) => {

  const [genreId, setGenreId] = useState(null);
  const [genre, setGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [myListCheck, setMyListCheck] = useState(false);
  const movieRef = useRef();
  movieRef.current = movies;

  useEffect(async () => {
    if (!myListCheck && props.myList.length < 1) {
      await props.getMyList(props.userId);
      setMyListCheck(true);
    }
    if (!genreId || !genre) {
      const { id } = props.match.params;
      const paramsArray = id.split("+");
      const newGenreId = parseInt(paramsArray[1]);
      const newGenre = paramsArray[0];
      setGenreId(newGenreId);
      setGenre(newGenre);
      await props.requestGenreMovies(newGenreId);
    } else if (movies.length < 1) {
      getMovies();
    }
  }, [props.genreMovies])

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }

  const handlePlayButton = (movie) => {
    props.history.push(`/watch/${movie}`);
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

  const getMovies = () => {
    const movieList = shuffle(props.genreMovies);
    const newMovies = [];

    movieList.forEach((movie, index) => {
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
    setMovies(newMovies);
  }

  return (
    <div className="genre-page">
      <Route component={NavbarContainer} />
      <div className="genre-body">
        <div className="genre-title-box">
          <p>Movies</p>
          <p>{">"}</p>
          <h1 className="genre-title">{genre}</h1>
        </div>
        <div className="genre-list">
          {movies}
        </div>
      </div>
    </div>
  );
}

export default Genre;