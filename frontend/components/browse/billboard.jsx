import React from 'react';

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
      <div className="billboard">
        <div className="browse-title-box">
          <img src={window.flashgordonimg} alt="flashgordonimg" />
          <p>A football player and his friends travel to the planet Mongo and find themselves fighting the tyranny of Ming the Merciless to save Earth.</p>
        </div>
        <div className="browse-rating-box">
          <div className="billboard-mute-btn" onClick={this.unMute}>
            {muteButton}
          </div>
          <p id="bb-rating">PG</p>
        </div>
        <video
          ref={this.billboardRef}
          src={window.flashgordon}
          autoPlay={true}
          muted 
        />
      </div>
    )
  }
}

export default Billboard;