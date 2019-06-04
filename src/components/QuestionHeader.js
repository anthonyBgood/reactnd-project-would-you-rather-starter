import React, { Component } from 'react';



class QuestionHeader extends Component{



/*   formatDate = (ts) => {
    const d = new Date(ts)
    return d.toLocaleDateString()
  } */

  formatDate (timestamp) {

    // request a weekday along with a long date
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(timestamp)

    return d.toLocaleDateString('en-AU',options)
  }

  render(){

    const {name, timestamp, avatarURL} = this.props

    return(

      <div className='question-title'>

        <div className='flex-column'>
        <div> 
          {name} asked on {this.formatDate(timestamp)} 
        </div>
        <div>WOULD YOU RATHER</div>
        </div>


        <img 
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        
      </div>

    )}
}


/* function mapStateToProps({questions,users},{id}){

  const question =  questions[id] 
  const userAuthor = users[question.author]

    return(
      {
        name: userAuthor.name , 
        timestamp: question.timestamp , 
        avatarURL: userAuthor.avatarURL ,
      }
    )
}
 */

export default QuestionHeader