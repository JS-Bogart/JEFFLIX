import React from 'react';

class DemoSlides extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: props.currentSliderItem
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentSliderItem !== prevState.currentSliderItem) {
      return { currentSliderItem: nextProps.currentSliderItem };
    }
    else return null;
  }

  createMovieList() {
    
  }

  render() {
  
    const movies = [];

    for (let i = 0; i < 18; i++) {
      if (i < 6) {
        movies.push(
          <div className="slider-item" key={i}>
            <img src={window.thepest} alt="thepest" />
            <div className="slider-item-info">
              <div>
                <div className="item-rating">
                  <p>PG-13</p>
                </div>
                <div className="item-genre">
                  <p>Comedy</p>
                </div>
              </div>
              <div className="item-play-btn">
                <p className="play-circle">&#11044;</p>
                <p className="play-arrow">▶</p>
              </div>
            </div>
          </div>
        )
      } else if (i >= 6 && i < 12) {
        movies.push(
          <div className="slider-item" key={i}>
            <img src={window.kindergartencop} alt="kindergartencop" />
            <div className="slider-item-info">
              <div>
                <div className="item-rating">
                  <p>PG-13</p>
                </div>
                <div className="item-genre">
                  <p>Comedy</p>
                </div>
              </div>
              <div className="item-play-btn">
                <p className="play-circle">&#11044;</p>
                <p className="play-arrow">▶</p>
              </div>
            </div>
          </div>
        )
      } else {
        movies.push(
          <div className="slider-item" key={i}>
            <img src={window.surfninjas} alt="surfninjas" />
            <div className="slider-item-info">
              <div>
                <div className="item-rating">
                  <p>PG</p>
                </div>
                <div className="item-genre">
                  <p>Comedy</p>
                </div>
              </div>
              <div className="item-play-btn">
                <p className="play-circle">&#11044;</p>
                <p className="play-arrow">▶</p>
              </div>
            </div>
          </div>
        )
      }
    }

    return(
      <div className="slider-wrap" slide={this.state.currentSliderItem}>
        {movies}
      </div>
    )
  }
}

export default DemoSlides;