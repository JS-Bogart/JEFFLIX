import React from 'react';
import DemoCarousel from './carousels/demo_carousel';

class Browse extends React.Component {
  constructor(props){
    super(props);
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
          <div className="billboard">
            <img src={window.flashgordonimg} alt="flashgordonimg"/>
            <video src={window.flashgordon} autoPlay={true} muted />
            <p>A football player and his friends travel to the planet Mongo and find themselves fighting the tyranny of Ming the Merciless to save Earth.</p>
          </div>
          <div className="browse-genre-rows">
            <div className="browse-row">
              <h2>Popular on Jefflix</h2>
              <DemoCarousel movies={this.props.movies} props={this.props}/>
            </div>
            <div className="browse-row">
              <h2>Trending Now</h2>
              <DemoCarousel movies={this.props.movies} props={this.props} />
            </div>
            <div className="browse-row">
              <h2>New Releases</h2>
              <DemoCarousel movies={this.props.movies} props={this.props} />
            </div>
            <div className="browse-row">
              <h2>Hidden Gems For You</h2>
              <DemoCarousel movies={this.props.movies} props={this.props} />
            </div>
            <div className="browse-row">
              <h2>Watch It Again</h2>
              <DemoCarousel movies={this.props.movies} props={this.props} />
            </div>
          </div>
          <footer></footer>
        </div>
      </div>
    );
  }
};

export default Browse;