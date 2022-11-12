import React from 'react'
import property from '../../img/property.jpg'
import './UpdateProperty.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

class UpdateProperty extends React.Component{

  state = {
    id: 0,
    address: '',
    area: 0,
    rentValue: 0
  }

  componentDidMount(){
    const params = this.props.match.params;
    const propertyId = params.id;
    this.findById(propertyId);
  }

  update = ()=> {
    axios.put(`http://localhost:8080/api/property/${this.state.id}`,
    {
      address: this.state.address,
      area: this.state.area,
      rentValue: this.state.rentValue
    }
    ).then(response => 
      {
        console.log(response);
        this.props.history.push("/ViewProperty");
      }).catch(error =>
        {
          console.log(error.response);
        }
      );
  }
  cancel = () => {
    this.props.history.push("/ViewProperty");
  }
 
  findById = (propertyId) => {
    var params = '?';

    if(this.state.id != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}propertyId=${this.state.id}`;
    }
    axios.get(`http://localhost:8080/api/property/${params}`)
    .then( response => 
        {
            const property = response.data[0];
            const id = property.id;
            const address = property.address;
            const area = property.area;
            const rentValue = property.rentValue;    

            this.setState({id,address,area,rentValue});
        }
    ).catch( error => 
        {
            console.log(error.response);
        }
    );
}

  render(){
    return (
      <div className="UpdateProperty">

        <img src = {property}/>
        
        <Card title = "Atualizar dados da Propriedade: ">
     
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
              <FormGroup label = "ID" htmlForm = "inputID">
              <input type = 'number' className="form-control" id="inputID" disabled="true"  value={this.state.id} onChange={e => {this.setState({id: e.target.value})}}/>
              </FormGroup> 
              <FormGroup label = "Endereço " htmlForm = "inputAddress">
              <input type = 'text' className="form-control" id="inputAddress"  value={this.state.address} onChange={e => {this.setState({address: e.target.value})}}/>
              </FormGroup> 
              <FormGroup label = "Área " htmlForm = "inputArea">
              <input type = 'number' className="form-control" id="inputArea" value={this.state.area} onChange={e => {this.setState({area: e.target.value})}}/>
              </FormGroup>
              <FormGroup label = "Valor do Aluguel" htmlForm = "inputRentValue">
              <input type = 'number' className="form-control" id="inputRentValue" value={this.state.rentValue} onChange={e=> {this.setState({rentValue: e.target.value})}}/>
              </FormGroup>

              <br/>
              <button onClick={this.update} type = 'button' className="btn btn-primary"> Salvar </button>
              <button onClick={this.cancel} type = 'button' className="btn btn-primary"> Cancelar </button>


              </div>
            </div>
          </div>
        </Card>          
         
      </div>
    );
  }
}

export default withRouter(UpdateProperty);