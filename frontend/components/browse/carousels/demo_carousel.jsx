import React from 'react';
import Arrow from './arrow';
import DemoSlides from './demo_slides';

class DemoCarousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: 0
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = 2;
    const { currentSliderItem } = this.state;
    const shouldResetIndex = currentSliderItem === 0;
    const index = shouldResetIndex ? lastIndex : currentSliderItem - 1;

    this.setState({
      currentSliderItem: index
    });
  }

  nextSlide() {
    const lastIndex = 2;
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
          currentSliderItem={this.state.currentSliderItem}
          glyph="‹" />

        <DemoSlides 
          currentSliderItem={this.state.currentSliderItem}
          movies={this.props.movies}
          genre={this.props.genre}
          addMovie={this.props.addMovie}
          userId={this.props.userId}
        />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          currentSliderItem={this.state.currentSliderItem}
          glyph="›" />
      </div>
    )
  }
}

export default DemoCarousel;