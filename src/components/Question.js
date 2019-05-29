import React, {Component} from 'react'
import { connect } from 'react-redux'


class Question extends Component {



  formatDate (timestamp) {
    const d = new Date(timestamp)
    return d.toLocaleDateString()
  }

  render(){

    const {
      showResults , 
      question ,
      author ,
      userAnswered ,
      voteHistory ,
      
    } =  this.props 


    //const {name, avatar, } = author


    return (

      <div className='question-base-component'>


        {author !== null &&

          
          <div>
            <div className='question-title'>

              <div> 
                {author.name} asked on {this.formatDate(question.timestamp)} would you rather?
              </div>
              <img 
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
              />

            </div>
            <div className='question-wouldYouRather'>

              <button className='wouldYouRather-options'>
                {question.optionOne.text}
              </button>
              <div className='wouldYouRather-or'> 
               OR
               </div>
              <button className='wouldYouRather-options'>
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


function mapStateToProps({authedUser, users, questions},{id, showResults}){

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
      showResults , 
      question ,
      author ,
      userAnswered , 
      voteHistory ,
      
    }
  )



}

export default connect(mapStateToProps)(Question)