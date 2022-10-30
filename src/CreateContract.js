import React from 'react'
import contract from './img/contract.jpg'
import './CreateContract.css';

export default class CreateContract extends React.Component{


  state = {
    client: null,
    property: null
  }
  save = ()=> {
  }

  render(){
    return (
      <div className="CreateContract">

          <img src = {contract}/>
          
          <h2>CONTRACTS DATA: </h2>

          <label> Client </label>
          <input type = 'text' value={this.state.client} onChange={(e) => {this.setState({client: e.target.value})}}/>
          
          <br/>
          <label> Property </label>
          <input type = 'text' value={this.state.property} onChange={(e) => {this.setState({property: e.target.value})}}/>

          <br/>
          <button onClick={this.save} > Save</button>
          
        
      </div>
    );
  }
}
