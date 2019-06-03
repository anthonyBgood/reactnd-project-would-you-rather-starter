
import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../styles/logo.svg';

import { addAuthedUser, logOutAuthedUser } from '../actions/authedUser'


class Introduction extends Component {


  setAuthedUser = (e) =>{

    e.preventDefault()
    const id = e.target.value
    this.props.dispatch(addAuthedUser(id))
  }

  logoutUser = (e) =>{
    e.preventDefault()
    this.props.dispatch(logOutAuthedUser())
  }



  render(){

    const {authedUser, authedUserRecord} = this.props


    return(

      <div className="App">
          <header className="App-header">

            <h2>
              Would you Rather?
            </h2>
            <p className='Framework-declaration'>
                React/Redux
            </p>
            <img src={logo} className="App-logo" alt="logo" />

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
                      {
                        this.props.userIds.map(
                          (id) =>(
                            <option 
                              
                              key={id} 
                              value={[id]}>{id}</option>
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
                  <button onClick={this.logoutUser}>
                    Log Out
                  </button>
                </div>
                
            }

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