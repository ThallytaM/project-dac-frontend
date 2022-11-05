import React from 'react'
import client from '../../img/client.jpg'
import './UpdateClient';

import 'bootswatch/dist/flatly/bootstrap.css';
import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

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
      <div className="UpdateClient">

          <img src = {client}/>
          
          <Card title = "Atualizar dados do Cliente: ">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "ID Cliente: " htmlForm = "InputId">
                <input type = 'number' className="form-control" id="id" placeholder="id client"  value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}}/>
                </FormGroup> 

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
                <button onClick={this.save} type = 'button' className="btn btn-primary"> Atualizar </button>
  
                <label>{this.state.result}</label>
    
                </div>
              </div>
            </div>
          </Card>     
      </div>
    );
  }
}
