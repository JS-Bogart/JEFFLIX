import React from 'react';

class Browse extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1>JEFFLIX</h1>
          {/* <button onClick={this.props.logout}>Sign out of Jefflix</button> */}
          <input 
            type="text" 
            onClick={this.props.logout} 
            value="Sign out of Jefflix"
          />
        </header>
      </div>
    );
  }
};

export default Browse;