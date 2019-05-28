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


        <div>
          {listAnswered?'SHOW ANSWERED':'DO NOT SHOW ANSWERED'}
        </div>

        <ul>
          {this.props.questionIds.map((id) =>(
            <li key={id}>
              

              < Question id={id}/>
            </li>
          ))}
        </ul>




      </div>
    )
  }
}

function mapStateToProps({questions}){

  return {

    questionIds: Object.keys(questions)

  }

}


export default connect(mapStateToProps)(Home)
