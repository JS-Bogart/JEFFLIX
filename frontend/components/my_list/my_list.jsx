import React from 'react';

class MyList extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getMyList(this.props.currentUser.id);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }

  getMovies() {
    const movieList = this.shuffle(this.props.myList);
    const movies = [];

    movieList.forEach((movie, index) => {
      movies.push(
        <div className="my-list-item" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="my-list-item-info">
            <div className="item-title-play">
              <p>{movie.title}</p>
              <div className="item-buttons">
                <p className="my-list-btn" onClick={() => this.addToList(movie.id)}>⊕</p>
                <div className="item-play-btn">
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
    
    return(movies);
  }

  render() {
    return (
      <div className="my-list">
        <header>
          <a
            href="/#/browse"
            className="logo-browse-link"
          >
            <img src={window.browselogo} alt="browselogo" />
          </a>
          <div className="navbar-links">
            <a
              href="/#/browse"
              className="home-link"
            >
              Home
            </a>
            <a
              href="/#/browse/my-list"
              className="home-link"
            >
              My List
            </a>
          </div>
          <div className="browse-icon">
            <img src={window.profilepic} alt="profilepic" className="profilepic" />
            <span>&#x25BE;</span>
            <div className="logout-dropdown">
              <span>&#x25B4;</span>
              <div>
                <a
                  onClick={this.props.logout}
                  href="/#/login"
                  className="logout-link"
                >
                  Sign out of Jefflix
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="my-list-body">
          <div className="my-list-list">
            {this.getMovies()}
          </div>
        </div>
      </div>
    );
  }
}

export default MyList;