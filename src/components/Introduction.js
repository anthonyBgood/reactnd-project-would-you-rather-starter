
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Redirect } from 'react-router-dom'

import logo from '../styles/logo.svg';

import { addAuthedUser, logOutAuthedUser } from '../actions/authedUser'


class Introduction extends Component {

    state = {
      returnBackOne: false , 

    }

  setAuthedUser = (e) =>{

    e.preventDefault()
    const id = e.target.value
    this.props.dispatch(addAuthedUser(id))
    //this.setState({ gotoNextAddress: true})

    if(this.state.returnBackOne){
      this.props.history.goBack()
    }else{
      this.props.history.push('/')
    }

  }

  logoutUser = (e) =>{
    e.preventDefault()
    this.props.dispatch(logOutAuthedUser())
  }


  componentDidMount(){
    // using react-router - if set to an address longer than the correct
    // route for this page, this is a signal that authorisation
    // is needed before undertaking an action, so setup to goBack(1)

    const { match } = this.props
    if(!match.isExact && !this.state.returnBackOne){
  
      this.setState(() => ({
        returnBackOne: true
      }))
  
    }
  
  }


  render(){

    const {authedUser, authedUserRecord} = this.props

   
    return(

      <div className="App">
          <header className="App-header">

            <h2>
              Would you Rather?
            </h2>

            {
              authedUser === null
              ? <div>
                  <p>  
                    Please select an avatar to start
                  </p>
                  <form >
                    <select 
                      className='user-select'
                      onChange={(e)=> this.setAuthedUser(e)}
                      key={this.props.userIds} 
                      >
                      <option value='0' >Select user:</option>
                      {
                        this.props.userIds.map(                          
                          (id) =>(
                            <option                               
                              key={id} 
                              value={[id]}>{id}
                            </option>
                          ))
                      }
                    </select>
                  </form>
                </div>
              : 
                <div>
                  <div className='logout'>
                    <p> {authedUserRecord.name }</p>
                    
                    <img 
                    src={authedUserRecord.avatarURL}
                    alt={`Avatar of ${authedUserRecord.name}`}
                    className='avatar-small'
                    /> 
                  </div>
                  <button onClick={this.logoutUser} className='user-log-out'>
                    Log Out
                  </button>
                </div>
                
            }





            <p className='Framework-declaration'>
                React/Redux
            </p>
            <img src={logo} className="App-logo" alt="logo" />



          </header>
        </div>

    )
  }
}

function mapStateToProps({users, authedUser}){

  return{
    
    userIds: Object.keys(users)
              .sort((a,b) => users[a].name<users[b].name?-1:1) ,
    
    authedUser,
    authedUserRecord:users[authedUser],
    
  }
}


export default connect (mapStateToProps)(Introduction)