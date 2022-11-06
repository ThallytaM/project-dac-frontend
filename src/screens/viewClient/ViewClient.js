import React from 'react'
import client from '../../img/client.jpg'
import './ViewClient.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';
import ClientsTable from '../../components/ClientsTable';

class ViewClient extends React.Component{

  state = {
    id: '',
    name: '',
    cpf: '',
    telephone: '',
    age: 0,
    clients: []
  }

  delete = (userId) => {
    axios.delete(`http://localhost:8080/api/client/${userId}`,
    ).then(response => 
      {
        this.find();
      }).catch(error =>
        {
          console.log(error.response);
        }
        
      );
  }
  edit = (userId)=>{
    this.props.history.push(`/updateClient/${userId}`);
  }

  find = ()=> {

    var params = '?';

    if(this.state.id != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}id =${this.state.id}`;
    }

    if(this.state.name != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}name =${this.state.name}`;
    }

    if(this.state.cpf != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}cpf =${this.state.cpf}`;
    }

    axios.get(`http://localhost:8080/api/client${params}`
    ).then(response => 
      {
        const clients = response.data;
        this.setState({clients});
        console.log(clients);
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

          <br/>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <ClientsTable clients={this.state.clients}
                delete={this.delete}
                edit = {this.edit}/>
              </div>

            </div>

          </div>



      </div>
    );
  }
}
export default withRouter(ViewClient);