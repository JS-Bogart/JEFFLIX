import React, { useState, useEffect, useRef } from 'react';

const Slides = (props) => {

  const [currentSliderItem, setCurrentSliderItem] = useState(props.currentSliderItem);
  const [movies, setMovies] = useState([]);
  const [sliderBuilt, setSliderBuilt] = useState(false);
  const movieRef = useRef();
  movieRef.current = movies;

  useEffect(() => {
    if (!sliderBuilt) {
      buildSlide();
      setSliderBuilt(true);
    }
    setCurrentSliderItem(props.currentSliderItem);
  }, [props.currentSliderItem])

  const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return(array)
  }

  const getMovies = () => {
    const sliderMovies = props.movies;
    const genreMovies = [];
    const slideGenre = props.genre.genre

    sliderMovies.forEach(movie => {
      movie.genres.forEach(genre => {
        if (genre.genre === slideGenre) {
          genreMovies.push(movie);
        }
      })
    })

    const shuffledMovies = shuffle(genreMovies);
    return (shuffledMovies.slice(0, 18));
  }

  const addToList = (movie, index) => {
    props.addMovie({ my_list: {user_id: props.userId, movie_id: movie.id} })
    const listMovies = movieRef.current.map(movie => movie);
    listMovies[index] =
      <div className="slider-item" key={index}>
        <img src={movie.imageUrl} alt={movie.title} />
        <div className="slider-video-wrap">
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
        <div className="slider-item-info">
          <div className="item-title-play">
            <p>{movie.title}</p>
            <div className="item-buttons">
              <p
                className="my-list-btn"
                onClick={() => removeFromList(movie, index)}
              >⊖</p>
              <div
                className="item-play-btn"
                onClick={() => props.handlePlayButton(movie.id)}
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
    setMovies(listMovies);
  }

  const removeFromList = (movie, index) => {
    const userId = props.userId;
    const movieListId = { user_id: userId, movie_id: movie.id }
    props.deleteMovie(movieListId);
    const listMovies = movieRef.current.map(movie => movie);
    listMovies[index] =
      <div className="slider-item" key={index}>
        <img src={movie.imageUrl} alt={movie.title} />
        <div className="slider-video-wrap">
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
        <div className="slider-item-info">
          <div className="item-title-play">
            <p>{movie.title}</p>
            <div className="item-buttons">
              <p
                className="my-list-btn"
                onClick={() => addToList(movie, index)}
              >⊕</p>
              <div
                className="item-play-btn"
                onClick={() => props.handlePlayButton(movie.id)}
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
    setMovies(listMovies);
  }

  const listButton = (movie, index) => {
    const myList = props.myList;
    const movieId =  movie.id;
    let check = false;
    myList.forEach(movie => {
      if (movie.id === movieId) {
        check = true;
      }
    })
    if (check) {
      return(
        <p 
          className="my-list-btn" 
          onClick={() => removeFromList(movie, index)}
        >⊖</p>
      )
    } else {
      return(
        <p 
          className="my-list-btn" 
          onClick={() => addToList(movie, index)}
        >⊕</p>
      )
    }
  }

  const buildSlide = () => {
    const movieList = getMovies();
    const sliderMovies = [];

    movieList.forEach((movie, index) => {
      sliderMovies.push(
        <div className="slider-item" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="slider-video-wrap">
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
          <div className="slider-item-info">
            <div className="item-title-play">
              <p>{movie.title}</p>
              <div className="item-buttons">
                {listButton(movie, index)}
                <div 
                  className="item-play-btn"
                  onClick={() => props.handlePlayButton(movie.id)}
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
    setMovies(sliderMovies);
  }

  return(
    <div className="slider-wrap" slide={currentSliderItem}>
      {movies}
    </div>
  )
}

export default Slides;