import React from 'react'
import client from '../../img/client.jpg'
import './UpdateClient';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

class UpdateClient extends React.Component{

  state = {
    id: 0,
    name: '',
    cpf: '',
    telephone: '',
    age: 0
  }
  componentDidMount(){
    const params = this.props.match.params;
    const userId = params.id;
    this.findById(userId);
  }

  update = ()=> {
    axios.put(`http://localhost:8080/api/client/${this.state.id}`,   
    {
      name: this.state.name,
      cpf: this.state.cpf,
      telephone: this.state.telephone,
      age: this.state.age
    }
    ).then(response => 
      {
        console.log(response);
        this.props.history.push("/ViewClient");
      }).catch(error =>
        {
          console.log(error.response);
        }  
      );
  } 
  cancel = () => {
    this.props.history.push("/ViewClient");
  }

  findById = (userId) => {
    var params = '?';

    if(this.state.id != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}userId=${this.state.id}`;
    }
    axios.get(`http://localhost:8080/api/client/${params}`)
    .then( response => 
        {
            const user = response.data[0];
            const id = user.id;
            const name = user.name;
            const cpf = user.cpf;
            const telephone = user.telephone;
            const age = user.age;

            this.setState({id, name,cpf,telephone, age});
        }
    ).catch( error => 
        {
            console.log(error.response);
        }
    );
}

  render(){
    return (
      <div className="container">
          <img src = {client} className = "mx-auto d-block"/>
          <Card title = "Atualizar dados do Cliente: ">
          
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "ID Cliente: " htmlForm = "InputId">
                <input number = 'text'disabled= {true}className="form-control" id="InputId" value={this.state.id} onChange={e => {this.setState({id: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "Name" htmlForm = 'inputName'>
                  <input type="text" className="form-control" id="inputName" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}}/> 
                </FormGroup>

                <FormGroup label = "CPF: " htmlForm = 'inputCpf'>
                  <input type = 'text' className="form-control" id="inputCpf"  value={this.state.cpf} onChange={e => {this.setState({cpf: e.target.value})}}/>
                </FormGroup>
                
                <FormGroup label = "Telefone: " htmlForm = 'inputTel'>
                  <input type = 'text' className="form-control" id="inputTel" value={this.state.telephone} onChange={e => {this.setState({telephone: e.target.value})}}/>
                </FormGroup>
                
                <FormGroup label = "Idade: " htmlForm = 'inputAge'>
                  <input type = 'number' className="form-control" id="inputAge"  value={this.state.age} onChange={e => {this.setState({age: e.target.value})}}/>
                </FormGroup>
              
                <br/>
                <button onClick={this.update} type = 'button' className="btn btn-primary"> Atualizar </button>
      
                <button onClick={this.cancel} type = 'button' className="btn btn-primary"> Cancelar </button>
      
                </div>
              </div>
            </div>
          </Card>     
      </div>
    );
  }
}
export default withRouter(UpdateClient);