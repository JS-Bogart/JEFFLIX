import React from 'react';
import DemoCarousel from './carousels/demo_carousel';
import Billboard from './billboard';

class Browse extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllMovies();
    this.props.requestAllGenres();
    this.props.getMyList(this.props.currentUser.id);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }

  getGenres() {
    const genres = this.shuffle(this.props.genres);
    if (genres[0] && this.props.movies.length > 0) {
      return (
        <div className="browse-genre-rows">
          {genres.map((genre, index) => (
            <div className="browse-row" key={index}>
              <h2>{genre.genre}</h2>
              <DemoCarousel
                movies={this.props.movies}
                genre={genre}
                addMovie={this.props.addMovie}
                userId={this.props.currentUser.id}
                myList={this.props.myList}
                deleteMovie={this.props.deleteMovie}
              />
            </div>
          ))}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="browse">
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
            <img src={window.profilepic} alt="profilepic" className="profilepic"/>
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
        <div className="browse-body">
          <Billboard/>
          {this.getGenres()}
          <footer></footer>
        </div>
      </div>
    );
  }
};

export default Browse;