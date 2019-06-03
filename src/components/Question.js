import React, {Component} from 'react'
import { connect } from 'react-redux'

import {OPTION_ONE, OPTION_TWO, handlePreferenceRecord} from '../actions/questions'
import QuestionHeader from '../components/QuestionHeader'


class Question extends Component {



  formatDate (timestamp) {
    const d = new Date(timestamp)
    return d.toLocaleDateString()
  }


  recordPreference (e) {
      
    e.preventDefault()
    const optionPreference = e.target.name
    const {dispatch, userAnswered, question , authedUser} =  this.props 

    /* const info = { authedUser, qid: question.id , answer: optionPreference }
    console.log('recordPreference: ',userAnswered, info)  */

    userAnswered
    ? alert("you have already voted in this poll")
    : dispatch(handlePreferenceRecord({ 
        authedUser, 
        qid: question.id , 
        answer: optionPreference }))

  }

  render(){

    const {
      id, 
      showResults , 
      question ,
      author ,
      userAnswered ,
      voteHistory ,
      
    } =  this.props 





    return (

      <div className='question-base-component'>


        {author !== null &&

          
          <div>
            <QuestionHeader id={id} />

            <div className='question-wouldYouRather'>

              <button 
                className='wouldYouRather-options'
                name={OPTION_ONE} 
                onClick={(e)=> this.recordPreference(e)}>
                {question.optionOne.text}
              </button>
              <div className='wouldYouRather-or'> 
               OR
               </div>
              <button                 
                className='wouldYouRather-options'
                name={OPTION_TWO}
                onClick={(e)=> this.recordPreference(e)}>
                {question.optionTwo.text}
              </button>

            </div>
          
          </div>

        }


        

        <div className='question-results'> 
          <div>
            showResults: {showResults?'yes':'no'} 
          </div>
          <div>
            percentage option1: {voteHistory.percentageOption1}
          </div>
          <div>
            total votes: {voteHistory.totalVotes}
          </div>
          <div>
            authedUser choice: {userAnswered}
          </div>
        </div>
    
      </div>
    )
  }
}


function mapStateToProps({authedUser, users, questions},props){

  
  //{id, showResults}
  const { id, showResults } = props.match.params
  
  const question = questions[id]

   //DEV: problems with seeking before state populated

  let author = null
  let userAnswered = null
  let userAnsweredQuestions = null
  let voteHistory ={}


  if(authedUser !== null){

    author = users[question.author]
    userAnsweredQuestions = users[authedUser].answers
    Object.keys(userAnsweredQuestions).includes(id) && (
      userAnswered = userAnsweredQuestions[id]
    )


    voteHistory.option1Votes = question.optionOne.votes.length
    voteHistory.totalVotes =  voteHistory.option1Votes + question.optionTwo.votes.length
    voteHistory.percentageOption1 = Math.round(
        voteHistory.option1Votes === 0? 0 : 100 * voteHistory.option1Votes/voteHistory.totalVotes)



/*     console.group('questionProps :')
      console.log( 'showResults : ',showResults)
      console.log( 'question : ',question)
      console.log( 'author : ',author)
      console.log( 'userAnswered : ',userAnswered)
      console.log( 'voteHistory : ',voteHistory)
    console.groupEnd() */

  }


  return(
    {
      id ,
      showResults , 
      question ,
      author ,
      userAnswered , 
      voteHistory , 
      authedUser ,
      
    }
  )



}

export default connect(mapStateToProps)(Question)