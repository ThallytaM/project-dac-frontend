import React from 'react'
import property from '../../img/property.jpg'
import './ViewProperty.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import PropertiesTable from '../../components/PropertiesTable';
import PropertyApiService from '../../services/PropertyApiService';


class ViewProperty extends React.Component{


  state = {
    id: 0,
    address: '',
    area: 0,
    rentValue: 0,
    properties: []
  }

  constructor(){
    super();
    this.service = new PropertyApiService();
  }

   componentDidMount(){
    this.find();
  }
  delete = (propertyId) => {
   // axios.delete(`http://localhost:8080/api/property/${propertyId}`,
   this.service.delete(propertyId
    ).then(response => 
      {
        this.find();
      }).catch(error =>
        {
          console.log(error.response);
        }
        
      );
  }
  edit = (propertyId)=>{
    this.props.history.push(`/updateProperty/${propertyId}`);
  }

  find = ()=> {

    var params = '?';

    if(this.state.id != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}id =${this.state.id}`;
    }

    if(this.state.address != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}address =${this.state.address}`;
    }

    if(this.state.area != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}area =${this.state.area}`;
    }
    
    if(this.state.rentValue != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}rentValue =${this.state.rentValue}`;
    }
 //   axios.get(`http://localhost:8080/api/property${params}`)
    this.service.find(params)
    .then(response => 
      {
        const properties = response.data;
        this.setState({properties});

        console.log(properties);
      }).catch(error =>
        {
          console.log(error.response);
        }
        
      );
  }
  render(){
    return (
      <div className="ViewProperty">

        <img src = {property}/>
        
        <Card title = "Propriedades Cadastradas ">
     
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
              <FormGroup label = "ID" htmlForm = "inputID">
              <input type = 'text' className="form-control" id="inputID" placeholder="Digite o ID" value={this.state.address} onChange={(e) => {this.setState({address: e.target.value})}}/>
              </FormGroup> 

              <br/>
              <button onClick={this.find} type = 'button' className="btn btn-primary"> Buscar </button>
  

              </div>
            </div>
          </div>
        </Card>  
        <br/>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <PropertiesTable properties={this.state.properties}
                delete={this.delete}
                edit = {this.edit}/>
              </div>

            </div>

          </div>
        
         
      </div>
    );
  }
}

export default withRouter(ViewProperty);
