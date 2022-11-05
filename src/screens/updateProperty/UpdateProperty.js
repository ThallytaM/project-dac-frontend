import React from 'react'
import property from '../../img/property.jpg'
import './UpdateProperty.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

export default class UpdateProperty extends React.Component{


  state = {
    id: 0,
    address: '',
    area: 0,
    rentValue: 0
  }
  save = ()=> {
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
              <input type = 'text' className="form-control" id="inputID" placeholder="Digite o ID" value={this.state.address} onChange={(e) => {this.setState({address: e.target.value})}}/>
              </FormGroup> 
              <FormGroup label = "Endereço " htmlForm = "inputAddress">
              <input type = 'text' className="form-control" id="inputAddress" placeholder="Rua, número, Bairro, Cidade, Estado" value={this.state.address} onChange={(e) => {this.setState({address: e.target.value})}}/>
              </FormGroup> 
              <FormGroup label = "Área " htmlForm = "inputArea">
              <input type = 'number' className="form-control" id="inputArea" placeholder="Área em metros quadrados" value={this.state.area} onChange={(e) => {this.setState({area: e.target.value})}}/>
              </FormGroup>
              <FormGroup label = "Valor do Aluguel" htmlForm = "inputRentValue">
              <input type = 'number' className="form-control" id="inputRentValue" placeholder="Valor do aluguel" value={this.state.rentValue} onChange={(e) => {this.setState({rentValue: e.target.value})}}/>
              </FormGroup>

              <br/>
              <button onClick={this.save} type = 'button' className="btn btn-primary"> Salvar </button>
  

              </div>
            </div>
          </div>
        </Card>          
         
      </div>
    );
  }
}
