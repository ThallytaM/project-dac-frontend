import React from 'react'
import client from '../../img/client.jpg'
import './CreateClient.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

class CreateClient extends React .Component{

  state = {
    name: '',
    cpf: '',
    telephone: '',
    age: 0
  }
  save = async ()=> {
    await axios.post('http://localhost:8080/api/client',
    {
      name: this.state.name,
      cpf: this.state.cpf,
      telephone: this.state.telephone,
      age: this.state.age
    }
    ).then(response => 
      {
        console.log(response);
      }).catch(error =>
        {
          console.log(error.response);
        }
      );

  }

  render(){
    return (
      <div className="container">
          
          <Card title = "Novo cliente">
          <img src = {client}/>
            <div className='row'>


              <div className='col-lg-12'>
                <div className='bs-component'>

                <FormGroup label = "Name" htmlForm = 'inputName'>
                  <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/> 
                </FormGroup>

                <FormGroup label = "CPF: " htmlForm = 'inputCpf'>
                  <input type = 'text' className="form-control" id="cpinputCpff" placeholder="xxx.xxx.xxx-xx" value={this.state.cpf} onChange={(e) => {this.setState({cpf: e.target.value})}}/>
                </FormGroup>
                
                <FormGroup label = "Telefone: " htmlForm = 'inputTel'>
                  <input type = 'text' className="form-control" id="inputTel" placeholder="(99) 99999-9999"  value={this.state.telephone} onChange={(e) => {this.setState({telephone: e.target.value})}}/>
                </FormGroup>
                
                <FormGroup label = "Idade: " htmlForm = 'inputAge'>
                  <input type = 'number' className="form-control" id="inputAge" placeholder=""  value={this.state.age} onChange={(e) => {this.setState({age: e.target.value})}}/>
                </FormGroup>
              
                <br/>
                <button onClick={this.save} type = 'button' className="btn btn-primary"> Salvar </button>
      
                </div>
              </div>
            </div>
          </Card>     

          
        
      </div>
    );
  }
}

export default withRouter(CreateClient);