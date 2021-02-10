import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Containers:
import SignupContainer from './session/signup_container';

const App = () => (
  <div>
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;