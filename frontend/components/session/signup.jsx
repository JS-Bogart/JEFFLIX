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

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return(
      <div>
        <header>
          <h1>JEFFLIX</h1>
          <p>{this.props.navLink}</p>
        </header>
        <body>
        <h2>Sign Up</h2>
          <form>
            <label>Email
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>
            <label>Add a password
              <input 
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
        </body>
      </div>
    )
  }
};

export default Signup;