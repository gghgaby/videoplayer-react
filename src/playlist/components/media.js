import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends Component {
  state ={
    author: 'Leonidas Esteban'
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     author: props.author,
  //   }
  //   this.fnHandleClick = this.fnHandleClick.bind(this);
  // }

  // fnHandleClick (event){
  //   console.log(this.props.title)
  // }

  fnHandleClick = (event) =>{
    this.setState({
      author: 'Ricardo Celis',
    });
  }

  render() {
    return (
      <div className="Media" onClick={this.fnHandleClick}>
        <div className="Media-cover">
          <img 
            src={this.props.image}
            alt=""
            width= {260}
            height= {160}
            className ="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
}

export default Media;
