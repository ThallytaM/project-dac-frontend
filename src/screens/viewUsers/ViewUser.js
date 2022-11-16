import React from 'react';
import './ViewUser.css';

import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import FormGroup from '../../components/FormGroup';
import Card from '../../components/Card';
import UsersTable from '../../components/UsersTable';

import UserApiService from '../../services/UserApiService';

class ViewUser extends React.Component{
 
  state = {
    id: '',
    name: '',
    username: '',
    email: '',
    users: []
  }

  constructor(){
    super();
    this.service = new UserApiService();
  }

  componentDidMount(){
    this.find();
  }

  delete = (userId) => {
    //axios.delete(`http://localhost:8080/api/user/${userId}`,
    this.service.delete(userId
    ).then(response => 
      {
        this.find();
      }).catch(error =>
        {
          console.log(error.response);
        }
        
      );
  }
  edit = (userId)=>{
    this.props.history.push(`/updateUser/${userId}`);
  }

  find = ()=> {
 //  this.service.find(id)

    var params = '?';

    if(this.state.id != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}id =${this.state.id}`;
    }

    if(this.state.name != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}name =${this.state.name}`;
    }

    if(this.state.username != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}username =${this.state.username}`;
    }

    if(this.state.email != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}email =${this.state.email}`;
    }

    //axios.get(`http://localhost:8080/api/user${params}`
    this.service.get(this.state.id)
    .then(response => 
      {
        const users = response.data;
        this.setState({users});
        console.log(users);
      }).catch(error =>
        {
          console.log(error.response);
        }
        
      );
  }


  render(){
    return (
      <div className="container">

          <Card title = "Usuários">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <FormGroup label = "Id " htmlForm = "InputId">
                 <input type="text" className="form-control" id="inputId" placeholder = 'Digite o Id do usuário' value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}} /> 
                </FormGroup>      

                <FormGroup label = "Usuário" htmlForm = 'inputUserName'>
                  <input type = 'text' className="form-control" id="inputUserName" placeholder="Digite o nome do usuário" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
                </FormGroup>
                    
                <br/>
                <button onClick={this.find} type='button' className="btn btn-primary"> Buscar </button>
                </div>

              </div>
            </div>          
          </Card>

          <br/>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <UsersTable users={this.state.users}
                delete={this.delete}
                edit = {this.edit}/>
              </div>

            </div>

          </div>



      </div>
    );
  }
}
export default withRouter(ViewUser);