import React from 'react';

class Billboard extends React.Component{
  constructor(props){
    super(props);

  }

  // unMute(){

  // }

  render(){
    return(
      <div className="billboard">
        <img src={window.flashgordonimg} alt="flashgordonimg" />
        <video
          // ref={billboardRef}
          src={window.flashgordon}
          autoPlay={true}
          muted />
        <p>A football player and his friends travel to the planet Mongo and find themselves fighting the tyranny of Ming the Merciless to save Earth.</p>
      </div>
    )
  }
}

export default Billboard;