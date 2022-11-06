import React from 'react';

import NavBarItem from './NavBarItem';

function NavBar(){
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Imóveis</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <NavBarItem href = "/" label = 'Home'/>
            <NavBarItem href = "/login" label = 'Login' />
            <NavBarItem href = "/createClient" label = 'Novo Cliente'/>
            <NavBarItem href = "/updateClient" label = 'Atualizar Cliente'/>
            <NavBarItem href = "/deleteClient" label = 'Deletar Cliente'/>
            <NavBarItem href = "/viewClient" label = 'Buscar Cliente'/>




        </ul> 
        
    </div>
  </div>
</div>
    )
}

export default NavBar;