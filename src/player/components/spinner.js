import React from 'react';
import './spinner.css'

function Spinner(props) {
    return (
      props.active ? <div className="spinner">
                                    <span>Cargando...</span>
                                  </div> : null
    )
  }

export default Spinner;