import React from 'react';
import { logout } from '../../actions/session_actions';

class Browse extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1>JEFFLIX</h1>
          <button onClick={logout}>Sign out of Jefflix</button>
        </header>
      </div>
    );
  }
};

export default Browse;