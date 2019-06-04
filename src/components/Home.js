import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionList from '../components/QuestionList'


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
              < QuestionList id= {q.id}  />
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
    questionsList: questionsList.sort(
      (a,b)=> questions[b.id].timestamp - questions[a.id].timestamp 
    )
  }

}

export default connect(mapStateToProps)(Home)
