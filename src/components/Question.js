import React, {Component} from 'react'
import { connect } from 'react-redux'


class Question extends Component {

  render(){

    return (

      <div className='base-component'>

      <div> Question showResults: {this.props.showResults?'yes':'no'} id: {this.props.id}</div>
    
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


  if(authedUser !== null){

    author = users[question.author]
    userAnsweredQuestions = users[authedUser].answers
    Object.keys(userAnsweredQuestions).includes(id) && (
      userAnswered = userAnsweredQuestions[id]
    )

/*     console.group('questionProps :')
      console.log( 'showResults : ',showResults)
      console.log( 'question : ',question)
      console.log( 'author : ',author)
      console.log( 'userAnswered : ',userAnswered)
    console.groupEnd() */

  }


  return(
    {
      showResults , 
      question ,
      author ,
      userAnswered ,
      
    }
  )



}

export default connect(mapStateToProps)(Question)