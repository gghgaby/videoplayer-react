import React, {Component} from 'react';

class Video extends Component {
  state = {  }
  render() {
    return (
      <video
        controls
        autoPlay
        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" 
      />
    );
  }
}

export default Video;