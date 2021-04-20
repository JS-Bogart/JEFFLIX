import React from 'react';

class Watch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieId: null,
      movie: null,
      movieTitle: "",
      playpause: "▶",
      mute: <p>&#x1f50a;</p>,
      time: ""
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
        />,
        movieTitle: currentMovie.title
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
        />,
        movieTitle: currentMovie.title
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
  }

  pauseButton(){
    if (this.video.paused) {
      this.video.play();
      this.setState({
        playpause: "❙❙"
      })
    } else {
      this.video.pause();
      this.setState({
        playpause: "▶"
      })
    }
  }

  muteButton(){
    this.video.muted = !this.video.muted;
    if (this.video.muted) {
      this.setState({
        mute: <p>&#x1f507;</p>
      })
    } else {
      this.setState({
        mute: <p>&#x1f50a;</p>
      })
    }
  }

  handleBackButton() {
    this.props.history.push(`/browse`);
  }

  render() {
    return (
      <div id="videoContainer">
        <div className="back-box">
          <div className="back-btn">
            <p
              className="back-arrow"
              onClick={() => this.handleBackButton()}
            >←</p>
            <p
              className="back-msg"
            >Back to Browse</p>
          </div>
        </div>
        {this.state.movie}
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
                  onClick={() => this.pauseButton()}
                >
                  {this.state.playpause}
                </div>
                <div
                  id="mute" 
                  onClick={() => this.muteButton()}
                >
                  {this.state.mute}
                </div>
                <div
                  id="watch-movie-title"
                >
                  {this.state.movieTitle}
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
}

export default Watch;