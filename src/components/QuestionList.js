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
            <QuestionHeader id={id} />


  {/*               <div className='question-title'>

              <div className='flex-column'>
              <div> 
                {author.name} asked on {this.formatDate(question.timestamp)} 
              </div>
              <div>WOULD YOU RATHER</div>
              </div>


              <img 
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
              />
              
            </div> */}
            
            
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