import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
//Containers:
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';
import BrowseContainer from './browse/browse_container';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/browse" component={BrowseContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;