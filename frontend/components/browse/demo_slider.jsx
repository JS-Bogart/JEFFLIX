import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class DemoSlider extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      // <div className="slider">
      //   <section id="section1">
      //     <a href="#section3">‹</a>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <a href="#section2">›</a>
      //   </section>
      //   <section id="section2">
      //     <a href="#section1">‹</a>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <a href="#section3">›</a>
      //   </section>
      //   <section id="section3">
      //     <a href="#section2">‹</a>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <div className="slider-item">
      //       <img src={window.thepest} alt="thepest" />
      //     </div>
      //     <a href="#section1">›</a>
      //   </section>
      // </div>

      <Carousel interval={null}>
        <Carousel.Item>
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
        </Carousel.Item>
        <Carousel.Item>
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
        </Carousel.Item>
        <Carousel.Item>
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
          {/* <p>‹›</p> */}
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default DemoSlider;