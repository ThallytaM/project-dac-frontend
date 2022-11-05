import React from 'react'
import property from '../../img/property.jpg'
import './DeleteProperty.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

export default class DeleteProperty extends React.Component{

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
