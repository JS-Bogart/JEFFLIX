import React from 'react';
import { Arrow } from '../../../util/carousel_util';

class DemoSlider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: 0
    };
  }

  Slides = (num) => {
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
    } else if (num === 1){
      return(
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


  render(){
    return(
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="‹" />

        <Slides num={this.state.currentSliderItem}/>
        
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="›" />
      </div>
    )
  }
}

export default DemoSlider;