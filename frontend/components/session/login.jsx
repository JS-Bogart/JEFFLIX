import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="signin-error">
          <p>Sorry, we can't find an account with this</p>
          <p>email or password. Please try again or</p>
          <a href="/#/signup">create a new account.</a>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="signin">
        <img src={window.splashbg} alt="splashLogo" className="splashbg" />
        <div className="signin-wrapper">
          <a
            href="/#/"
            className="logo-signup-link"
          >
            <img src={window.splashLogo} alt="splashLogo" />
          </a>
          <div className="signin-body">
            <h2>Sign In</h2>
            {this.renderErrors()}
            <form className="signin-form">
              <label>Email</label>
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
              <label>Password</label>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
              <div
                onClick={this.handleSubmit}
                className="signin-btn"
              >
                Sign In
              </div>
            </form>
            <div className="signup-now">
              <p>New to Jefflix?</p>
              <a
                href="/#/signup"
                className="signup-now-link"
              >
                Sign up now.
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Login;