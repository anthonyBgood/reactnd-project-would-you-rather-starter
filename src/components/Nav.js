import React,  { Component }  from 'react'
import { Link } from 'react-router-dom'



class Nav extends Component {

render(){

  return(
    <div className='navBar'>
      <div className='menu'>
        <Link to='/'>
          <div className='menu-item'>
            Home
          </div>
        </Link>

          <div className='menu-item'>
            Play
          </div>
          
        <Link to='/new/'>
          <div className='menu-item'>
            Contribute
          </div>
        </Link>
        <Link to='/authenticate/'>
          <div className='menu-item'>
            Logout
          </div>
        </Link>
        
      </div>
    </div>
  )
}
}


export default Nav