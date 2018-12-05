import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends PureComponent {

  handleClick = (event) =>{
    this.props.openModal(this.props);
  }

  render() {
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img 
            src={this.props.cover}
            alt={this.props.cover}
            className ="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
}

export default Media;
