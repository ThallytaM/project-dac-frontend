import React from 'react'
import contract from '../../img/contract.jpg'
import './CreateContract.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

class CreateContract extends React.Component{

  state = {
    clientId: 0,
    propertyId: 0
  }
  save = async ()=> {
    await axios.post('http://localhost:8080/api/contract',
    {
      clientId: this.state.clientId,
      propertyId: this.state.propertyId
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

        <img src = {contract}/>

        <Card title = "Novo Contrato">
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label = "ID Cliente " htmlForm = "idClient">
                <input type = 'number' className="form-control" id="idClient" placeholder="ID do Cliente" value={this.state.clientId} onChange={(e) => {this.setState({clientId: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "ID Propriedade " htmlForm = "idProperty">
                <input type = 'number' className="form-control" id="idProperty" placeholder="ID da propriedade" value={this.state.propertyId} onChange={(e) => {this.setState({propertyId: e.target.value})}}/>
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


export default withRouter(CreateContract);