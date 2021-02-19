![alt text](https://github.com/JS-Bogart/JEFFLIX/blob/main/app/assets/images/splashlogo.png?raw=true "Jefflix Logo")

# JEFFLIX
[JEFFLIX](https://jefflixfsp.herokuapp.com/#/) is a web-based app for browsing and watching movie trailers of the greatest films ever created.

## Demo:
The live working demo can be found here: [https://jefflixfsp.herokuapp.com/#/](https://jefflixfsp.herokuapp.com/#/)

## Site:
### Splash Page
The splash page is the first page a user arrives at. It has options to sign in, or begind the signup process.
![alt text](https://github.com/JS-Bogart/JEFFLIX/blob/main/app/assets/images/readme_images/splash.png?raw=true)

### Signup Page
The signup page allows users to create a new account. Errors will render if the user enters an email that is taken, or if their password is too short.
![alt text](https://github.com/JS-Bogart/JEFFLIX/blob/main/app/assets/images/readme_images/signup.png?raw=true)

### Signin Page
The signin page allows users to login to their account. Errors will render if the user enters incorrect login information.
![alt text](https://github.com/JS-Bogart/JEFFLIX/blob/main/app/assets/images/readme_images/login.png?raw=true)

### Browse Page
The browse page will autoplay a film trailer upon rendering. The page displays films which are grouped by genres and suggestions on carousels that the user can swipe through. The user can also logout from this page.
![alt text](https://github.com/JS-Bogart/JEFFLIX/blob/main/app/assets/images/readme_images/browse.png?raw=true)

## Featured Code:
### Mute/Unmute Button
Chrome doesn't allow autoplay videos to play with sound, and not everyone wants to listen to a trailer when browsing movies. For those who do want sound, there is a mute/unmute button!

The mute button was created using a ref to the video on the browse page. When the mute button is clicked, it will mute or unmute depending on the current mute status of the video. This also triggers the change in appearance of the mute button by changing the state to reflect the current mute status, which is muted by default.

```
class Billboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      muteButton: "muted"
    }
    this.billboardRef = React.createRef();
    this.unMute = this.unMute.bind(this);
  }

  unMute(){
    this.billboardRef.current.muted = !this.billboardRef.current.muted;
    if (this.state.muteButton === "unmuted") {
      this.setState({ muteButton: "muted" });
    } else {
      this.setState({ muteButton: "unmuted" });
    }
  }

  render(){
    let muteButton;
    if (this.state.muteButton === "unmuted"){
      muteButton = <p>&#x1f50a;</p>
    } else {
      muteButton = <p>&#x1f507;</p>
    }
    return(
      <video
          ref={this.billboardRef}
          src={window.flashgordon}
          autoPlay={true}
          muted />
      <div className="billboard-mute-btn" onClick={this.unMute}>
        {muteButton}
      </div>
    )
  }
}
```

### Movie Carousel
JEFFLIX displays movies on carousels organized into genres and suggestions for users to browse through. The items on the carousels can cycled through using left and right arrow buttons.

The carousel component has three important features: the previous slide arrow button, the next slide arrow button, and the rendered slides component. The arrow buttons change the state to reflect which section of the carousel should currently be displayed. This feature of the arrow buttons is handled by the previousSlide and nextSlide functions. That information is then passed to the slides as props, where it is used to provide information for CSS animations. The CSS transition and transform properties are used to slide the carousel from one section to another.

```
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
------------------------------------------------------------------
const Arrow = ({ direction, clickFunction, currentSliderItem, glyph }) => (
  <div
    slide={currentSliderItem}
    className={`slide-arrow-${direction}`}
    onClick={clickFunction}>
    {glyph}
  </div>
);
------------------------------------------------------------------
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
          ...
        </div>
        ...
      </div>
    )
  }
}
------------------------------------------------------------------
.slider-wrap[slide='0'] {
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  transform: translate(112.1rem);
}
```

## To-do:
+ Add fullscreen watch pages
+ Add genre pages
+ Add a MyList feature which allows the user to save a list of movies to watch later
+ Add a search feature