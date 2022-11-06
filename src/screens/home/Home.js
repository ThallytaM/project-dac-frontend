import React from 'react'
import './Home.css';

import { withRouter } from 'react-router-dom'; 
import Card from '../../components/Card';

class Home extends React.Component{

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

export default withRouter(Home);
