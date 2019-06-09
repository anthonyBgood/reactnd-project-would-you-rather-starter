import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {OPTION_ONE, OPTION_TWO, handlePreferenceRecord} from '../actions/questions'
import QuestionHeader from '../components/QuestionHeader'


class Question extends Component {

  formatDate (timestamp) {

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(timestamp)
    return d.toLocaleDateString('en-AU',options)

  }

  recordPreference (e) {
      
    e.preventDefault()
    const optionPreference = e.target.name
    const {dispatch, authedUserResponse, question , authedUser} =  this.props 

    //test if already responded before dispatching
    authedUserResponse
    ? alert("you have already voted in this poll")
    : dispatch(handlePreferenceRecord({ 
        authedUser, 
        qid: question.id , 
        answer: optionPreference }))

  }


  resultsSummary(option){

    const { showResults, voteHistory, authedUserResponse } =  this.props 

    // show only if user has already answered the question
    if(!showResults){
      return
    }
    
    
    let votes, totalVotes, pcFor, classVal, iconDiv
    totalVotes = voteHistory.totalVotes
    iconDiv = null

    // decide what values to return
    if(option === OPTION_ONE){

      votes = voteHistory.option1Votes
      pcFor = voteHistory.percentageOption1
      classVal = 'icon-positioning-1'

      // populate icon if user selected
      authedUserResponse === OPTION_ONE && (
        iconDiv = (
          <div className={classVal}>
            <i className="far fa-thumbs-up"></i>
          </div>
        ))

    }else{

      votes = voteHistory.option2Votes
      pcFor = voteHistory.percentageOption2
      classVal = 'icon-positioning-2'

      // populate icon if user selected
      authedUserResponse === OPTION_TWO && (
        iconDiv = (
          <div className={classVal}>
            <i className="far fa-thumbs-up"></i>
          </div>
        ))

    }

  return(

    <div>
      <div>
        {votes} Votes of {totalVotes} ({pcFor}%)
      </div>
      {iconDiv}
    </div>

  )}

  componentDidMount(){

    if(!(this.props.loggedIn)){
      this.props.history.push('/authenticate/logInBeforeProceeding' )
    }
  }

  render(){

    const {
      showResults , 
      question ,
      author ,
      questionNotFound ,
    } =  this.props 

    

    // question id is an error
    if (questionNotFound){
      return (
        <Redirect to='/NotFound/' />
      )
    }


    return (

      <div className='question-base-component'>
        <div>
          
          <QuestionHeader 
            name={author.name} 
            timestamp={question.timestamp}
            avatarURL={author.avatarURL}
            />

          <div className='question-wouldYouRather'>

            <button 
              className='question-wouldYouRather-options'
              disabled={showResults}
              name={OPTION_ONE} 
              onClick={(e)=> this.recordPreference(e)}>
              {question.optionOne.text}
              
              {// show results
              this.resultsSummary(OPTION_ONE)}

            </button>


            <div className='question-wouldYouRather-or'> 
              OR                
            </div>


            <button                 
              className='question-wouldYouRather-options'
              disabled={showResults}
              name={OPTION_TWO}
              onClick={(e)=> this.recordPreference(e)}>
              {question.optionTwo.text}

              {// show results
              this.resultsSummary(OPTION_TWO)}

            </button>

          </div>
        </div>
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
      questionNotFound: question === undefined ,

    }
  )
}

export default connect(mapStateToProps)(Question)