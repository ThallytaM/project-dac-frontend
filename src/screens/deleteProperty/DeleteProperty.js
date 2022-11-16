import React from 'react'
import property from '../../img/property.jpg'
import './DeleteProperty.css';

import { withRouter } from 'react-router-dom'; 
//import axios from 'axios';
import PropertyApiService from '../../services/PropertyApiService';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

class DeleteProperty extends React.Component{

  state = {
    id: 0
  }
  constructor(){
    super();
    this.service = new PropertyApiService();
  }
  delete = ()=> {
  //  axios.delete(`http://localhost:8080/api/property/${this.state.id}`,
  this.service.delete(this.id
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
      <div className="DeleteProperty">

        <img src = {property}/>
        
        <Card title = "Deletar Propriedade">
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

export default withRouter(DeleteProperty);