import React, { useState, useEffect } from 'react';

const Watch = (props) => {

  const [movie, setMovie] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  const [playpause, setPlaypause] = useState("❙❙");
  const [mute, setMute] = useState(<p>&#x1f50a;</p>);

  useEffect(async () => {
    const { id } = props.match.params;
    const movieId = parseInt(id);
    if (props.movies.length < 1) {
      props.requestMovie(movieId);
    } else if (props.movies.length > 0 && !movie) {
      let currentMovie;
      props.movies.forEach(movie => {
        if (movie.id === movieId) {
          currentMovie = movie;
        }
      })
      setMovie(<video
        id="video"
        controls
        preload="metadata"
        src={currentMovie.videoUrl}
        type="video/mp4"
        autoPlay={true}
      />);
      setMovieTitle(currentMovie.title)
    }

    if (movie) {
      debugger
      const videoContainer = document.getElementById('videoContainer');
      const video = document.getElementById('video');
      video.controls = false;
      const progress = document.getElementById('progress');
      const progressBar = document.getElementById('progress-bar');
      const fullscreen = document.getElementById('fs');
      const timer = document.getElementById("timer");

      const isFullScreen = function () {
        return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
      }

      const setFullscreenData = function (state) {
        videoContainer.setAttribute('data-fullscreen', !!state);
      }

      const handleFullscreen = function () {
        if (isFullScreen()) {
          if (document.exitFullscreen) document.exitFullscreen();
          else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
          else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
          else if (document.msExitFullscreen) document.msExitFullscreen();
          setFullscreenData(false);
        }
        else {
          if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
          else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
          else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
          else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
          setFullscreenData(true);
        }
      }

      video.addEventListener('loadedmetadata', function () {
        progress.setAttribute('max', video.duration);
      });
      video.addEventListener('timeupdate', function () {
        const timeLeft = Math.round(video.duration - video.currentTime)
        let time;
        if (timeLeft % 60 >= 10) {
          time = `${Math.round(timeLeft / 60)}:${timeLeft % 60}`
        } else {
          time = `${Math.round(timeLeft / 60)}:${0}${timeLeft % 60}`
        }

        if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
        progress.value = video.currentTime;
        timer.innerHTML = time;
        progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
      });
      progress.addEventListener('click', function (e) {
        const pos = (e.pageX - this.offsetLeft) / this.offsetWidth;
        video.currentTime = pos * video.duration;
      });
      fullscreen.addEventListener('click', function (e) {
        handleFullscreen();
      });
    }
  }, [props.movies, movie])

  const pauseButton = () => {
    if (video.paused) {
      video.play();
      setPlaypause("❙❙");
    } else {
      video.pause();
      setPlaypause("▶")
    }
  }

  const muteButton = () => {
    video.muted = !video.muted;
    if (video.muted) {
      setMute(<p>&#x1f507;</p>);
    } else {
      setMute(<p>&#x1f50a;</p>);
    }
  }

  const handleBackButton = () => {
    props.history.push(`/browse`);
  }


  return (
    <div id="videoContainer">
      <div className="back-box">
        <div 
          className="back-btn"
          onClick={() => handleBackButton()}
        >
          <p className="back-arrow">←</p>
          <p
            className="back-msg"
          >Back to Browse</p>
        </div>
      </div>
      {movie}
      <div className="controls-box">
        <div id="video-controls" className="controls">
          <li className="progress">
            <progress id="progress" value="0" min="0">
              <span id="progress-bar"></span>
            </progress>
            <label id="timer"></label>
          </li>
          <div id="control-buttons">
            <div className="cb-left">
              <div
                id="playpause"
                onClick={() => pauseButton()}
              >
                {playpause}
              </div>
              <div
                id="mute" 
                onClick={() => muteButton()}
              >
                {mute}
              </div>
              <div
                id="watch-movie-title"
              >
                {movieTitle}
              </div>
            </div>
            <div
              id="fs" 
            >
              ❏
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch;