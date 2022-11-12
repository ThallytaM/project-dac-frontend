import React from 'react'
import contract from '../../img/contract.jpg'
import './ViewContract.css';

import axios from 'axios';
import { withRouter } from 'react-router-dom'; 

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';
import ContractTable from '../../components/ContractTable';

class ViewContract extends React.Component{

  state = {
    id: '',
    clientId: '',
    propertyId: '',
    contractDate: '',
    contracts: []
  }
  componentDidMount(){
    this.find();
  }
 

  delete = (contractId) => {
    axios.delete(`http://localhost:8080/api/contract/${contractId}`,
    ).then(response => 
      {
        this.find();
      }).catch(error =>
        {
          console.log(error.response);
        }
        
      );
  }
  edit = (contractId)=>{
    this.props.history.push(`/updateContract/${contractId}`);
  }

  find = ()=> {

    var params = '?';

    if(this.state.id != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}id =${this.state.id}`;
    }

    if(this.state.clientId != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}clientId =${this.state.clientId}`;
    }

    if(this.state.propertyId != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}propertyId =${this.state.propertyId}`;
    }
    if(this.state.contractDate != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}contractDate =${this.state.contractDate}`;
    }

    axios.get(`http://localhost:8080/api/contract${params}`
    ).then(response => 
      {
        const contracts = response.data;
        this.setState({contracts});
        console.log(contracts);
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

          <Card title = "Buscar Contratos">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "Id " htmlForm = "InputId">
                 <input type="text" className="form-control" id="inputId" disabled="true" value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}} /> 
                </FormGroup>      
                
                <FormGroup label = "ID Cliente " htmlForm = "idClient">
                <input type = 'number' className="form-control" id="idClient" placeholder="ID do Cliente" value={this.state.clientId} onChange={(e) => {this.setState({clientId: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "ID Propriedade " htmlForm = "idProperty">
                <input type = 'number' className="form-control" id="idProperty" placeholder="ID da propriedade" value={this.state.propertyId} onChange={(e) => {this.setState({propertyId: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "Data do Contrato " htmlForm = "contractDate">
                <input type = 'number' className="form-control" id="contractDate" placeholder="data do contrato" value={this.state.contractDate} onChange={(e) => {this.setState({contractDate: e.target.value})}}/>
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
                <ContractTable contracts={this.state.contracts}
                delete={this.delete}
                edit = {this.edit}/>
              </div>

            </div>

          </div>
      </div>
    );
  }
}


export default withRouter(ViewContract);