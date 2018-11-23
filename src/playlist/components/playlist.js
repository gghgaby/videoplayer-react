import React from 'react';
import Media from './media.js'; 

//Componente funcional -> containers -> Qué hace?, no tiene un ciclo de vida
function Playlist(props){
  const playlist = props.data.categories[0].playlist;
  return (
    <div>
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;