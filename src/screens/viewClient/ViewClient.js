import React from 'react'
import client from '../../img/client.jpg'
import './ViewClient.css';

import 'bootswatch/dist/flatly/bootstrap.css';
import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

export default class ViewClient extends React.Component{

  state = {
    id: '',
    name: '',
    cpf: '',
    telephone: '',
    age: 0
  }
  find = ()=> {
    //Lógica para list
  }

  render(){
    return (
      <div className="container">

          <img src = {client}/>

          <Card title = "Buscar Clientes">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "Id " htmlForm = "InputId">
                 <input type="text" className="form-control" id="inputId" placeholder = 'Digite o Id do cliente' value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}} /> 
                </FormGroup>      

                <FormGroup label = "Name" htmlForm = 'inputName'>
                  <input type = 'text' className="form-control" id="inputName" placeholder="Digite o nome do cliente" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
                </FormGroup>
                    
                <br/>
                <button onClick={this.find} type='button' className="btn btn-primary"> Buscar </button>

                </div>

              </div>
            </div>          
          </Card>
      </div>
    );
  }
}
