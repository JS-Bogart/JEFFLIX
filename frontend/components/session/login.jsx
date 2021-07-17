import React, { useState, useEffect } from 'react';

const demo = {
  email: 'demo@demo.com',
  password: '123456'
};

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    props.removeErrors();
    if (props.movies.length < 2) {
      props.requestAllMovies();
    }
    if (props.genres.length < 1) {
      props.requestAllGenres();
    }
  }, [])

  const handleInput = (field) => {
    if (field === 'email') {
      return (e) => {
        setEmail(e.currentTarget.value)
      }
    } else if (field === 'password') {
      return (e) => {
        setPassword(e.currentTarget.value)
      }
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login({ email: email, password: password });
  }

  const demoSubmit = () => {
    props.login(demo);
  }

  const renderErrors = () => {
    if (props.errors.length > 0) {
      return (
        <div className="signin-error">
          <p>Sorry, we can't find an account with this</p>
          <p>email or password. Please try again or</p>
          <a href="/#/signup">create a new account.</a>
        </div>
      )
    }
  }

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
          {renderErrors()}
          <form className="signin-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
              type="text"
              value={email}
              onChange={handleInput('email')}
            />
            <label>Password</label>
            <input 
              type="password"
              value={password}
              onChange={handleInput('password')}
            />
            <input 
              type="submit"
              className="signin-btn"
              value="Sign In"
            />
            <div
              onClick={demoSubmit}
              className="demo-btn"
            >
              Demo User
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
};

export default Login;