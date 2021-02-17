import React from 'react';

class DemoSlider extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="carousel">
        <div className="carousel-item">
          <div className="slider-wrap">
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slider-wrap">
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slider-wrap">
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
            <div className="slider-item">
              <img src={window.thepest} alt="thepest" />
            </div>
          </div>
          {/* <p>‹›</p> */}
        </div>
      </div>
    )
  }
}

export default DemoSlider;