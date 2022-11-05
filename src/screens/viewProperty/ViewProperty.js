import React from 'react'
import property from '../../img/property.jpg'
import './ViewProperty.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

export default class ViewProperty extends React.Component{


  state = {
    id: 0,
    address: '',
    area: 0,
    rentValue: 0
  }
  find = ()=> {
  }

  render(){
    return (
      <div className="ViewProperty">

        <img src = {property}/>
        
        <Card title = "Buscar Propriedade ">
     
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
         
      </div>
    );
  }
}
