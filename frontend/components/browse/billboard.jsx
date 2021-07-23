import React, { useState, useEffect } from 'react';

const Billboard = () => {

  const [muted, setMuted] = useState(true);
  const [muteButton, setMuteButton] = useState(<p>&#x1f507;</p>);
  const billboardRef = React.createRef();

  useEffect(() => {
    if (!muted) {
      setMuteButton(<p>&#x1f50a;</p>);
    } else {
      setMuteButton(<p>&#x1f507;</p>);
    }
  }, [muted])

  const unMute = () => {
    billboardRef.current.muted = !billboardRef.current.muted;
    if (muted) {
      setMuted(false);
    } else {
      setMuted(true);
    }
  }

  return(
    <div className="billboard">
      <div className="browse-title-box">
        <img src={window.flashgordonimg} alt="flashgordonimg" />
        <p>A football player and his friends travel to the planet Mongo and find themselves fighting the tyranny of Ming the Merciless to save Earth.</p>
      </div>
      <div className="browse-rating-box">
        <div className="billboard-mute-btn" onClick={unMute}>
          {muteButton}
        </div>
        <p id="bb-rating">PG</p>
      </div>
      <video
        ref={billboardRef}
        src={'https://jefflix-seeds.s3-us-west-1.amazonaws.com/trailers/flash_gordon.mp4'}
        autoPlay={true}
        muted 
      />
    </div>
  )
}

export default Billboard;