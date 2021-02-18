import React from 'react';
import Arrow from './arrow';
import DemoSlides from './demo_slides';

class DemoCarousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: 0
    };
  }

  previousSlide() {
    const lastIndex = 3;
    const { currentSliderItem } = this.state;
    const shouldResetIndex = currentSliderItem === 0;
    const index = shouldResetIndex ? lastIndex : currentSliderItem - 1;

    this.setState({
      currentSliderItem: index
    });
  }

  nextSlide() {
    const lastIndex = 3;
    const { currentSliderItem } = this.state;
    const shouldResetIndex = currentSliderItem === lastIndex;
    const index = shouldResetIndex ? 0 : currentSliderItem + 1;

    this.setState({
      currentSliderItem: index
    });
  }

  render(){
    return(
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="‹" />

        <DemoSlides num={this.state.currentSliderItem}/>
        
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="›" />
      </div>
    )
  }
}

export default DemoCarousel;