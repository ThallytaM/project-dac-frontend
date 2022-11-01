import React from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{


  state = {
    number1: 0,
    number2: 0,
    result:0
  }

  
  sum = ()=> {
    const result = parseInt(this.state.number1) + parseInt(this.state.number2);
    this.setState({result});
  }

  render(){
    return (
      <div className="App">

          <label> Number 1 </label>
          <input type = 'text' value={this.state.number1} onChange={(e) => {this.setState({number1: e.target.value})}}/>
          
          
          <br/>
          <label> Number 2 </label>
          <input type = 'text' value={this.state.number2} onChange={(e) => {this.setState({number2: e.target.value})}}/>

          <br/>
          <button onClick={this.sum} > sum</button>
          
          <br/> 
          <label>O resultado é: {this.state.result}</label>

      </div>
    );
  }
}
