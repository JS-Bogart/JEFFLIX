import React from 'react';
import BrowseItem from './browse_item';

class Browse extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestAllMovies()
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
          <div className="billboard"></div>
          <div className="browse-row">
            <h2>Popular on Jefflix</h2>
            <ul>
              {this.props.movies.map((movie) => (
                <BrowseItem key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
          <div className="browse-row">
            <h2>Trending Now</h2>
            <ul>
              {this.props.movies.map((movie) => (
                <BrowseItem key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
          <div className="browse-row">
            <h2>New Releases</h2>
            <ul>
              {this.props.movies.map((movie) => (
                <BrowseItem key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
          <div className="browse-row">
            <h2>Hidden Gems For You</h2>
            <ul>
              {this.props.movies.map((movie) => (
                <BrowseItem key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
          <div className="browse-row">
            <h2>Watch It Again</h2>
            <ul>
              {this.props.movies.map((movie) => (
                <BrowseItem key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Browse;