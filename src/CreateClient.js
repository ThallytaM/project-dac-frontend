import React from 'react'
import client from './img/client.jpg'
import './CreateClient.css';

export default class CreateClient extends React.Component{

  state = {
    name: null,
    cpf: null,
    telephone: null,
    age: null
  }
  save = ()=> {
  }

  render(){
    return (
      <div className="CreateClient">

          <img src = {client}/>
          
          <h2>CLIENT'S DATA: </h2>

          <label> Name </label>
          <input type = 'text' value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
          
          <br/>
          <label> CPF </label>
          <input type = 'text' value={this.state.cpf} onChange={(e) => {this.setState({cpf: e.target.value})}}/>

          <br/>
          <label> Telephone </label>
          <input type = 'text' value={this.state.telephone} onChange={(e) => {this.setState({telephone: e.target.value})}}/>

          <br/>
          <label> Age </label>
          <input type = 'text' value={this.state.age} onChange={(e) => {this.setState({age: e.target.value})}}/>

          <br/>
          <button onClick={this.save} > Save</button>
        
          
        
      </div>
    );
  }
}
