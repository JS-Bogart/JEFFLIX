import React from 'react';

class BrowseItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="browse-item">
        {this.props.movie.title}
      </li>
    )
  }
}

export default BrowseItem;