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
        <header>
          <h1 className="app-logo">JEFFLIX</h1>
          <Button
            component={Link}
            to="/login"
            className="login-link"
          >
            Sign In
          </Button>
        </header>
        <div>
          <h1>Unlimited movies.</h1>
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
          <Button
            component={Link} 
            to="/signup" 
            className="signup-link"
            >
              Get Started
          </Button>
        </div>
      </div>
    );
  }

}

export default Splash;