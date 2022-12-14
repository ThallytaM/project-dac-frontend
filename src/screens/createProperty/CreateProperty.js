import React from 'react'
import property from '../../img/property.jpg'
import './CreateProperty.css';

import { withRouter } from 'react-router-dom'; 
//import axios from 'axios';
import PropertyApiService from '../../services/PropertyApiService';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

class CreateProperty extends React.Component{


  state = {
    address: '',
    area: 0,
    rentValue: 0
  }

  constructor(){
    super();
    this.service = new PropertyApiService();
  }
  save = async ()=> {
    //await axios.post('http://localhost:8080/api/property',
    this.service.create(

    {
      address: this.state.address,
      area: this.state.area,
      rentValue: this.state.rentValue
    }
    ).then(response => 
      {
        console.log(response);
        this.props.history.push('/viewProperty');
      }).catch(error =>
        {
          console.log(error.response);
        }
      );
  }
  cancel = () => {
    this.props.history.push('/');
  }

  render(){
    return (
      <div className="container">

        <img src = {property}/>
        
        <Card title = "Cadastrar Propriedade: ">
     
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
              <FormGroup label = "Address " htmlForm = "inputAddress">
              <input type = 'text' className="form-control" id="inputAddress" placeholder="Rua, número, Bairro, Cidade, Estado" value={this.state.address} onChange={(e) => {this.setState({address: e.target.value})}}/>
              </FormGroup> 
              <FormGroup label = "Area " htmlForm = "inputArea">
              <input type = 'number' className="form-control" id="inputArea" placeholder="Área em metros quadrados" value={this.state.area} onChange={(e) => {this.setState({area: e.target.value})}}/>
              </FormGroup>
              <FormGroup label = "Rent Value " htmlForm = "inputRentValue">
              <input type = 'number' className="form-control" id="inputRentValue" placeholder="Valor do aluguel" value={this.state.rentValue} onChange={(e) => {this.setState({rentValue: e.target.value})}}/>
              </FormGroup>

              <br/>
              <button onClick={this.save} type = 'button' className="btn btn-primary"> Salvar </button>
              <button onClick={this.cancel} type = 'button' className="btn btn-primary"> Cancelar </button>


              </div>
            </div>
          </div>
        </Card>          
         
      </div>
    );
  }
}

export default withRouter(CreateProperty);