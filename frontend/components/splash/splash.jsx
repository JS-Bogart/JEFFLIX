import React, { useState, useEffect } from 'react';

const demo = {
  email: 'demo@demo.com',
  password: '123456'
};

const Splash = (props) => {

  const [splashEmail, setSplashEmail] = useState("")

  useEffect(() => {
    const lsEmail = localStorage.getItem('splashEmail');
    if (lsEmail !== "undefined" && splashEmail === "") {
      const splashData = JSON.parse(lsEmail);
      setSplashEmail(splashData.splashEmail)
    }
    if(props.movies.length < 2) {
      props.requestAllMovies;
    }
    if (props.genres.length < 1) {
      props.requestAllGenres;
    }
  }, [splashEmail])

  const handleInput = (e) => {
    setSplashEmail(e.currentTarget.value);
    localStorage.setItem('splashEmail', JSON.stringify({ splashEmail: e.currentTarget.value }));
  }

  const demoSubmit = () => {
    props.login(demo);
  }

  return(
    <div className="splash">
      <img src={window.splashbg} alt="splashLogo" className="splashbg"/>
      <div className="splash-top">
        <header className="splash-header">
          <img src={window.splashLogo} alt="splashLogo" className="splash-logo"/>
          <div
            onClick={demoSubmit}
            className="demo-btn"
          >
            Demo User
          </div>
          <a
            href="/#/login"
            className="login-link-btn"
          >
            Sign In
          </a>
        </header>
        <div className="splash-body">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create your membership.</h3>
          <label>Email address</label>
          <form>
            <input
              type="text"
              value={splashEmail}
              onChange={handleInput}
              className="splash-input"
            />
            <a
              href="/#/signup" 
              className="signup-link"
              >
              Get Started  {">"}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Splash;