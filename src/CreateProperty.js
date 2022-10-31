import React from 'react'
import property from './img/property.jpg'
import './CreateProperty.css';

export default class CreateProperty extends React.Component{


  state = {
    address: '',
    area: 0,
    rentValue: 0
  }
  save = ()=> {
  }

  render(){
    return (
      <div className="CreateProperty">

          <img src = {property}/>
          
          <h2>PROPERTIES DATA: </h2>

          <label> Address </label>
          <input type = 'text' value={this.state.address} onChange={(e) => {this.setState({address: e.target.value})}}/>
          
          <br/>
          <label> Area </label>
          <input type = 'number' value={this.state.area} onChange={(e) => {this.setState({area: e.target.value})}}/>

          <br/>
          <label> Rent Value </label>
          <input type = 'number' value={this.state.rentValue} onChange={(e) => {this.setState({rentValue: e.target.value})}}/>

          <br/>
          <button onClick={this.save} > Save</button>
      </div>
    );
  }
}
