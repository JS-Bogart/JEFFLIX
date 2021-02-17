import React from 'react';

class BrowseItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="browse-item">
        <p>
          {/* {this.props.movie.title} */}
          <img src={window.thepest} alt="thepest" />
        </p>
      </li>
    )
  }
}

export default BrowseItem;