import React from 'react'
import './Home.css';

import 'bootswatch/dist/flatly/bootstrap.css';
import Card from '../../components/Card';

export default class CreateUser extends React.Component{

  render(){
    return (
      <div className="container">
          <Card title = " DAC - Sistema Imobiliário">
            <div className='row'>
              <div className='col-lg-12'>
                <div className='bs-component'>
                <label> Projeto desenvolvido para a disciplina de DAC</label>
                  
                </div>
              </div>
            </div>
          </Card>             
      </div>
    );
  }
}
