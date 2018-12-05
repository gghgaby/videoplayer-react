import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = (props) => (
  <div 
    className="videoPlayer"
    ref={props.setRef}
  >
    {props.children}
  </div>
);

export default VideoPlayerLayout;