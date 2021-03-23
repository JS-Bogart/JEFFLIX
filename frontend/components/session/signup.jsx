import React from 'react';

class Signup extends React.Component {
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
    this.splashData = JSON.parse(localStorage.getItem('splashEmail'));

    if (localStorage.getItem('splashEmail')) {
      this.setState({
        email: this.splashData.splashEmail,
        password: ''
      })
    } else {
      this.setState({
        email: '',
        password: ''
      })
    }
  }

  getData() {
    this.props.requestAllMovies();
    this.props.requestAllGenres();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getData();
    this.props.signup(this.state);
  }
  
  renderEmailError() {
    if (this.props.errors[0] === "Email has already been taken") {
      return(
        <div className="signup-email-error">
          <span>&#9888;</span>
          <div>
            <p>Looks like that account already exists.</p>
            <a href="/#/login">Sign into</a>
            <a href="/#/login">that account</a>
            <p>or try using a different email.</p>
          </div>
        </div>
      )
    }
  }

  renderPasswordError() {
    if (this.props.errors[0] === "Password is too short (minimum is 6 characters)") {
      return (
        <div className="signup-password-error">
          <p>Password should be at least 6 characters.</p>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="signup">
        <header>
          <a
            href="/#/"
            className="logo-signup-link"
          >
            <img src={window.splashLogo} alt="splashLogo"/>
          </a>
          <a
            href="/#/login"
            className="login-link"
          >
            Sign In
          </a>
        </header>
        <div className="signup-body">
          {this.renderEmailError()}
          <h2>Create a password to start your membership.</h2>
          <p>Just a few more steps and you're done!</p>
          <p>We hate paperwork, too.</p>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <label className="email-label">Email</label>
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
            <label className="password-label">Add a password</label>
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            {this.renderPasswordError()}
            <input
              type="submit"
              className="signup-link"
              value="Continue"
            />
          </form>
        </div>
      </div>
    )
  }
};

export default Signup;