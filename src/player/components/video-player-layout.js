import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = (props) => (
  <div className="videoPlayer">
    {props.children}
  </div>
);

export default VideoPlayerLayout;