import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      splashEmail: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.signup(this.state);
  }

  render() {
    return(
      <div className="splash">
        <header>
          <h1 className="app-logo">JEFFLIX</h1>
          <Link to="/login" className="login-link">Sign In</Link>
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
              onChange={this.handleInput('splashEmail')}
            />
            <Link to="/signup" onClick={this.handleSubmit} className="signup-link">
              Get Started
            </Link>
          </form>
        </div>
      </div>
    );
  }

}

export default Splash;