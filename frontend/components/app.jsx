import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Containers:
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;