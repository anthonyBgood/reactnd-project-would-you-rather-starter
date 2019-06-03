
import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserList from '../components/UserList'

class LeaderBoard extends Component {

  render(){

    const { userList } = this.props
    console.log('LEADERBOARD: ',userList)

    return(
      <div className='base-component'>
        <div>LeaderBoard</div>
        <div>


        <ul className='question-list'>
          {userList.map((user) =>(
            
            
            <li key={user.id}>  
              < UserList user= {user}  />
            </li>

          ))}
        </ul>

        </div>



      </div>

    )
  }
}

function mapStateToProps({users}){

  const userList = Object.keys(users).map((userId)=>{
    
    const user = users[userId] 
    return({

    
    id: userId , 
    name: user.name ,
    avatarURL: user.avatarURL ,
    answersCount: Object.keys(user.answers).length , 
    questionsCount: user.questions.length ,
    score:  (Object.keys(user.answers).length) + (user.questions.length)

  })})

  return(
    {
      userList: userList.sort((a,b)=> b.score - a.score) 
    }
  )
}
export default connect (mapStateToProps)(LeaderBoard)