// from create react

import '../styles/App.css';

import React, { Component, Fragment } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'


import { handleInitialData } from '../actions/shared'

//import Introduction from '../components/Introduction'
//import Home from '../components/Home'
import Question from '../components/Question'
//import NewQuestion from '../components/NewQuestion'



class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return(
      <div className='base-app'>
        

        <LoadingBar />

         {
          this.props.loading === true
          ? null
          : <Fragment>
              {/*<Introduction />*/}
              {/* <Home /> */}

              <Question showResults ={false} id ={'vthrdm985a262al8qx3do'} /> 

              {/* <NewQuestion /> */}
            </Fragment> 
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
