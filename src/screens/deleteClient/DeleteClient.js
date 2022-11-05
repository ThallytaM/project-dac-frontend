import React from 'react'
import client from '../../img/client.jpg'
import './DeleteClient.css';

import 'bootswatch/dist/flatly/bootstrap.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';


export default class DeleteClient extends React.Component{

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
      <div className="DeleteClient">

        <img src = {client}/>
        
        <Card title = "Deletar Cliente">
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
