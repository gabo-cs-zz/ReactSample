import React, { Component } from 'react'

import Album from './Album'

const dropDown = {
  display: 'block'
}

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      albums: [],
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => 
        this.setState({
          albums: data,
        })
      );
  }

  getIds(){
    let ids = [];
    ids.push(this.state.albums[0].userId);
    for(let i = 1; i < this.state.albums.length; i++){
      if(this.state.albums[i].userId !== ids[ids.length-1]){
        ids.push(this.state.albums[i].userId);
      }
    }
    return ids;
  }
 
  render(){
    return(
      <div>
        <select style={dropDown}>
          { this.state.albums.length > 0 && this.getIds().map(item => <option key={item}> {item} </option> ) }
        </select>
        { this.state.albums.map(item => <Album key={item.id} {...item} /> )}
      </div>
    );
  }

}

export default Layout;