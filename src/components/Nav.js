import React,  { Component }  from 'react'
import { Link } from 'react-router-dom'



class Nav extends Component {

render(){

  return(
    <div className='navBar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          Play
        </li>
        <li>
        <Link to='/new/'>Contribute</Link>
        </li>
        <li>
        <Link to='/authenticate/'>Logout</Link>
        </li>
        
      </ul>
    </div>
  )
}
}


export default Nav