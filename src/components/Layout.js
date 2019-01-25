import React, { Component } from 'react'

import Album from './Album'

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      albums: [],
    }
  }
 
  render(){
    return(
      <div>
        <Album title="Lorem" userId="1" id="5" />
      </div>
    );
  }

}

export default Layout;