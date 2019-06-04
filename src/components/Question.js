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
    const {dispatch, authedUserResponse, question , authedUser} =  this.props 

    /* const info = { authedUser, qid: question.id , answer: optionPreference }
    console.log('recordPreference: ',authedUserResponse, info)  */

    authedUserResponse
    ? alert("you have already voted in this poll")
    : dispatch(handlePreferenceRecord({ 
        authedUser, 
        qid: question.id , 
        answer: optionPreference }))

  }


  resultsSummary(option){

    const { showResults, voteHistory, authedUserResponse } =  this.props 

    
    if(!showResults){
      return
    }
    
    let votes, totalVotes, pcFor, classVal, iconDiv

    totalVotes = voteHistory.totalVotes

    if(option === OPTION_ONE){
      votes = voteHistory.option1Votes
      pcFor = voteHistory.percentageOption1
      classVal = 'icon-positioning-1'


      iconDiv = null
      if(authedUserResponse === OPTION_ONE){
        iconDiv = (
          <div className={classVal}>
            <i className="far fa-thumbs-up"></i>
          </div>
        )
      }
      


    }else{
      votes = voteHistory.option2Votes
      pcFor = voteHistory.percentageOption2
      classVal = 'icon-positioning-2'

      iconDiv = null
      if(authedUserResponse === OPTION_TWO){
        iconDiv = (
          <div className={classVal}>
            <i className="far fa-thumbs-up"></i>
          </div>
        )
      }

    }

  return(

    <div>
      <div>
        {votes} Votes of {totalVotes} ({pcFor}%)
      </div>
      {iconDiv}
    </div>


  )}


      /*         <div>
            <div>
              {votes} Votes of {totalVotes} ({pcFor}%)
            </div>
            <div className={classVal}>
              <i className="far fa-thumbs-up"></i>
            </div>

          </div> */


  render(){

    const {

      showResults , 
      question ,
      author ,
      authedUserResponse ,
      voteHistory , 
      loggedIn , 
      
    } =  this.props 







    if(!(loggedIn)){
      this.props.history.push('/authenticate/' )
    }



    return (

      <div className='question-base-component'>

        {author !== null &&

          <div>
           
            <QuestionHeader 
              name={author.name} 
              timestamp={question.timestamp}
              avatarURL={author.avatarURL}
              />

            <div className='question-wouldYouRather'>

              <button 
                disabled={showResults}
                className='question-wouldYouRather-options'
                name={OPTION_ONE} 
                onClick={(e)=> this.recordPreference(e)}>
                {question.optionOne.text}
                {this.resultsSummary(OPTION_ONE)}

              </button>


              <div className='question-wouldYouRather-or'> 
               OR                
              </div>


              <button                 
                disabled={showResults}
                className='question-wouldYouRather-options'
                name={OPTION_TWO}
                onClick={(e)=> this.recordPreference(e)}>
                {question.optionTwo.text}
                {this.resultsSummary(OPTION_TWO)}

              </button>
            </div>
          </div>

        }

            {/* 
                    {showResults &&
                      (
                      <div className='question-results'> 
                        <div>
                          authedUserResponse: {authedUserResponse}
                        </div>
                        <div>
                          total votes: {voteHistory.totalVotes}
                        </div>
                      </div>
                      )}
                */}
      </div>
    )
  }
}


function mapStateToProps({authedUser, users, questions},props){

  
  const { id } = props.match.params
  const question = questions[id]

  let author = null
  let authedUserResponse = null
  let showResults =false
  let voteHistory ={}

  if (question !==undefined){

    // the question's author details
    author = users[question.author]

    // info from the authorised user
    if(authedUser !== null){

      Object.keys(users[authedUser].answers).includes(id) 
      && 
      (authedUserResponse = users[authedUser].answers[id])
    }

    (authedUserResponse) && (showResults=true)

    // voting history results
    voteHistory.option1Votes = question.optionOne.votes.length
    voteHistory.option2Votes = question.optionTwo.votes.length

    // derived from the above two values...
    voteHistory.totalVotes =  voteHistory.option1Votes + voteHistory.option2Votes
    voteHistory.percentageOption1 = 
      Math.round(
        voteHistory.option1Votes === 0
        ? 0 
        : 100 * voteHistory.option1Votes/voteHistory.totalVotes)
    voteHistory.percentageOption2 = 100 -voteHistory.percentageOption1
  }

  return(
    {

      showResults , 
      question ,
      author ,
      authedUserResponse , 
      voteHistory , 
      authedUser , 
      loggedIn: authedUser !== null ,
      
    }
  )
}

export default connect(mapStateToProps)(Question)