import React, { Component } from 'react'



class UserList extends Component{

  render(){

    const { 
      id, 
      name ,
      avatarURL ,
      answersCount , 
      questionsCount ,
      score, 
      } = this.props.user

    return(

      <table>
        <tbody>
        <tr>
          <th>id</th>
          <td>{id}</td>
        </tr>
        <tr>
          <th>name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>avatarURL</th>
          <td>{avatarURL}</td>
        </tr>
        <tr>
          <th>answersCount</th>
          <td>{answersCount}</td>
        </tr>
        <tr>
          <th>questionsCount</th>
          <td>{questionsCount}</td>
        </tr>
        <tr>
          <th>score</th>
          <td>{score}</td>
        </tr>
        </tbody>
      </table>
    )

  }
}

export default UserList