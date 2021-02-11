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

  render() {
    return(
      <div className="signup">
        <header>
          <h1 className="app-logo">JEFFLIX</h1>
          <p>{this.props.navLink}</p>
        </header>
        <div>
          <h2>Create a password to start your membership.</h2>
          <p>Just a few more steps and you're done!</p>
          <p>We hate paperwork, too.</p>
          <form>
            <label>Email</label>
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
            <label>Add a password</label>
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
        </div>
      </div>
    )
  }
};

export default Signup;