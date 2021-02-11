import React from 'react';
import { Link } from 'react-router-dom';

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
        <header>
          <Link
            to="/"
            className="logo-splash-link"
          >
            JEFFLIX
          </Link>
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
            <button onClick={this.handleSubmit}>Sign In</button>
          </form>
          <p>New to Jefflix?</p>
          <p>{this.props.navLink}</p>
        </div>
      </div>
    )
  }
};

export default Login;