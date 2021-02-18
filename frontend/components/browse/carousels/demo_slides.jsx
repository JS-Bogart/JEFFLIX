import React from 'react';

const DemoSlides = (num) => {
  if (num === 0) {
    return (
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
    )
  } else if (num === 1) {
    return (
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
    )
  } else {
    return (
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
    )
  }
}

export default DemoSlides;