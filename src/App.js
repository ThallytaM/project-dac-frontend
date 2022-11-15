import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css';
import './App.css';

import NavBar from './components/NavBar';
import AppRoutes from './main/AppRoutes';
import SessionProvider from './main/SessionProvider';

export default class App extends React.Component{

  render(){
    return (
      <div>
        <SessionProvider>
          <NavBar/>
          <AppRoutes/>
        </SessionProvider>
     
      </div>
    );
  }
}