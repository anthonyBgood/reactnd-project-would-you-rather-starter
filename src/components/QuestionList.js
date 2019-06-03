import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import QuestionHeader from '../components/QuestionHeader'


class QuestionList extends Component {

  formatDate (timestamp) {
    const d = new Date(timestamp)
    return d.toLocaleDateString()
  }

  render(){

    const {
      id , 
      question ,
      author ,
    } =  this.props 

    return (
      <Link to={`/question/${id}`} className='tweet'>
        <div className='question-base-component'>
          
          <div>
           {/*  <QuestionHeader id={id} /> */}

            <QuestionHeader 
              name={author.name} 
              timestamp={question.timestamp}
              avatarURL={author.avatarURL}
              />

            <div>{question.optionOne.text} OR...</div>
          </div>
        </div>
      </Link>
    )
  }
}


function mapStateToProps({authedUser, users, questions},
                          {id, showResults}){

  return(
    {
      id , 
      question: questions[id] ,
      author: users[questions[id].author] ,
    }
  )
}

export default connect(mapStateToProps)(QuestionList)