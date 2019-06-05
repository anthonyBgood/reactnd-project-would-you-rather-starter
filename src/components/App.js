// from create react

import '../styles/App.css';

import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'


import { handleInitialData } from '../actions/shared'

import Introduction from '../components/Introduction'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Question from '../components/Question'
import NewQuestion from '../components/NewQuestion'
import LeaderBoard from '../components/LeaderBoard'
import NotFound from './NotFound'



class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return(
      <Router>
        <div className='base-app'>
          
          <LoadingBar />

          {
            this.props.loading === true
            ? null

            : <Fragment>

                <Nav/>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/authenticate/' component={Introduction} />
                    <Route path='/add/' component={NewQuestion} />
                    <Route path='/question/:id' component={Question}/>
                    <Route path='/leaderboard/' component={LeaderBoard}/>

                    <Route component={NotFound}/>
                    
                  </Switch>
                
              </Fragment> 
          } 
          
        </div>
      </Router>
    )
  
  }
}

function MapStateToProps({users, authedUser}){

  return{
    loading: Object.keys(users).length === 0 , 
    loggedIn: authedUser !== null ,
  }
}

export default connect(MapStateToProps)(App)
