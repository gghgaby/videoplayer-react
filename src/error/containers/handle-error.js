import React, {Component} from 'react';
import RegularError from '../components/regular-error'

class HandleError extends Component {
  state = {
    handleError: false
  }
  componentDidCatch(error, info) {
    this.setState({
      handleError: true
    })
    //Envia  el error a un servicio como Sentry
  }
  render() { 
    return this.state.handleError ? <RegularError/> : this.props.children;
  }
}
 
export default HandleError;