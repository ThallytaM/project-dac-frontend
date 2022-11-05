import React from 'react';

export default class Card extends React.Component {

  render(){
    return(
      <div className= "card text-white bg-primary mb-3" >     
      <h2 className="card-title">{this.props.title}</h2>
      <div className= "card-body">{this.props.children}
      </div>
      </div>
    
    )
  }

}