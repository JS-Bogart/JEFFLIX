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

  render() {
    return (
      <div className="slider-wrap" slide={this.state.currentSliderItem}>
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
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
      </div>
    )
  }
}

export default DemoSlides;