import React from 'react'; 
import './progress-bar.css'

function ProgressBar(props) {
  return (
    <div className="progressBar">
      <input 
        type="range"
        min={0}
        max={props.duration}
        value={props.currentTime}
        onChange={props.handleProgressChange}
      />
    </div>
  )
}

export default ProgressBar;