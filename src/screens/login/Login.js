import React from 'react'
import './Login.css';

import axios from 'axios';
import { withRouter } from 'react-router-dom'; 
import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';


class Login extends React.Component{


  state = {
    email: '',
    password:'',
  }
  login = ()=> {
    axios.post('http://localhost:8080/api/login',
    {
      email: this.state.email,
      password: this.state.password
    }
    ).then(response => 
      {
        localStorage.setItem('loggedUser', JSON.stringify(response.data));
        this.props.history.push("/");
      }).catch(error =>{
        console.log(error.response);
      });
  }

  createUser = ()=> {
    this.props.history.push('/createUser');
  }


  render(){
    return (
      <div className="container">
          <Card title = " Login">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                
                <FormGroup label = "Usuário: " htmlForm = 'inputUserName'>
                  <input type="text" className="form-control" id="inputEmail" placeholder="Nome de usuário" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/> 
                </FormGroup>

                <FormGroup label = "Senha: " htmlForm = 'inputpassword'>
                  <input type = 'password' className="form-control" id="inputpassword" placeholder="Digite sua senha" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
                </FormGroup>       
                
                <br/>
                <button onClick={this.login} type = 'button' className="btn btn-primary"> Entrar </button>

                <button onClick={this.createUser} type = 'button' className="btn btn-primary"> Cadastrar </button>
           
                </div>
              </div>
            </div>
          </Card>     

          
        
      </div>
    );
  }
}

export default withRouter(Login);