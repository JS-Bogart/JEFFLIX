import React, { useState } from 'react';
import Arrow from './arrow';
import Slides from './slides';

const Carousel = (props) => {

  const [currentSliderItem, setCurrentSliderItem] = useState(0);

  const previousSlide = () => {
    const lastIndex = 2;
    const shouldResetIndex = currentSliderItem === 0;
    const index = shouldResetIndex ? lastIndex : currentSliderItem - 1;

    setCurrentSliderItem(index);
  }

  const nextSlide = () => {
    const lastIndex = 2;
    const shouldResetIndex = currentSliderItem === lastIndex;
    const index = shouldResetIndex ? 0 : currentSliderItem + 1;

    setCurrentSliderItem(index);
  }

  return(
    <div className="carousel">
      <Arrow
        direction="left"
        clickFunction={previousSlide}
        currentSliderItem={currentSliderItem}
        glyph="‹" />

      <Slides 
        currentSliderItem={currentSliderItem}
        movies={props.movies}
        genre={props.genre}
        addMovie={props.addMovie}
        userId={props.userId}
        myList={props.myList}
        deleteMovie={props.deleteMovie}
        handlePlayButton={props.handlePlayButton}
      />

      <Arrow
        direction="right"
        clickFunction={nextSlide}
        currentSliderItem={currentSliderItem}
        glyph="›" />
    </div>
  )
}

export default Carousel;