import React from 'react'
import client from './img/client.jpg'
import './UpdateClient';

export default class UpdateClient extends React.Component{

  state = {
    id: '',
    name: '',
    cpf: '',
    telephone: '',
    age: 0
  }
  save = ()=> {
    const result = 'ID client: '+ parseInt(this.state.id) + ' || Name: ' + this.state.name + ' || CPF: ' + this.state.cpf + ' || Telephone: '+ this.state.telephone + ' || Age: ' + this.state.age;
    this.setState({result});
  }
 

  render(){
    return (
      <div className="CreateClient">

          <img src = {client}/>
          
          <h2>UPDATE CLIENT'S DATA: </h2>

          <label> ID Client </label>
          <input type = 'number' value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}}/>

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
          <input type = 'number' value={this.state.age} onChange={(e) => {this.setState({age: e.target.value})}}/>

          <br/>
          <button onClick={this.save} > Update</button> 

          <label>{this.state.result}</label>
                  
      </div>
    );
  }
}
