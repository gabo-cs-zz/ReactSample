import React, { Component } from 'react';

import './Album.css'

class Album extends Component {

  /*constructor(props){
    super(props);
  }*/

  render() {
    return (
      <div className="album-container">
        <h1>{this.props.title}</h1>
        <p>Id {this.props.id}.</p>
        <span>User Id {this.props.userId}.</span>
      </div>
    );
  }
}

export default Album;