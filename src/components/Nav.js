import React,  { Component }  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Nav extends Component {

render(){

  const { authedUserRecord } = this.props
  console.log('NAV TEST', authedUserRecord)

  return(
    <div className='navBar'>
      <div className='menu'>
        <Link to='/' activeClassName='active'>
          <div className='menu-item'>
            Home
          </div>
        </Link>

        <Link to='/leaderboard/'>

          <div className='menu-item'>
          leader board
          </div>
        </Link>

        <Link to='/new/' activeClassName='active'>
          <div className='menu-item'>
            Contribute
          </div>
        </Link>
        
        
      </div>
      <div>
      <Link to='/authenticate/'>
          <div className='menu-item'>

          {          
          authedUserRecord === undefined 
          ? 
              <p> 
                log in
              </p>

          :

            <div className='logout'>
              <p> 
                {authedUserRecord.name}
              </p>
              
              <img 
              src={authedUserRecord.avatarURL}
              alt='test'
              className='avatar-small'
              /> 
            </div>
          
            }
          </div>
            
          
        </Link>

      </div>
    </div>
  )
}
}

function mapStateToProps({users, authedUser}){

  return{
    authedUser,
    authedUserRecord:users[authedUser],
    
  }
}

export default connect(mapStateToProps)(Nav)