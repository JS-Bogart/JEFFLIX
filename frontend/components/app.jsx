import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
//Containers:
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';
import BrowseContainer from './browse/browse_container';

const App = () => (
  <div>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/browse" component={BrowseContainer} />
  </div>
);

export default App;