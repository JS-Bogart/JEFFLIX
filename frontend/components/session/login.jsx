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
        <div>
          {this.props.errors[0]}
        </div>
      )
    }
  }

  render() {
    return(
      <div className="signin">
        <div>
          <header>
            <a
              href="/#/"
              className="logo-signup-link"
            >
              <img src={window.splashLogo} alt="splashLogo" />
            </a>
          </header>
          {this.renderErrors()}
          <div>
            <h2>Sign In</h2>
            <form>
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
              {/* <button onClick={this.handleSubmit}>Sign In</button> */}
              <div
                onClick={this.handleSubmit}
                className="signin-btn"
              >
                Sign In
              </div>
            </form>
            <p>New to Jefflix?</p>
            <p>{this.props.navLink}</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Login;