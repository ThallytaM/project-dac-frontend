import React from 'react'
import client from '../../img/client.jpg'
import './UpdateUser';

import { withRouter } from 'react-router-dom'; 
//import axios from 'axios';
import UserApiService from '../../services/UserApiService';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';

class UpdateUser extends React.Component{

  state = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password:'',
    passwordRepeat:''
  }

  constructor(){
    super();
    this.service = new UserApiService();
  }
  componentDidMount(){
    const params = this.props.match.params;
    const userId = params.id;
    this.findById(userId);
  }

  update = ()=> {
    //axios.put(`http://localhost:8080/api/user/${this.state.id}`,   
    this.service.update(this.state.id,
    {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordRepeat: this.state.passwordRepeat
    }
    ).then(response => 
      {
        console.log(response);
        this.props.history.push("/viewUser");
      }).catch(error =>
        {
          console.log(error.response);
        }  
      );
  } 
  cancel = () => {
    this.props.history.push("/viewUser");
  }

  findById = (userId) => {
    var params = '?';

    if(this.state.id != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}userId=${this.state.id}`;
    }
    this.service.find(params)
  //  axios.get(`http://localhost:8080/api/user/${params}`)
    .then( response => 
        {
            const user = response.data[0];
            const id = user.id;
            const name = user.name;
            const username = user.username;
            const email = user.email;
     //       const password = user.password;

            this.setState({id, name,username,email});
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
          <Card title = "Atualizar dados do Usuário ">
          
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "ID Usuário: " htmlForm = "InputId">
                <input number = 'text'disabled= {true}className="form-control" id="InputId" value={this.state.id} onChange={e => {this.setState({id: e.target.value})}}/>
                </FormGroup> 

                <FormGroup label = "Name" htmlForm = 'inputName'>
                  <input type="text" className="form-control" id="inputName" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}}/> 
                </FormGroup>

                <FormGroup label = "Username" htmlForm = 'inputUsername'>
                  <input type="text" className="form-control" id="inputUsername" value={this.state.username} onChange={e => {this.setState({username: e.target.value})}}/> 
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
export default withRouter(UpdateUser);