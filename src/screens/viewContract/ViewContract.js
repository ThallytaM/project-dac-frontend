import React from 'react'
import contract from '../../img/contract.jpg'
import './ViewContract.css';

import 'bootswatch/dist/flatly/bootstrap.css';
import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

export default class ViewContract extends React.Component{

  state = {
    id: null
    
  }
  find = ()=> {
    //Lógica para list
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
                 <input type="text" className="form-control" id="inputId" placeholder = 'Digite o Id do cliente' value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}} /> 
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
