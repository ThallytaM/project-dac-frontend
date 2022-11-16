import React, { useContext } from 'react';
import logo from '../img/logo192.png';

import NavBarItem from './NavBarItem';
import {AuthConsumer} from "../main/SessionProvider";


function NavBar(props){

    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img src = {logo} width="60" height="60" class="d-inline-block align-top" alt=""/></a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarColor01">
        <div className="mr-auto"></div>
        <ul className="navbar-nav me-auto">
            <NavBarItem render={!props.isAuthenticated} href = "/" label = 'Home'/>
            <NavBarItem render={!props.isAuthenticated} href = "/login" label = 'Login' />
            
            <NavBarItem render={props.isAuthenticated} href = "/viewUser" label = 'Usuários'/>
            <NavBarItem render={props.isAuthenticated} href = "/viewClient" label = 'Clientes'/>
            <NavBarItem render={props.isAuthenticated}href = "/createClient" label = 'Novo Cliente'/>
            <NavBarItem render={props.isAuthenticated} href = "/viewProperty" label = 'Propriedades'/>
            <NavBarItem render={props.isAuthenticated} href = "/createProperty" label = 'Nova Propriedade'/>
            <NavBarItem render={props.isAuthenticated} href = "/viewContract" label = 'Contratos'/>
            <NavBarItem render={props.isAuthenticated} href = "/createContract" label = 'Novo Contrato'/>
             <NavBarItem render={props.isAuthenticated} href = "/login" onClick={props.logout} label = 'Sair' />
        </ul> 
           
               
                </div>
              </div>
            </div> 

        
  
    )
}

export default () => (
    <AuthConsumer>
        {(context) => (
            <NavBar isAuthenticated={context.isAuthenticated} logout={context.end}/>
        )}
    </AuthConsumer>
)