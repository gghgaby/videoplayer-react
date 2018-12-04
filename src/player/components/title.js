import React, { Component } from 'react';
import './title.css';

function Title(props){
  return (
    <div className="title">
      <h2>{props.title}</h2>
    </div>
  )
}

export default Title;