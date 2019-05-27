// from create react

import '../styles/App.css';

import React, { Component } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'


import { handleInitialData } from '../actions/shared'
import Introduction from '../components/Introduction'



class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return(
      <div>
        

        <LoadingBar />

         {
          this.props.loading === true
          ? null
          : <div>
              <Introduction />
            </div> 
        } 
        
      </div>
    )
  
  }
}

function MapStateToProps({users}){

  return{
    loading: Object.keys(users).length === 0
  }
}

export default connect(MapStateToProps)(App)
