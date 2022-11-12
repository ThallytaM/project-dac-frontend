import React from 'react'
import './CreateUser.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

class CreateUser extends React.Component{

  state = {
    name: '',
    email: '',
    password:'',
    passwordRepeat:''
  }
  create =  async ()=> {
    await axios.post('http://localhost:8080/api/user',
    {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordRepeat: this.state.passwordRepeat
    }
    ).then(response => 
      {
        console.log(response);
        this.props.history.push("/login")
      }).catch(error =>
        {
          console.log(error.response);
        });
    
  }

  cancel = ()=> {
    this.props.history.push('/');
}

  render(){
    return (
      <div className="container">
          <Card title = "Cadastro de Usuário">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "Nome: " htmlForm = "InputNome">
                <input type = 'text' className="form-control" id="InputNome" placeholder="Nome"  value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "Email: " htmlForm = 'inputEmail'>
                  <input type="text" className="form-control" id="inputEmail" placeholder="Digite o email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/> 
                </FormGroup>

                <FormGroup label = "Senha: " htmlForm = 'inputpassword'>
                  <input type = 'text' className="form-control" id="inputpassword" placeholder="digite a senha" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
                </FormGroup>

                <FormGroup label = "Repita a senha: " htmlForm = 'inputpasswordRepeat'>
                  <input type = 'text' className="form-control" id="inputpasswordRepeat" placeholder="digite a senha" value={this.state.passwordRepeat} onChange={(e) => {this.setState({passwordRepeat: e.target.value})}}/>
                </FormGroup>
                
                
      
                <br/>
                <button onClick={this.create} type = 'button' className="btn btn-primary"> Salvar </button>
                
                <button onClick={this.cancel} type = 'button' className="btn btn-primary">Cancelar </button>
      
                </div>
              </div>
            </div>
          </Card>     

      </div>
    );
  }
}

export default withRouter(CreateUser);

