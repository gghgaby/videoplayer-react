import React from 'react';
import './playlist.css';

import Media from './media.js'; 

//Componente funcional -> containers -> Qué hace?, no tiene un ciclo de vida
function Playlist(props){
  return (
    <div className="playlist__wrapper">
      {
        props.playlist.map((item) => {
          return <Media handleClick={props.handleOpenModal} {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;