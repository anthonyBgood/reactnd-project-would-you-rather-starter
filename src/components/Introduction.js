
import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from '../styles/logo.svg';

import addAuthedUser from '../actions/authedUser'

class Introduction extends Component {


  setAuthedUser = (e) =>{

    e.preventDefault()
    const id = e.target.value
    this.props.dispatch(addAuthedUser(id))
  }



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
              Please select an avatar to start
            </p>

            <form >
              <select 
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
          </header>
        </div>

    )
  }
}

function mapStateToProps({users}){

  return{
    userIds: Object.keys(users)
              .sort((a,b) => users[a].name<users[b].name?-1:1)
  }
}


export default connect (mapStateToProps)(Introduction)