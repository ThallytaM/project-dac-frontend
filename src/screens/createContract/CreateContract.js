import React from 'react'
import contract from '../../img/contract.jpg'
import './CreateContract.css';

import 'bootswatch/dist/flatly/bootstrap.css';
import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

export default class CreateContract extends React.Component{

  state = {
    client: null,
    property: null
  }
  save = ()=> {
  }

  render(){
    return (
      <div className="CreateContract">

        <img src = {contract}/>

        <Card title = "Novo Contrato">
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label = "ID Cliente " htmlForm = "idClient">
                <input type = 'number' className="form-control" id="idClient" placeholder="ID do Cliente" value={this.state.client} onChange={(e) => {this.setState({client: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "ID Propriedade " htmlForm = "idProperty">
                <input type = 'number' className="form-control" id="idProperty" placeholder="ID da propriedade" value={this.state.property} onChange={(e) => {this.setState({property: e.target.value})}}/>
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
