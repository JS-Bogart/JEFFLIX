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

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return(
      <div className="signin">
        <header>
          <h1 className="app-logo">JEFFLIX</h1>
        </header>
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
          <p>{this.props.navLink}</p>
        </div>
      </div>
    )
  }
};

export default Login;