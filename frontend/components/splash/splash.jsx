import React from 'react';
import splashLogo from '../../../app/assets/images/logo/splashlogo.png';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      splashEmail: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ splashEmail: e.currentTarget.value })
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
        <header className="splash-header">
          <img src={window.splashLogo} alt="splashLogo"/>
          <a
            href="/#/login"
            className="login-link"
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
    );
  }

}

export default Splash;