import React from 'react';
import './search.css';

function Search (props){
  return (
    <form   
      className="search"
      onSubmit={props.handleSubmit}>
      <input 
        ref={props.setRef}
        type="text"
        placeholder="Buscar un artista, tema o amigo"
        className="searchInput"
        //defaultValue="Luis Fonsi"
        value={props.value}
        onChange={props.handleChange}
      />
    </form>
  )
  }

export default Search