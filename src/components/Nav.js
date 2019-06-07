import React,  { Component }  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Nav extends Component {

render(){

  const { authedUserRecord } = this.props
  //console.log('NAV TEST', authedUserRecord)
// removed because of error activeClassName='active'


  return(
    <div className='navBar'>
      <div className='menu'>
        <Link to='/' >
          <div className='menu-item'>
            Home
          </div>
        </Link>

        <Link to='/leaderboard/'>

          <div className='menu-item'>
          leader board
          </div>
        </Link>

        <Link to='/add/' >
          <div className='menu-item'>
            Contribute
          </div>
        </Link>
        
        
      </div>
      <div className='menu-right'>
      <Link to='/authenticate/'>
          <div className='user-display-holder'>

          {          
          authedUserRecord === undefined 
          ? 
            <div className='logout'>
              <p> 
                log in
              </p>
            </div>
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