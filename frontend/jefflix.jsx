import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {

  window.login = login; //remove after testing
  window.logout = logout; //remove after testing
  window.signup = signup; //remove after testing

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to JEFFLIX</h1>, root);
});