import React from 'react';

import NavBarItem from './NavBarItem';

function NavBar(props){
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Imóveis</a>
        
        <button className="navbar-toggler" type="button"    data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <NavBarItem href = "/home" label = 'Home'/>
            <NavBarItem href = "/createUser" label = 'Cadastro de Usuário'/>
            <NavBarItem href = "/login" label = 'Login'/>


        </ul>
        
    </div>
  </div>
</div>
    )
}

export default NavBar;