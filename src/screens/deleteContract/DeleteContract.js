import React from 'react'
import contract from '../../img/contract.jpg'
import './DeleteContract.css';

import 'bootswatch/dist/flatly/bootstrap.css';
import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

export default class DeleteContract extends React.Component{

  state = {
    id: 0
  }
  delete = ()=> {
    //Lógica para deletar
  }

  cancel = () =>{
    //Lógica para cancelar

  }

  render(){
    return (
      <div className="DeleteContract">

        <img src = {contract}/>
        
        <Card title = "Deletar Contrato">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "Id " htmlForm = "InputId">
                <input type="text" className="form-control" id="inputId" onChange={(e) => {this.setState({id: e.target.value})}}/>                 
                </FormGroup>      

                <br/>
                <button onClick={this.delete} type='button' className="btn btn-primary"> Deletar </button>
                <button onClick={this.cancel} type='button' className="btn btn-primary"> Cancelar </button>

                </div>
              </div>
            </div>          
          </Card>  
      </div>
    );
  }
}
