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

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <div>
          {this.props.errors[0]}
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
          {this.renderErrors()}
          <h2>Create a password to start your membership.</h2>
          <p>Just a few more steps and you're done!</p>
          <p>We hate paperwork, too.</p>
          <form className="signup-form">
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
            <div 
              onClick={this.handleSubmit}
              className="signup-link"
            >
              Continue
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default Signup;