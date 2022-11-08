import React from 'react';

import NavBarItem from './NavBarItem';

function NavBar(){
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">MI</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <NavBarItem href = "/" label = 'Home'/>
            <NavBarItem href = "/login" label = 'Login' />
            <NavBarItem href = "/viewClient" label = 'Clientes'/>
            <NavBarItem href = "/createClient" label = 'Novo Cliente'/>
            <NavBarItem href = "/updateClient" label = 'Atualizar Cliente'/>
            <NavBarItem href = "/deleteClient" label = 'Excluir Cliente'/>
            <NavBarItem href = "/viewProperty" label = 'Propriedades'/>
            <NavBarItem href = "/createProperty" label = 'Nova Propriedade'/>
            <NavBarItem href = "/updateProperty" label = 'Atualizar Propriedade'/>
            <NavBarItem href = "/deleteProperty" label = 'Excluir Propriedade'/>
            <NavBarItem href = "/viewContract" label = 'Contratos'/>
            <NavBarItem href = "/createContract" label = 'Novo Contrato'/>
            <NavBarItem href = "/updateContract" label = 'Atualizar Contrato'/>
            <NavBarItem href = "/deleteContract" label = 'Excluir Contrato'/>
        

        </ul> 
        
    </div>
  </div>
</div>
    )
}

export default NavBar;