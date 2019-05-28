// from create react

import '../styles/App.css';

import React, { Component, Fragment } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'


import { handleInitialData } from '../actions/shared'
import Introduction from '../components/Introduction'
import Home from '../components/Home'
import Question from '../components/Question'



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

              <Question showResults ={false} id ={'6ni6ok3ym7mf1p33lnez'} />
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
