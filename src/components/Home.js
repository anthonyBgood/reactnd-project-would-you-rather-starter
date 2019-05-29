import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from '../components/Question'


class Home extends Component{


  state = {
    listAnswered: false ,
  }

  changeListDisplayed = (displayAnswered) =>{

    this.setState({listAnswered: displayAnswered})

  }

  render(){
    const { listAnswered }= this.state

    return(
      <div className='base-component'>
        
        <button onClick={()=>this.changeListDisplayed(true)}>
          Answered
        </button>
        <button onClick={()=>this.changeListDisplayed(false)}>
          Unanswered
        </button>

        <span>
          {listAnswered?'SHOW ANSWERED':'SHOW NOT ANSWERED'}
        </span>

        <ul className='question-list'>
          {this.props.questionsList.map((q) =>(
            
            listAnswered === q.answered &&
            
            <li key={q.id}>  
              < Question showResults = {false} id= {q.id}  />
            </li>

          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}){

  let answered =[]
  authedUser !== null && (answered = Object.keys(users[authedUser]['answers']))

  const questionsList = Object.keys(questions).map(
    (id)=> (
      {
        id,
        answered: answered.includes(id)
      }
    ))

  return {
    questionsList
  }

}

export default connect(mapStateToProps)(Home)
