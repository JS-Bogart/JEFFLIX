import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
          {/* <h1 className="app-logo">JEFFLIX</h1> */}
          <img src="https://fontmeme.com/permalink/210212/c9b8984d98cb53bbf076c280c50eea7b.png"/>
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
          <form>
            <label>Email address</label>
            <input
              type="text"
              value={this.state.splashEmail}
              onChange={this.handleInput}
            />
          </form>
          <a
            href="/#/signup" 
            className="signup-link"
            >
              Get Started
          </a>
        </div>
      </div>
    );
  }

}

export default Splash;