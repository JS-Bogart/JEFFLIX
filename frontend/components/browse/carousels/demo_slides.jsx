import React from 'react';

class DemoSlides extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: props.currentSliderItem
    };
    this.getMovies = this.getMovies.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentSliderItem !== prevState.currentSliderItem) {
      return { currentSliderItem: nextProps.currentSliderItem };
    }
    else return null;
  }

  shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return(array)
  }

  getMovies() {
    const movies = this.props.movies;
    const genreMovies = [];
    const slideGenre = this.props.genre.genre

    movies.forEach(movie => {
      movie.genres.forEach(genre => {
        if (genre.genre === slideGenre) {
          genreMovies.push(movie);
        }
      })
    })

    const shuffledMovies = this.shuffle(genreMovies);
    return (shuffledMovies.slice(0, 18));
  }

  render() {
    const movieList = this.getMovies();
    const movies = [];

    movieList.forEach((movie, index) => {
      movies.push(
        <div className="slider-item" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="slider-item-info">
            <div className="item-title-play">
              <p>{movie.title}</p>
              <div className="item-play-btn">
                <p className="play-circle">&#11044;</p>
                <p className="play-arrow">▶</p>
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

    return(
      <div className="slider-wrap" slide={this.state.currentSliderItem}>
        {movies}
      </div>
    )
  }
}

export default DemoSlides;