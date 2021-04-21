import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      splashEmail: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
    this.demo = {
      email: 'demo@demo.com',
      password: '123456'
    };
  }

  componentDidMount() {
    if (this.props.movies.length < 2) {
      this.props.requestAllMovies();
    }
    if (this.props.genres.length < 1) {
      this.props.requestAllGenres();
    }
  }

  handleInput(e) {
    this.setState({ splashEmail: e.currentTarget.value })
  }

  demoSubmit() {
    this.props.login(this.demo);
  }

  componentDidMount() {
    this.splashData = JSON.parse(localStorage.getItem('splashEmail'));

    if (localStorage.getItem('splashEmail')) {
      this.setState({
        splashEmail: this.splashData.splashEmail
      })
    } else {
      this.setState({
        splashEmail: ''
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('splashEmail', JSON.stringify(this.state));
  }

  render() {
    return(
      <div className="splash">
        <img src={window.splashbg} alt="splashLogo" className="splashbg"/>
        <div className="splash-top">
          <header className="splash-header">
            <img src={window.splashLogo} alt="splashLogo" className="splash-logo"/>
            <div
              onClick={this.demoSubmit}
              className="demo-btn"
            >
              Demo User
            </div>
            <a
              href="/#/login"
              className="login-link-btn"
            >
              Sign In
            </a>
          </header>
          <div className="splash-body">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create your membership.</h3>
            <label>Email address</label>
            <form>
              <input
                type="text"
                value={this.state.splashEmail}
                onChange={this.handleInput}
                className="splash-input"
              />
              <a
                href="/#/signup" 
                className="signup-link"
                >
                Get Started  {">"}
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Splash;