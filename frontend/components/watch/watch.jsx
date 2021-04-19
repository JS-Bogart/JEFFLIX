import React from 'react';

class Watch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieId: null,
      movie: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const movieId = parseInt(id);
    this.setState({
      movieId: movieId
    });
    if (this.props.movies.length < 1) {
      this.props.requestMovie(movieId);
    } else if (this.props.movies.length > 0) {
      let currentMovie;
      this.props.movies.forEach(movie => {
        if (movie.id === movieId) {
          currentMovie = movie;
        }
      })
      this.setState({
        movie: <video
          id="video"
          controls
          preload="metadata"
          src={currentMovie.videoUrl}
          type="video/mp4"
          // autoPlay={true}
          // muted
        />
      });
    }
  }

  componentDidUpdate(prevProps){
    let currentMovie;
    this.props.movies.forEach(movie => {
      if (movie.id === this.state.movieId){
        currentMovie = movie;
      }
    })
    if (prevProps.movies !== this.props.movies){
      this.setState({
        movie: <video
          id="video"
          controls
          preload="metadata"
          src={currentMovie.videoUrl}
          type="video/mp4"
          // autoPlay={true}
          // muted
        />
      });
    }
    if (this.state.movie) {
      const videoContainer = document.getElementById('videoContainer');
      this.video = document.getElementById('video');
      const video = document.getElementById('video');
      video.controls = false;
      const progress = document.getElementById('progress');
      const progressBar = document.getElementById('progress-bar');
      const fullscreen = document.getElementById('fs');

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
        if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
        progress.value = video.currentTime;
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
  }

  pauseButton(){
    if (this.video.paused) this.video.play();
    else this.video.pause();
  }

  muteButton(){
    this.video.muted = !this.video.muted;
  }

  render() {
    return (
      <div id="videoContainer">
        {this.state.movie}
        <ul id="video-controls" className="controls">
          <li>
            <button
              id="playpause"
              type="button"
              onClick={() => this.pauseButton()}
            >
              Play/Pause
            </button>
          </li>
          <li className="progress">
            <progress id="progress" value="0" min="0">
              <span id="progress-bar"></span>
            </progress>
          </li>
          <li><button id="mute" type="button" onClick={() => this.muteButton()}>Mute/Unmute</button></li>
          <li><button id="fs" type="button">Fullscreen</button></li>
        </ul>
      </div>
    )
  }
}

export default Watch;