import React from 'react';

export default class Alert extends React.Component {

  render(){
    return(
        <div className="alert alert-dismissible alert-light">
            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            <strong>{this.props.title}</strong> {this.props.mensage}
        </div>
        
    )
  }
}




