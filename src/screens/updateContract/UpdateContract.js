import React from 'react'
import contract from '../../img/contract.jpg'
import './UpdateContract.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

class UpdateContract extends React.Component{

  state = {
    id:0 ,
    clientId: 0,
    propertyId: 0,
    contractDate: ''

  }
  componentDidMount(){
    const params = this.props.match.params;
    const contractId = params.id;
    this.findById(contractId);
  }
  update =  ()=> {
    axios.put(`http://localhost:8080/api/contract/${this.state.id}`,
        {
      clientId: this.state.clientId,
      propertyId: this.state.propertyId
    }
    ).then(response => 
      {
        console.log(response);
        this.props.history.push("/ViewContract");
      }).catch(error =>
        {
          console.log(error.response);
        }
      );
      }
      cancel = () => {
        this.props.history.push("/ViewContract");
      }

      findById = (contractId) => {
        var params = '?';
    
        if(this.state.id != ''){
          if(params != '?'){
            params = `${params}&`;
          }
          params = `${params}contractId=${this.state.id}`;
        }
        axios.get(`http://localhost:8080/api/contract/${params}`)
        .then( response => 
            {
                const contract = response.data[0];
                const id = contract.id;
                const clientId = contract.clientId;
                const propertyId = contract.propertyId;
                const contractDate = contract.contractDate;
    
                this.setState({id, clientId,propertyId,contractDate});
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
  }


  render(){
    return (
      <div className="CreateContract">

        <img src = {contract}/>

        <Card title = "Atualizar Contrato">
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label = "ID Contrato " htmlForm = "idContract">
                <input type = 'number' className="form-control" id="idContract" disabled="true" value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "Data" htmlForm = "idDate">
                <input type = 'Data' className="form-control" disabled="true" id="idDate" value={this.state.contractDate} onChange={(e) => {this.setState({contractDate: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "ID Cliente " htmlForm = "idClient">
                <input type = 'number' className="form-control" id="idClient" placeholder="ID do Cliente" value={this.state.clientId} onChange={(e) => {this.setState({clientId: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "ID Propriedade " htmlForm = "idProperty">
                <input type = 'number' className="form-control" id="idProperty" placeholder="ID da propriedade" value={this.state.propertyId} onChange={(e) => {this.setState({propertyId: e.target.value})}}/>
                </FormGroup> 
                


                <br/>
                <button onClick={this.update} type = 'button' className="btn btn-primary"> Atualizar </button>

                
                <button onClick={this.cancel} type = 'button' className="btn btn-primary"> Cancelar </button>

              </div>
            </div>
          </div>
        </Card>          
      </div>
    );
  }
}
export default withRouter(UpdateContract);