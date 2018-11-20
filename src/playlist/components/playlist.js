import React, { Component } from 'react';
import Media from './media.js'

class Playlist extends Component {
  state = {  }
  render() {
    console.log(this.props.data);
    return (
      <div>
        <Media/>
      </div>
    );
  }
}

export default Playlist;