
import React, { Component } from 'react'

import logo from '../styles/logo.svg';

class Introduction extends Component {

  render(){
    return(

      <div className="App">
          <header className="App-header">
            <h2>
              Anthony's 
            </h2>
            <h2>
              Would you Rather?
            </h2>
            <p className='Framework-declaration'>
                React/Redux
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Please select a user to start
            </p>
          </header>
        </div>

    )
  }
}


export default Introduction