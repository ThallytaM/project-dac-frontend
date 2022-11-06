import React from 'react'
import client from '../../img/client.jpg'
import './ViewClient.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

class ViewClient extends React.Component{

  state = {
    id: '',
    name: '',
    cpf: '',
    telephone: '',
    age: 0
  }
  find = ()=> {
    axios.get('http://localhost:8080/api/client',
    {
      id: this.state.id,
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
export default withRouter(ViewClient);