import React from 'react';

const Arrow = ({ direction, clickFunction, currentSliderItem, glyph }) => (
  <div
    slide={currentSliderItem}
    className={`slide-arrow-${direction}`}
    onClick={clickFunction}>
    {glyph}
  </div>
);

export default Arrow;