import React, { Component } from 'react'

import Album from './Album'

const dropDown = {
  display: 'block',
}

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      albums: [],
    }
  }

  componentDidMount(){
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
 
  onFilter = () => {
    console.log(this.refs.sele.value);
  }

  render(){
    if (this.state.albums.length > 0){
      return(
        <div id="layout-container">
          <div style={dropDown}>
            <select ref='sele'>
              {
                this.getIds().map( item => (
                  <option key={item} value={item}> {item} </option>
                ))
              }
            </select>
            <button onClick={this.onFilter}> FILTER </button>
          </div>
          { this.state.albums.map(item => <Album key={item.id} {...item} /> )}
        </div>
      );
    } else {
      return <div>No items found.</div>
    }
  }

}

export default Layout;