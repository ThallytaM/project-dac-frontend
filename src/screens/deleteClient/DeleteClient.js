import React from 'react'
import client from '../../img/client.jpg'
import './DeleteClient.css';

import axios from 'axios';
import { withRouter } from 'react-router-dom'; 

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';


class DeleteClient extends React.Component{

  state = {
    id: 0
  }
  delete = ()=> {
    axios.delete(`http://localhost:8080/api/client/${this.state.id}`,
    ).then(response => 
      {
        console.log(response);
      }).catch(error =>
        {
          console.log(error.response);
        }
        
      );
  }

  cancel = () =>{
    this.props.history.push('/');

  }

  render(){
    return (
      <div className="container">

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

export default withRouter(DeleteClient);