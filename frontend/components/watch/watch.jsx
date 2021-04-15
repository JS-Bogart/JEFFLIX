import React from 'react';

class Watch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieId: null,
      movie: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const movieId = parseInt(id);
    this.setState({
      movieId: movieId
    });
    if (this.props.movies.length < 1) {
      this.props.requestMovie(movieId);
    } else if (this.props.movies.length > 0) {
      let currentMovie;
      this.props.movies.forEach(movie => {
        if (movie.id === movieId) {
          currentMovie = movie;
        }
      })
      this.setState({
        movie: <video
          src={currentMovie.videoUrl}
          autoPlay={true}
          muted
        />
      });
    }
  }

  componentDidUpdate(prevProps){
    let currentMovie;
    this.props.movies.forEach(movie => {
      if (movie.id === this.state.movieId){
        currentMovie = movie;
      }
    })
    if (prevProps.movies !== this.props.movies){
      this.setState({
        movie: <video
          src={currentMovie.videoUrl}
          autoPlay={true}
          muted
        />
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.movie}
      </div>
    )
  }
}

export default Watch;