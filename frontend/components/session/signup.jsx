import React, { useState, useEffect } from 'react';

const Signup = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    props.removeErrors();
    const splashData = JSON.parse(localStorage.getItem('splashEmail'));

    if (localStorage.getItem('splashEmail')) {
      setEmail(splashData.splashEmail)
    }

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
    props.signup({ email: email, password: password });
  }
  
  const renderEmailError = () => {
    if (props.errors[0] === "Email has already been taken") {
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

   const renderPasswordError = () => {
    if (props.errors[0] === "Password is too short (minimum is 6 characters)") {
      return (
        <div className="signup-password-error">
          <p>Password should be at least 6 characters.</p>
        </div>
      )
    }
  }

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
        {renderEmailError()}
        <h2>Create a password to start your membership.</h2>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label className="email-label">Email</label>
          <input 
            type="text"
            value={email}
            onChange={handleInput('email')}
          />
          <label className="password-label">Add a password</label>
          <input 
            type="password"
            value={password}
            onChange={handleInput('password')}
          />
          {renderPasswordError()}
          <input
            type="submit"
            className="signup-link"
            value="Continue"
          />
        </form>
      </div>
    </div>
  )
};

export default Signup;