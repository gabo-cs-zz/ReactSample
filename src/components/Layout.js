import React, { Component } from 'react'

import Album from './Album'

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
 
  render(){
    return(
      <div>
        { this.state.albums.map(item => <Album key={item.id} {...item} /> )}
      </div>
    );
  }

}

export default Layout;