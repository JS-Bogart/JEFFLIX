import React, { useState, useEffect, useRef } from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

const MyList = (props) => {

  const [movies, setMovies] = useState(<p>You haven't added any titles to your list yet.</p>);
  const [moviesRequested, setMoviesRequested] = useState(false);
  const [moviesLoaded, setMoviesLoaded] = useState(false);
  const movieRef = useRef();
  movieRef.current = movies;

  useEffect(async () => {
    if (!moviesRequested && props.myList.length < 1) {
      await props.getMyList(props.currentUser.id);
      setMoviesRequested(true);
    } else if (!moviesLoaded) {
      getMovies();
      setMoviesLoaded(true);
    }
  }, [props.myList, movies])

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

  const getMovies = () => {
    const movieList = shuffle(props.myList);
    const newMovies = [];

    movieList.forEach((movie, index) => {
      newMovies.push(
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
                  () => removeFromList(movie, index)
                }>⊖</p>
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

  const removeFromList = (movie, index) => {
    const userId = props.currentUser.id;
    const movieListId = { user_id: userId, movie_id: movie.id }
    props.deleteMovie(movieListId);
    const newMovies = movieRef.current.map(listMovie => listMovie);
    newMovies[index] = null;
    setMovies(newMovies);
  }

  return (
    <div className="my-list">
      <Route component={NavbarContainer} />
      <div className="my-list-body">
        <h1>My List</h1>
        <div className="my-list-list">
          {movies}
        </div>
      </div>
    </div>
  );
}

export default MyList;