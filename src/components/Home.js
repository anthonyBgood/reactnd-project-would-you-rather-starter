import React, { Component } from 'react'


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




      </div>
    )
  }
}


export default Home
