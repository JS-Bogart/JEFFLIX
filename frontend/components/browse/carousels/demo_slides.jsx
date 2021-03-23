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

    return(genreMovies.slice(0, 18));

  }

  render() {
    const movieList = this.getMovies();
    console.log(movieList);

    const movies = [];

    movieList.forEach((movie, index) => {
      movies.push(
        <div className="slider-item" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="slider-item-info">
            <div>
              <div className="item-rating">
                <p>{movie.year}</p>
              </div>
              <div className="item-genre">
                {movie.genres.map(genre => {
                  <p>{genre}</p>
                })}
              </div>
            </div>
            <div className="item-play-btn">
              <p className="play-circle">&#11044;</p>
              <p className="play-arrow">▶</p>
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