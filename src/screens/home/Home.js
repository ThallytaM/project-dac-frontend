import React from 'react'
import './Home.css';
import logo from '../../img/logo192.png';

import { withRouter } from 'react-router-dom'; 
import Card from '../../components/Card';

class Home extends React.Component{

   getLoggedUser = () => {
    var value = localStorage.getItem("loggedUser");
    var user = JSON.parse(value);
    return user;
   }

  render(){
    return (
      <div className="container">
      <img src = {logo}/>
      
     
      <Card title = "" >
      <label>Projeto desenvolvido para a disciplina de DAC</label>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <label>Usuário logado: {this.getLoggedUser().name}</label>

          
          
                </div>
              </div>
            </div>
          </Card>             
  
         
      </div>
    );
  }
}

export default withRouter(Home);
