// from create react
import logo from '../styles/logo.svg';
import '../styles/App.css';

import React, { Component, Fragment } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { connect } from 'react-redux'
//import LoadingBar from 'react-redux-loading'


class App extends Component {


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


export default App;
